import { gql } from "@apollo/client";

export const RECIPIENTS = gql`
  query ($userId: ID!) {
    recipients(userId: $userId) {
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

export const RECIPIENT = gql`
  query ($recipientId: ID!) {
    recipient(recipientId: $recipientId) {
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
