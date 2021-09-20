import { AuthenticationError, ValidationError } from "apollo-server-errors";
import { ApolloError } from "apollo-server-express";
import { TUser, TUserMutation, TUserQuery } from "../../../types/graphql";
import { makeDirFile, removeDir } from "../../utils/uploadFIle";
import { validateUser } from "../../utils/validateUser";
import { checkUser, hashPassword, saveUserPic } from "./utils";
import bcrypt from "bcrypt";

export const Query: TUserQuery = {
  user: async (_, { userId }, { user, db }) => {
    const findUser = await db.user.findUnique({ where: { id: userId } });
    validateUser({
      target: "SPECIFIC_USER_OR_ADMIN",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    return findUser;
  },
  users: async (_, __, { db }) => await db.user.findMany(),
};

export const Mutation: TUserMutation = {
  createUser: async (_, { data, userPic }, { user, db }) => {
    const check = await checkUser(data);
    if (!!check) throw new ValidationError(check + " already exists");
    const { username, email, password, role, phone, firstName, lastName } =
      data;
    const { pictureDir } = await makeDirFile({
      dirLoc: "/server/static/uploads/profile",
    });
    const profilePicInfo =
      userPic &&
      (await saveUserPic({ pictureDir, userPic }).catch((err) => {
        removeDir(pictureDir);
        throw err;
      }));
    return await db.user.create({
      data: {
        firstName,
        lastName: lastName || undefined,
        username,
        email,
        password: await hashPassword(password),
        role: role && user?.role === "ADMIN" ? role : "USER",
        phone,
        pictureDir,
        userPicture: profilePicInfo?.url || undefined,
      },
    });
  },

  updateUser: async (_, { userId, data }, { user, db }) => {
    const { username, email, role, phone, firstName, lastName } = data;
    const findUser = await db.user.findUnique({ where: { id: userId } });
    validateUser({
      target: "SPECIFIC_USER_OR_ADMIN",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    const userFields = {
      firstName,
      lastName: lastName || undefined,
      username,
      email,
      role,
      phone,
    };
    return await db.user.update({
      where: { id: userId },
      data: userFields,
    });
  },
  deleteUser: async (_, { userId, username }, { db }) => {
    const findUser = await db.user.findUnique({ where: { id: userId } });
    if (!findUser) throw new ApolloError("User not found");
    if (findUser.username === username) {
      return await db.user.delete({ where: { id: userId } });
    } else {
      throw new ApolloError("Invalid username");
    }
  },
  changePassword: async (_, { data }, { db, user }) => {
    const { newPassword, oldPassword } = data;
    const findUser = await db.user.findUnique({
      where: { id: user.id },
      select: { id: true, password: true },
    });
    validateUser({
      target: "SPECIFIC_USER_OR_ADMIN",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });

    const checkPw = await bcrypt.compare(oldPassword, findUser.password);
    if (!checkPw) {
      throw new ApolloError("Password incorrect");
    } else {
      const updatePass = await db.user.update({
        where: { id: user.id },
        data: { password: await hashPassword(newPassword) },
      });
      if (updatePass) {
        return { message: "Password change successful" };
      } else {
        throw new ApolloError("Failed to save data");
      }
    }
  },
};

export const User: TUser = {
  ShoppingCart: async ({ id }, _, { db }) =>
    (
      await db.user.findUnique({
        where: { id },
        select: { ShoppingCart: true },
      })
    ).ShoppingCart,
  Recipient: async ({ id }, _, { db }) =>
    (await db.user.findUnique({ where: { id }, select: { Recipient: true } }))
      .Recipient,
};
