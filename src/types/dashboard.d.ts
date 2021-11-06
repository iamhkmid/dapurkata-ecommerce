type TDashboardLastOrders = {
  id: string;
  grossAmount: number;
  User: {
    firstName: string;
    lastName: string;
  };
  transactionStatus: string;
  transactionTime: number;
};
export type TDashboardOnlineUsers = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type TDashboardGraph = {
  labels: string[];
  data: number[];
};

export type TGQLDashboardQuery = {
  dashboard: {
    totalOrders: number;
    totalIncome: number;
    totalUsers: number;
    totalProducts: number;
    lastOrders: TLastOrders[];
    onlineUsers: onlineUsers[];
    graph: TDashboardGraph;
  };
};
