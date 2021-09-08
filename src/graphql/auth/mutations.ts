import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation ($username: String!, $password: String!, $rememberMe: Boolean!) {
    signin(username: $username, password: $password, rememberMe: $rememberMe) {
      jwt
      user {
        id
        username
        email
        role
        firstName
        lastName
        phone
        UserPicture {
          url
        }
      }
    }
  }
`;
