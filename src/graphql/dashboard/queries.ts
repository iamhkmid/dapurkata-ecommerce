import { gql } from "@apollo/client";

export const DASHBOARD = gql`
  query {
    dashboard {
      totalOrders
      totalIncome
      totalUsers
      totalProducts
      lastOrders {
        id
        grossAmount
        User {
          firstName
          lastName
        }
        transactionStatus
        transactionTime
      }
      onlineUsers {
        id
        firstName
        lastName
        role
      }
    }
  }
`;
