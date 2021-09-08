import { TDBCreateBook, TDBUpdateBook } from "../../../types/book";
import { TBookMutation, TBookQuery, TBook } from "../../../types/graphql";
import { makeDirFile, removeDir } from "../../utils/uploadFIle";
import { saveBookPic } from "./utils";

export const Query: TBookQuery = {
  book: async (_, { bookId }, { db }) =>
    await db.book.findUnique({ where: { id: bookId } }),
  books: async (_, __, { db }) => await db.book.findMany(),
};

export const Mutation: TBookMutation = {
  createBook: async (_, { data, cover, bookPics }, { db }) => {
    const { imgDir } = await makeDirFile({
      dirLoc: "/server/static/uploads/books",
    });
    const imageInfo =
      (cover || bookPics) &&
      (await saveBookPic({ imgDir, cover, bookPics }).catch((err) => {
        removeDir(imgDir);
        throw err;
      }));
    const newData: TDBCreateBook = {
      title: data.title,
      synopsis: data.synopsis || undefined,
      edition: data.edition || undefined,
      series: data.series || undefined,
      releaseYear: data.releaseYear || undefined,
      numberOfPages: data.numberOfPages || undefined,
      height: data.height || undefined,
      weight: data.weight || undefined,
      stock: data.stock,
      price: data.price,
      imgDir,
      rating: data.rating || undefined,
      Category: {
        connect: data.Category
          ? data.Category.map((cat) => ({ id: cat.id }))
          : undefined,
      },
      Author: { connect: data.Author ? { id: data.Author.id } : undefined },
      BookPicture: { create: imageInfo || undefined },
    };

    try {
      return await db.book.create({ data: newData });
    } catch (error) {
      await removeDir(imgDir);
      throw error;
    }
  },

  updateBook: async (_, { data }, { db }) => {
    const newData: TDBUpdateBook = {
      title: data.title || undefined,
      synopsis: data.synopsis || undefined,
      edition: data.edition || undefined,
      series: data.series || undefined,
      releaseYear: data.releaseYear || undefined,
      numberOfPages: data.numberOfPages || undefined,
      height: data.height || undefined,
      weight: data.weight || undefined,
      stock: data.stock || undefined,
      price: data.price || undefined,
      rating: data.rating || undefined,
      Category: {
        set: data.Category
          ? data.Category.map((cat) => ({ id: cat.id }))
          : undefined,
      },
      Author: { connect: data.Author ? { id: data.Author.id } : undefined },
    };
    return await db.book.update({
      where: { id: data.bookId },
      data: newData,
    });
  },

  deleteBook: async (_, { bookId }, { db }) => {
    const book = await db.book.delete({ where: { id: bookId } });
    await removeDir(book.imgDir);
    return book;
  },
};

export const Book: TBook = {
  Author: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { Author: true },
    });
    return book.Author;
  },
  Category: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { Category: true },
    });
    return book.Category;
  },
  BookPicture: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { BookPicture: true },
    });
    return book.BookPicture;
  },
};
