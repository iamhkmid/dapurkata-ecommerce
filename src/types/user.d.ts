export type TFormCreateUser = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  firstName: string;
  lastName: string;
  userPic: any;
};

export type TAuthUser = {
  id: string;
  username: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  UserPicture: {
    id: string;
    url: string;
  };
};

export type TGQLUserAdminList = {
  users: {
    id: string;
    username: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
  };
};
