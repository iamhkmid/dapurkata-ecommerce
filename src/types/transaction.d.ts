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
    transactionTime: Date;
    expirationTime: Date;
    transactionStatus: string;
    fraudStatus: string;
  }[];
};
