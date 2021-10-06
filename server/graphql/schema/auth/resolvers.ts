import {
  ApolloError,
  AuthenticationError,
  ValidationError,
} from "apollo-server-errors";
import { TAuthMutation, TAuthQuery } from "../../../types/graphql";
import { confirmCodeTemp, createToken, genConfirmCode } from "./utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { checkUser, hashPassword, saveUserPic } from "../user/utils";
import { makeDirFile, removeDir } from "../../utils/uploadFIle";
import cuid from "cuid";
import moment from "moment";
import { TCacheRegisterConfirm } from "../../../types/auth";

export const Query: TAuthQuery = {
  checkUser: async (_, __, { db, req }) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!!token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const findUser = await db.user.findUnique({
          where: { id: decoded["id"] },
        });
        if (!findUser) throw new AuthenticationError("User not found");
        return findUser;
      } catch (error) {
        throw error;
      }
    } else {
      throw new AuthenticationError("Authentication is required");
    }
  },
};

export const Mutation: TAuthMutation = {
  signin: async (_, args, { db, mail }) => {
    const { username, password, rememberMe } = args;
    const findUser = await db.user.findUnique({
      where: { username },
    });
    if (!findUser)
      throw new AuthenticationError("Username or Password incorrect");

    const checkPw = await bcrypt.compare(password, findUser.password);
    if (!checkPw)
      throw new AuthenticationError("Username or Password incorrect");

    const token = createToken({ id: findUser.id, role: findUser.role });
    return { jwt: token, user: findUser };
  },
  register: async (_, { data, userPic }, { mail, cache }) => {
    const check = await checkUser(data);
    if (!!check) throw new ValidationError(check + " already exists");

    const confirmId = `confirm-${cuid()}`;
    const expr = 300000; /* 5 minutes*/
    const expirationTime = new Date(new Date().getTime() + expr);
    const confirmCode = genConfirmCode(6);
    cache.set(confirmId, { userData: { ...data, userPic }, confirmCode }, expr);
    try {
      await mail.sendMail({
        from: `Penerbit Dapurkata <${process.env.COMPANY_EMAIL}>`, // sender address
        to: data.email, // list of receivers
        subject: "Konfirmasi Pendaftaran", // Subject line
        html: confirmCodeTemp({ expirationTime, confirmCode }), // html body
      });
    } catch (err) {
      throw new ApolloError("Error sending email on server");
    }

    return {
      confirmId,
      expirationTime,
      message: "Kode konfirmasi telah dikirim melalui email",
    };
  },
  registerConfirmation: async (_, args, { mail, cache }) => {
    const { confirmId, confirmCode } = args;
    if (!cache.has(confirmId))
      throw new ApolloError("Kode konfirmasi kaldaluarsa");

    const registerData = cache.get(confirmId) as TCacheRegisterConfirm;
    if (registerData.confirmCode !== confirmCode)
      throw new ApolloError("Kode konfirmasi salah");

    return {
      user: null,
      message: "Registration Successful",
    };
  },
};
