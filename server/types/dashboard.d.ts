type TGQLDashboardGraph = { labels: string[]; data: number[] };

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
  onlineUsers: {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
  }[];
  graph: TGQLDashboardGraph;
};
