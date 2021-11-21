import { gql } from "@apollo/client";

export const ORDER = gql`
  mutation ($data: OrderInput!) {
    order(data: $data) {
      id
      PaymentService {
        id
        name
        icon
        description
        PaymentType {
          id
          name
          icon
          description
        }
      }
      grossAmount
      currency
      transactionTime
      transactionStatus
      expirationTime
      fraudStatus

      PaymentInfo {
        name
        value
      }
    }
  }
`;
