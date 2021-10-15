import { gql } from "@apollo/client";

export const PAYMENT_TYPE_ISACTIVE = gql`
  query ($isEnabled: Boolean) {
    paymentType(isEnabled: $isEnabled) {
      id
      name
      description
      icon
      PaymentService {
        id
        name
        description
        icon
      }
    }
  }
`;

export const ORDERS_FILTER_BY_USER = gql`
  query ($userId: ID, $filterBy: orderFilter!) {
    orders(userId: $userId, filterBy: $filterBy) {
      id
      grossAmount
      currency
      expirationTime
      transactionTime
      transactionStatus
      fraudStatus
      PaymentService {
        id
        name
        PaymentType {
          id
          name
        }
      }
    }
  }
`;

export const HOW_TO_PAY = gql`
  query ($paymentId: ID!) {
    howToPay(paymentId: $paymentId) {
      name
      stages
    }
  }
`;
