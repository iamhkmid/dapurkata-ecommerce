import { gql } from "@apollo/client";

export const USERS_ADMIN_LIST = gql`
  query {
    users {
      id
      firstName
      lastName
      username
      email
      role
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      email
      role
    }
  }
`;
