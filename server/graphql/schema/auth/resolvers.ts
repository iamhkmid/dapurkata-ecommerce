import { AuthenticationError, ValidationError } from "apollo-server-errors";
import { TAuthMutation, TAuthQuery } from "../../../types/graphql";
import { createToken } from "./utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Query: TAuthQuery = {
  checkUser: async (_, __, { db, req }) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!!token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const findUser = await db.user.findUnique({
          where: { id: decoded["id"] },
          include: { UserPicture: true },
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
  signin: async (_, args, { db }) => {
    const { username, password, rememberMe } = args;
    const findUser = await db.user.findUnique({
      where: { username },
      include: { UserPicture: true },
    });
    if (!findUser)
      throw new AuthenticationError("Username or Password incorrect");

    const checkPw = await bcrypt.compare(password, findUser.password);
    if (!checkPw)
      throw new AuthenticationError("Username or Password incorrect");

    const token = createToken({ id: findUser.id, role: findUser.role });
    return { jwt: token, user: findUser };
  },
  logout: async (_, __, { user, res }) => {
    return { message: "You are logged out" };
  },
};
