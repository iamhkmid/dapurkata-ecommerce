import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    dashboard: Dashboard @auth(requires: ADMIN)
  }

  type Subscription {
    onlineUsers: [onlineUsers]
  }

  type Dashboard {
    totalOrders: Int
    totalIncome: Int
    totalUsers: Int
    totalProducts: Int
    lastOrders: [dashboardLastOrders]
    onlineUsers: [onlineUsers]
    graph: dashboardGraph
  }
  type dashboardGraph {
    labels: [String]
    data: [Int]
  }
  type onlineUsers {
    id: String
    firstName: String
    lastName: String
    role: String
  }
  type dashboardLastOrders {
    id: String
    grossAmount: Int
    User: dashboardUser
    transactionStatus: String
    transactionTime: Date
  }
  type dashboardUser {
    firstName: String
    lastName: String
  }
`;

export default typeDefs;
