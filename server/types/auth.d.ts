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

export type TGQLRegister = {
  confirmId: string;
  expirationTime: Date;
  message: string;
};
export type TArgsRegisterConfirmation = {
  confirmId: string;
  confirmCode: string;
};
export type TGQLRegisterConfirmation = {
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    phone: string;
    firstName: string;
    lastName?: string;
  };
  message: string;
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

export type TArgsRegisterUser = {
  data: TRegisterUserData;
  userPic?: any;
};
export type TRegisterUserData = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  phone: string;
};

export type TCacheRegisterConfirm = {
  confirmId: string;
  confirmCode: string;
  userData: {
    firstName: string;
    lastName?: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    userPic?: any;
  };
};
