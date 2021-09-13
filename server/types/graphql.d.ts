import { TAPI } from "./api";
import { TGQLArgsSignin, TGQLCheckUser, TGQLSignin } from "./auth";
import {
  TArgsCreateAuthor,
  TArgsUpdateAuthor,
  TDBAuthor,
  TGQLAuthor,
} from "./author";
import { TArgsCreateBook, TArgsUpdateBook, TGQLBook } from "./book";
import {
  TArgsCreateCategory,
  TArgsUpdateCategory,
  TGQLCategory,
} from "./category";
import { TCtx } from "./gContext";
import {
  TGQLArgsCities,
  TGQLArgsCity,
  TGQLArgsCost,
  TGQLArgsCourier,
  TGQLArgsProvinces,
  TGQLCourier,
} from "./courier";
import { TDB } from "./db";
import { TGQLBookPic, TGQLUserPic } from "./picture";
import { TAPICity, TAPICost, TAPIProvince } from "./rajaOngkir";
import {
  TArgsCreateRcpt,
  TArgsUpdateRcpt,
  TDBRecipient,
  TGQLArgsAddRecipient,
  TGQLArgsEditRecipient,
  TGQLRecipient,
} from "./recipient";
import {
  TDBPaymentType,
  TGQLArgsOrder,
  TGQLArgsPaymentType,
  TGQLHowToPay,
  TGQLOrder,
  TGQLPaymentType,
} from "./transaction";
import {
  TArgsChangePassword,
  TArgsCreateUser,
  TArgsUpdateUser,
  TGQLArgsUser,
  TGQLUser,
} from "./user";
import {
  TArgsCreateSChart,
  TArgsUpdateSChart,
  TGQLSCart,
} from "./shoppingCart";

//BOOK SCHEMA
export type TBookQuery = {
  book: (
    parent: any,
    args: { bookId: string },
    context: TCtx
  ) => Promise<TGQLBook>;
  books: (parent: any, args: any, context: TCtx) => Promise<TGQLBook[]>;
};

export type TBookMutation = {
  createBook: (
    parent: any,
    args: TArgsCreateBook,
    context: TCtx
  ) => Promise<TGQLBook>;
  updateBook: (
    parent: any,
    args: TArgsUpdateBook,
    context: TCtx
  ) => Promise<TGQLBook>;
  deleteBook: (
    parent: any,
    args: { bookId: string },
    context: TCtx
  ) => Promise<TGQLBook>;
};

export type TBook = {
  Author: (parent: TGQLBook, args: any, context: TCtx) => Promise<TGQLAuthor>;
  Category: (
    parent: TGQLBook,
    args: any,
    context: TCtx
  ) => Promise<TGQLCategory[]>;
  BookPicture: (
    parent: TGQLBook,
    args: any,
    context: TCtx
  ) => Promise<TGQLBookPic[]>;
};

//AUTHOR SCHEMA
export type TAuthorQuery = {
  author: (
    parent: any,
    args: { authorId: string },
    context: TCtx
  ) => Promise<TGQLAuthor>;
  authors: (parent: any, args: any, context: TCtx) => Promise<TGQLAuthor[]>;
};

export type TAuthorMutation = {
  createAuthor: (
    parent: any,
    args: TArgsCreateAuthor,
    context: TCtx
  ) => Promise<TGQLAuthor>;
  updateAuthor: (
    parent: any,
    args: TArgsUpdateAuthor,
    context: TCtx
  ) => Promise<TGQLAuthor>;
  deleteAuthor: (
    parent: any,
    args: { authorId: string },
    context: TCtx
  ) => Promise<TGQLAuthor>;
};

export type TAuthor = {
  Book: (parent: TGQLAuthor, args: any, context: TCtx) => Promise<TGQLBook[]>;
};

//CATEGORY SCHEMA
export type TCategoryQuery = {
  category: (
    parent: any,
    args: { categoryId: string },
    context: TCtx
  ) => Promise<TGQLCategory>;
  categories: (
    parent: any,
    args: any,
    context: TCtx
  ) => Promise<TGQLCategory[]>;
};

export type TCategoryMutation = {
  createCategory: (
    parent: any,
    args: TArgsCreateCategory,
    context: TCtx
  ) => Promise<TGQLCategory>;
  updateCategory: (
    parent: any,
    args: TArgsUpdateCategory,
    context: TCtx
  ) => Promise<TGQLCategory>;
  deleteCategory: (
    parent: any,
    args: { categoryId: string },
    context: TCtx
  ) => Promise<TGQLCategory>;
};

export type TCategory = {
  Book: (parent: TGQLCategory, args: any, context: TCtx) => Promise<TGQLBook[]>;
};

export type TUserQuery = {
  user: (
    parent: any,
    args: { userId: string },
    context: TCtx
  ) => Promise<TGQLUser>;
  users: (parent: any, args: any, context: TCtx) => Promise<TGQLUser[]>;
};

export type TUserMutation = {
  createUser: (
    parent: any,
    args: TArgsCreateUser,
    context: TCtx
  ) => Promise<TGQLUser>;
  updateUser: (
    parent: any,
    args: TArgsUpdateUser,
    context: TCtx
  ) => Promise<TGQLUser>;
  deleteUser: (
    parent: any,
    args: { userId: string },
    context: TCtx
  ) => Promise<TGQLUser>;
  changePassword: (
    parent: any,
    args: TArgsChangePassword,
    context: TCtx
  ) => Promise<{ message: string }>;
};

export type TUser = {
  UserPicture: (
    parent: TGQLUser,
    args: any,
    context: TCtx
  ) => Promise<TGQLUserPic>;
  ShoppingCart: (
    parent: TGQLUser,
    args: any,
    context: TCtx
  ) => Promise<TGQLSCart[]>;
  Recipient: (
    parent: TGQLUser,
    args: any,
    context: TCtx
  ) => Promise<TGQLRecipient[]>;
};

export type TAuthQuery = {
  checkUser: (parent: any, args: any, context: TCtx) => Promise<TGQLCheckUser>;
};

export type TAuthMutation = {
  signin: (
    parent: any,
    args: TGQLArgsSignin,
    context: TCtx
  ) => Promise<TGQLSignin>;
  logout: (
    parent: any,
    args: any,
    context: TCtx
  ) => Promise<{ message: string }>;
};

export type TCourierQuery = {
  courier: (
    parent: any,
    args: TGQLArgsCourier,
    context: TCtx
  ) => Promise<TGQLCourier[]>;
  provinces: (parent: any, args: any, context: TCtx) => Promise<TAPIProvince[]>;
  province: (
    parent: any,
    args: TGQLArgsProvinces,
    context: TCtx
  ) => Promise<TAPIProvince>;
  cities: (
    parent: any,
    args: TGQLArgsCities,
    context: TCtx
  ) => Promise<TAPICity[]>;
  city: (parent: any, args: TGQLArgsCity, context: TCtx) => Promise<TAPICity>;
  courierCost: (
    parent: any,
    args: TGQLArgsCost,
    context: TCtx
  ) => Promise<TAPICost>;
};

export type TSChartQuery = {
  shoppingCart: (
    parent: any,
    args: { userId: string },
    context: TCtx
  ) => Promise<TGQLSCart[]>;
};

export type TSChartMutation = {
  createShoppingCart: (
    parent: any,
    args: TArgsCreateSChart,
    context: TCtx
  ) => Promise<TGQLSCart>;
  updateShoppingCart: (
    parent: any,
    args: TArgsUpdateSChart,
    context: TCtx
  ) => Promise<TGQLSCart>;
  deleteShoppingCart: (
    parent: any,
    args: { cartId: string },
    context: TCtx
  ) => Promise<TGQLSCart>;
};

export type TRecipientQuery = {
  recipient: (
    parent: any,
    args: { recipientId: string },
    context: TCtx
  ) => Promise<TGQLRecipient>;
  recipients: (
    parent: any,
    args: { userId: string },
    context: TCtx
  ) => Promise<TGQLRecipient[]>;
};

export type TRecipientMutation = {
  createRecipient: (
    parent: any,
    args: TArgsCreateRcpt,
    context: TCtx
  ) => Promise<TGQLRecipient>;
  updateRecipient: (
    parent: any,
    args: TArgsUpdateRcpt,
    context: TCtx
  ) => Promise<TGQLRecipient>;
  deleteRecipient: (
    parent: any,
    args: { recipientId: string },
    context: TCtx
  ) => Promise<TGQLRecipient>;
};

export type TTransactionQuery = {
  paymentType: (
    parent: any,
    args: TGQLArgsPaymentType,
    context: TCtx
  ) => Promise<TGQLPaymentType[]>;
  howToPay: (
    parent: any,
    args: { paymentId: string },
    context: TCtx
  ) => Promise<TGQLHowToPay[]>;
  order: (
    parent: any,
    args: { orderId: string },
    context: TCtx
  ) => Promise<TGQLOrder>;
  orders: (
    parent: any,
    args: { userId: string; filterBy: string },
    context: TCtx
  ) => Promise<TGQLOrder[]>;
};

export type TTransactionMutation = {
  order: (
    parent: any,
    args: TGQLArgsOrder,
    context: TCtx
  ) => Promise<TGQLOrder>;
};
