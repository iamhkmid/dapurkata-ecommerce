export type TOrderListsUser = {
  ordersListUser: {
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

export type TOrderListsUsers = {
  ordersListUsers: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      PaymentType: {
        id: string;
        name: string;
      };
    };
    CustomerDetails: {
      id: string;
      firstName: string;
      lastName: string;
    };
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
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

type TItemDetail = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type TCustomerDetails = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderId: string;
  ShippingAddress: TShippingAddress;
};

type TShippingAddress = {
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

export type TGQLPaymentInfoQuery = {
  order: {
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
};

export type TGQLOrderDetaiBylUserQuery = {
  order: {
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
    ItemDetails?: TItemDetail[];
    CustomerDetails: TCustomerDetails;
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
    receiptNumber?: string;
    fraudStatus: string;
  };
};

export type TGQLOrderDetailByAdminQuery = {
  order: {
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
    ItemDetails?: TItemDetail[];
    CustomerDetails: TCustomerDetails;
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
    receiptNumber?: string;
    fraudStatus: string;
  };
};
