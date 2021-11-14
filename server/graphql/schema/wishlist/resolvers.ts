import { string } from "yup/lib/locale";
import { TWishlistMutation, TWishlistQuery } from "../../../types/graphql";
import { validateUser } from "../../utils/validateUser";

export const Query: TWishlistQuery = {
  wishlist: async (_, __, { user, db }) => {
    const findUser = await db.user.findUnique({
      where: { id: user.id },
      select: { id: true },
    });

    validateUser({
      target: "SPECIFIC_USER",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    const wishlist = await db.wishlist.findUnique({
      where: { userId: user.id },
      include: {
        Book: {
          select: {
            id: true,
            title: true,
            Author: { select: { id: true, name: true } },
          },
        },
      },
    });
    return wishlist;
  },
};

export const Mutation: TWishlistMutation = {
  addWishlist: async (_, { bookId }, { user, db }) => {
    const findUser = await db.user.findUnique({
      where: { id: user.id },
      select: { id: true },
    });
    validateUser({
      target: "SPECIFIC_USER",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    await db.wishlist.upsert({
      where: { userId: user.id },
      create: {
        User: { connect: { id: user.id } },
        Book: { connect: { id: bookId } },
      },
      update: {
        Book: { connect: { id: bookId } },
      },
    });
    return { message: "Wishlist Ditambahkan" };
  },
  deleteWishlist: async (_, { bookId }, { user, db }) => {
    const findUser = await db.user.findUnique({
      where: { id: user.id },
      select: { id: true },
    });
    validateUser({
      target: "SPECIFIC_USER",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    await db.wishlist.update({
      where: { userId: user.id },
      data: {
        Book: { disconnect: { id: bookId } },
      },
    });
    return { message: "Wishlist Dihapus" };
  },
};
