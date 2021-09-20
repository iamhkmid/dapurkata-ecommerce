import { TCart } from "./cart";

export type TUser = {
  id: string;
  username: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  userPicture: string;
};
export type TGqlSignin = {
  signin: { jwt: string; user: TUser };
};

export type TGqlCheckUser = {
  checkUser: TUser;
};

export type TGQLFormSignin = {
  username: string;
  password: string;
  rememberMe: boolean;
};
