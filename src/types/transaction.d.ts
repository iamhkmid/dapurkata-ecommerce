export type TOrdersFByUser = {
  orders: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      PaymentType: {
        id: string;
        name: string;
      };
    };
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    fraudStatus: string;
  }[];
};
type TOrderPaymentInfo = {
  id: string;
  PaymentService: {
    id: string;
    name: string;
    icon: string;
    description: string;
    PaymentType?: {
      id: string;
      name: string;
      icon: string;
      description: string;
    };
  };
  grossAmount: number;
  currency: string;
  transactionTime: number;
  expirationTime: number;
  transactionStatus: string;
  fraudStatus: string;
  PaymentInfo: { name: string; value: string }[];
};
export type TGQLMutationOrder = {
  order: TOrderPaymentInfo;
};

type TGQLPaymentInfo = { name: string; value: string };

type TGQLItemDetail = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  orderId: string;
};

type TGQLCustomerDetails = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderId: string;
  ShippingAddress: TGQLShippingAddress;
  createdAt: Date;
  updatedAt: Date;
};

type TGQLShippingAddress = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  countryCode: string;
  customerDetailsId: string;
  createdAt: number;
  updatedAt: number;
};
export type TGQLPaymentService = {
  id: string;
  name: string;
  isEnabled: boolean;
  icon: string;
  description: string;
};

export type TGQLHowToPay = {
  howToPay: {
    name: string;
    stages: string[];
  }[];
};

export type TGQLOrderInfoSubscription = {
  orderInfo: {
    transactionTime: number;
    transactionStatus: string;
    fraudStatus: string;
  };
};
