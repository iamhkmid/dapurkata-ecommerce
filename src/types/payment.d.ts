export type TPaymentService = {
  id: string;
  name: string;
  iconURL: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TPaymentType = {
  id: string;
  name: string;
  PaymentService: TPaymentService[];
  createdAt: Date;
  updatedAt: Date;
};

export type TGQLPaymentType = {
  paymentType: TPaymentType[];
};
