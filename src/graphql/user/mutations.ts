import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($data: cUserData!, $userPic: Upload) {
    createUser(data: $data, userPic: $userPic) {
      id
      username
      email
      password
      role
      phoneNumber
      fullName
      UserPicture {
        id
        url
      }
    }
  }
`;

export const CREATE_USER_BY_USER = gql`
  mutation ($data: cUserData!, $userPic: Upload) {
    createUser(data: $data, userPic: $userPic) {
      id
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
    $id: ID!
    $username: String!
    $email: String!
    $password: String!
    $role: EnumRole
    $phoneNumber: String!
    $fullName: String!
  ) {
    editUser(
      id: $id
      data: {
        username: $username
        email: $email
        password: $password
        role: $role
        phoneNumber: $phoneNumber
        fullName: $fullName
      }
    ) {
      id
      username
      email
      role
      fullName
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
      role
      fullName
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($data: cPData!) {
    changePassword(data: $data) {
      message
    }
  }
`;
