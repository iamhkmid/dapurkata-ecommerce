import { TGQLBook } from "./book";
import { TGQLUser } from "./user";

export type TSaveBookPic = {
  cover?: any;
  bookPics?: any[];
  imgDir?: string;
};
export type TSaveUserPic = {
  userPic?: any;
  imgDir?: string;
};

export type TGQLBookPic = {
  id: string;
  type: string;
  url: string;
  bookId: string;
  Book?: TGQLBook;
  createdAt: Date;
  updatedAt: Date;
};

export type TGQLUserPic = {
  id: string;
  url: string;
  userId: string;
  User?: TGQLUser;
  createdAt: Date;
  updatedAt: Date;
};
