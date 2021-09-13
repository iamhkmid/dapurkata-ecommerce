export type TOrdersFByUser = {
  orders: {
    id: string;
    PaymentService: {
      name: string;
    };
    grossAmount: number;
    currency: string;
    transactionTime: Date;
    expirationTime: Date;
    transactionStatus: string;
    fraudStatus: string;
  }[];
};
