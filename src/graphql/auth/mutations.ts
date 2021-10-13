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
        userPicture
      }
    }
  }
`;

export const REGISTER = gql`
  mutation ($data: RegisterData!, $userPic: Upload) {
    register(data: $data, userPic: $userPic) {
      email
      expirationTime
      fetchWaitTime
      message
    }
  }
`;

export const REGISTER_CONFIRMATION = gql`
  mutation ($email: String!, $confirmCode: String!) {
    registerConfirmation(email: $email, confirmCode: $confirmCode) {
      user {
        id
        firstName
        lastName
        email
        role
      }
      message
    }
  }
`;

export const RESEND_REGISTER_CONFIRM_CODE = gql`
  mutation ($email: String!) {
    resendConfirmCode(email: $email) {
      email
      expirationTime
      fetchWaitTime
      message
    }
  }
`;
