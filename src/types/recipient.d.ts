export type TRecipient = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  address: string;
  postalCode: string;
};

export type TCreateRcptVar = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cityId: string;
    address: string;
  };
};

export type TUpdateRcptVar = {
  data: {
    recipientId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cityId: string;
    address: string;
  };
};

type TGQLRecipient = {
  recipient: TRecipient;
};

type TGQLCreateRecipient = {
  createRecipient: TRecipient;
};

type TGQLDelRecipient = {
  deleteRecipient: TRecipient;
};

type TGQLUpdateRecipient = {
  updateRecipient: TRecipient;
};

type TUpdateRcptDefVal = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: { id: string; value: string };
  city: { id: string; value: string };
  address: string;
};

type TRecipients = {
  recipients: TRecipient[];
};
