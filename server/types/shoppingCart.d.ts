import { TDBBook } from "./book";
import { TDBGetUser } from "./user";

export type TGQLSCart = {
  id: string;
  User?: TDBGetUser;
  Book?: TDBBook;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

type TArgsCreateSChart = {
  bookId: string;
  amount: number;
};
type TArgsUpdateSChart = {
  cartId: string;
  amount: number;
};
