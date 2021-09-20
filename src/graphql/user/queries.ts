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

export const USER_DEL_DATA = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      id
      firstName
      lastName
      username
      role
    }
  }
`;

export const INIT_DATA_MY_ACCOUNT = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      id
      firstName
      lastName
      username
      email
      phone
      userPicture
    }
  }
`;

export const INIT_DATA_UPDATE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      id
      firstName
      lastName
      username
      email
      phone
    }
  }
`;
