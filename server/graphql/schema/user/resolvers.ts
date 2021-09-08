import { ValidationError } from "apollo-server-errors";
import { TUser, TUserMutation, TUserQuery } from "../../../types/graphql";
import { makeDirFile, removeDir } from "../../utils/uploadFIle";
import { validateUser } from "../../utils/validateUser";
import { checkUser, hashPassword, saveUserPic } from "./utils";

export const Query: TUserQuery = {
  user: async (_, { userId }, { user, db }) => {
    const findUser = await db.user.findUnique({ where: { id: userId } });
    validateUser({
      targetRole: "USER",
      currRole: user.role,
      targetId: findUser?.id,
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
    const { imgDir } = await makeDirFile({
      dirLoc: "/server/static/uploads/profile",
    });
    const profilePicInfo =
      userPic &&
      (await saveUserPic({ imgDir, userPic }).catch((err) => {
        removeDir(imgDir);
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
        imgDir,
        UserPicture: { create: profilePicInfo || undefined },
      },
    });
  },

  updateUser: async (_, { userId, data }, { user, db }) => {
    const { username, email, password, role, phone, firstName, lastName } =
      data;
    const findUser = await db.user.findUnique({ where: { id: userId } });
    validateUser({
      targetRole: "USER",
      currRole: user.role,
      targetId: findUser?.id,
      currId: user.id,
    });
    const userFields = {
      firstName,
      lastName: lastName || undefined,
      username,
      email,
      password: await hashPassword(password),
      role,
      phone,
    };
    return await db.user.update({
      where: { id: userId },
      data: userFields,
    });
  },
  deleteUser: async (_, { userId }, { db }) => {
    return await db.user.delete({ where: { id: userId } });
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
  UserPicture: async ({ id }, _, { db }) =>
    (await db.user.findUnique({ where: { id }, select: { UserPicture: true } }))
      .UserPicture,
  Recipient: async ({ id }, _, { db }) =>
    (await db.user.findUnique({ where: { id }, select: { Recipient: true } }))
      .Recipient,
};
