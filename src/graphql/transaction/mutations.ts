import { gql } from "@apollo/client";

export const ORDER = gql`
  mutation ($data: OrderInput!) {
    order(data: $data) {
      id
      currency
      grossAmount
      transactionTime
      expirationTime
      PaymentInfo {
        name
        value
      }
    }
  }
`;
