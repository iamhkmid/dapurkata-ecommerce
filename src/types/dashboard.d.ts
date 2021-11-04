type TLastOrders = {
  id: string;
  grossAmount: number;
  User: {
    firstName: string;
    lastName: string;
  };
  transactionStatus: string;
  transactionTime: number;
};
export type TOnlineUsers = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type TGQLDashboardQuery = {
  dashboard: {
    totalOrders: number;
    totalIncome: number;
    totalUsers: number;
    totalProducts: number;
    lastOrders: TLastOrders[];
    onlineUsers: onlineUsers[];
  };
};
