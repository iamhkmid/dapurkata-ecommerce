import { gql } from "@apollo/client";

export const ONLINE_USER = gql`
  subscription {
    onlineUsers {
      id
      firstName
      lastName
      role
    }
  }
`;
