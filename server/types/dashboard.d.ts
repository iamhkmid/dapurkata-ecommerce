type TGQLDashboardGraph = { labels: string[]; data: number[] };

export type TOnlineUsers = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type TGQLDashboardQuery = {
  totalOrders: number;
  totalIncome: number;
  totalUsers: number;
  totalProducts: number;
  lastOrders: {
    id: string;
    grossAmount: number;
    User: {
      firstName: string;
      lastName: string;
    };
    transactionStatus: string;
    transactionTime: Date;
  }[];
  onlineUsers: TOnlineUsers[];
  graph: TGQLDashboardGraph;
};
