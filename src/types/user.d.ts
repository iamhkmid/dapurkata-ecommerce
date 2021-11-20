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
  userPicture: string;
};

export type TGQLUserDetailByAdmin = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: string;
    phone: string;
    userPicture: string;
    createdAt: number;
    updatedAt: number;
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
  }[];
};

export type TFormMyAccount = {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

export type TChangePassVar = {
  newPassword: string;
  oldPassword: string;
};
export type TFormChangePass = {
  newPassword: string;
  oldPassword: string;
  confirmPassword: string;
};

export type TGQLUpdateUser = {
  updateUser: { id: string };
};

export type TGQLDataDelUser = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    role: string;
  };
};

export type TFormUpdateUser = {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

export type TUpdateUserVal = {
  userId: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

export type TInitDataUpdateUser = {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
  };
};

export type TNotification = {
  id: string;
  title: string;
  message: string;
  valueName: string;
  valueId: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
};
export type TGQLNotification = {
  notification: TNotification[];
};

export type TGQLNotificationSubs = {
  notification: TNotification;
};
