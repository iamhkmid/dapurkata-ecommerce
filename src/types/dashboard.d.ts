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
    lastOrders: TDashboardLastOrders[];
    onlineUsers: TDashboardOnlineUsers[];
    graph: TDashboardGraph;
  };
};

export type TGQLOnlineUserSubs = {
  onlineUsers: TDashboardOnlineUsers[];
};
