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
        CustomerDetails {
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
      graph {
        labels
        data
      }
    }
  }
`;

export const ONLINE_USER_QUERY = gql`
  query {
    dashboard {
      onlineUsers {
        id
        firstName
        lastName
        role
      }
    }
  }
`;
