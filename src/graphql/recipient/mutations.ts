import { gql } from "@apollo/client";

export const CREATE_RECIPIENT = gql`
  mutation ($data: cRcptData!) {
    createRecipient(data: $data) {
      id
      firstName
      lastName
      email
      phone
      provinceId
      provinceName
      cityId
      cityName
      postalCode
      address
    }
  }
`;

export const UPDATE_RECIPIENT = gql`
  mutation ($data: uRcptData!) {
    updateRecipient(data: $data) {
      id
      firstName
      lastName
      email
      phone
      provinceId
      provinceName
      cityId
      cityName
      postalCode
      address
    }
  }
`;

export const DELETE_RECIPIENT = gql`
  mutation ($recipientId: ID!) {
    deleteRecipient(recipientId: $recipientId) {
      id
      firstName
      lastName
      phone
      provinceId
      provinceName
      cityId
      cityName
      postalCode
      address
    }
  }
`;
