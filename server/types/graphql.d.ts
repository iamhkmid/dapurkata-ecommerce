import { TAPI } from "./api";
import { TGQLArgsSignin, TGQLCheckUser, TGQLSignin } from "./auth";
import {
  TArgsCreateAuthor,
  TArgsUpdateAuthor,
  TDBAuthor,
  TGQLAuthor,
} from "./author";
import {
  TArgsBooksWithFilter,
  TArgsCreateBook,
  TArgsUpdateBook,
  TGQLBook,
  TGQLBooksWithFilter,
} from "./book";
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
  TGQLCustomerDetails,
  TGQLHowToPay,
  TGQLItemDetail,
  TGQLOrder,
  TGQLPaymentInfo,
  TGQLPaymentService,
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
import {
  TArgsCreatePublisher,
  TArgsUpdatePublisher,
  TGQLPublisher,
} from "./publisher";
import {
  TGQLFooterAddress,
  TGQLFooterMessage,
  TGQLFooterPhone,
  TGQLFooterSocialMedia,
} from "./footerInfo";

//BOOK SCHEMA
export type TBookQuery = {
  book: (
    parent: any,
    args: { bookId: string },
    context: TCtx
  ) => Promise<TGQLBook>;
  books: (parent: any, args: null, context: TCtx) => Promise<TGQLBook[]>;
  booksWithFilter: (
    parent: any,
    args: TArgsBooksWithFilter,
    context: TCtx
  ) => Promise<TGQLBooksWithFilter>;
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
  Publisher: (
    parent: TGQLBook,
    args: any,
    context: TCtx
  ) => Promise<TGQLPublisher>;
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

//Publisher SCHEMA
export type TPublisherQuery = {
  publisher: (
    parent: any,
    args: { publisherId: string },
    context: TCtx
  ) => Promise<TGQLPublisher>;
  publishers: (
    parent: any,
    args: any,
    context: TCtx
  ) => Promise<TGQLPublisher[]>;
};

export type TPublisherMutation = {
  createPublisher: (
    parent: any,
    args: TArgsCreatePublisher,
    context: TCtx
  ) => Promise<TGQLPublisher>;
  updatePublisher: (
    parent: any,
    args: TArgsUpdatePublisher,
    context: TCtx
  ) => Promise<TGQLPublisher>;
  deletePublisher: (
    parent: any,
    args: { publisherId: string },
    context: TCtx
  ) => Promise<TGQLPublisher>;
};

export type TPublisher = {
  Book: (
    parent: TGQLPublisher,
    args: any,
    context: TCtx
  ) => Promise<TGQLBook[]>;
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
    args: { userId: string; username: string },
    context: TCtx
  ) => Promise<TGQLUser>;
  changePassword: (
    parent: any,
    args: TArgsChangePassword,
    context: TCtx
  ) => Promise<{ message: string }>;
};

export type TUser = {
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

export type TOrder = {
  PaymentService: (
    parent: TGQLOrder,
    args: null,
    context: TCtx
  ) => Promise<TGQLPaymentService>;
  User: (parent: TGQLOrder, args: null, context: TCtx) => Promise<TGQLUser>;
  ItemDetails: (
    parent: TGQLOrder,
    args: null,
    context: TCtx
  ) => Promise<TGQLItemDetail[]>;
  PaymentInfo: (
    parent: TGQLOrder,
    args: null,
    context: TCtx
  ) => Promise<TGQLPaymentInfo[]>;
  CustomerDetails: (
    parent: TGQLOrder,
    args: null,
    context: TCtx
  ) => Promise<TGQLCustomerDetails>;
};

export type TFooterInfoQuery = {
  footerPhone: (
    parent: any,
    args: null,
    context: TCtx
  ) => Promise<TGQLFooterPhone>;
  footerAddress: (
    parent: any,
    args: null,
    context: TCtx
  ) => Promise<TGQLFooterAddress>;
  footerMessage: (
    parent: any,
    args: null,
    context: TCtx
  ) => Promise<TGQLFooterMessage>;
  footerSocialMedia: (
    parent: any,
    args: null,
    context: TCtx
  ) => Promise<TGQLFooterSocialMedia[]>;
};

export type TFooterInfoMutation = {
  updateFooterPhone: (
    parent: any,
    args: { id: string; phone: string },
    context: TCtx
  ) => Promise<TGQLFooterPhone>;
  updateFooterAddress: (
    parent: any,
    args: { id: string; address: string },
    context: TCtx
  ) => Promise<TGQLFooterAddress>;
  updateFooterMessage: (
    parent: any,
    args: { id: string; message: string },
    context: TCtx
  ) => Promise<TGQLFooterMessage>;
  updateFooterSocialMedia: (
    parent: any,
    args: { id: string; url: string; isEnabled: boolean },
    context: TCtx
  ) => Promise<TGQLFooterSocialMedia>;
};
