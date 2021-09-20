import { TDBGetUserPic, TGQLUserPic } from "./picture";
import { TDBSigninUser } from "./user";

export type TGQLArgsSignin = {
  username: string;
  password: string;
  rememberMe: Boolean;
};

export type TGQLSignin = {
  jwt: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    phone: string;
    firstName: string;
    lastName?: string;
    userPicture: TDBGetUserPic;
  };
};
export type TGQLCheckUser = {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  userPicture: string;
};
