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

export const ORDERS_LIST_USER = gql`
  query {
    ordersListUser {
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

export const PAYMENT_INFO = gql`
  query ($orderId: ID!) {
    order(orderId: $orderId) {
      id
      PaymentService {
        id
        name
        icon
        PaymentType {
          id
          name
        }
      }
      grossAmount
      currency
      transactionTime
      expirationTime
      transactionStatus
      fraudStatus
      PaymentInfo {
        name
        value
      }
    }
  }
`;

export const ORDER_DETAIL = gql`
  query ($orderId: ID!) {
    order(orderId: $orderId) {
      id
      PaymentServiceId
      userId
      grossAmount
      currency
      transactionTime
      transactionStatus
      shippingStatus
      receiptNumber
      expirationTime
      fraudStatus
      ItemDetails {
        id
        name
        price
        quantity
      }
      CustomerDetails {
        id
        firstName
        lastName
        email
        phone
        orderId
        ShippingAddress {
          id
          firstName
          lastName
          email
          phone
          address
          city
          postalCode
          countryCode
          customerDetailsId
        }
      }
      PaymentService {
        id
        name
        icon
        PaymentType {
          id
          name
        }
      }
      PaymentInfo {
        name
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const ORDER_LIST_ADMIN = gql`
  query {
    ordersListUsers {
      id
      grossAmount
      currency
      expirationTime
      transactionTime
      transactionStatus
      shippingStatus
      fraudStatus
      CustomerDetails {
        id
        firstName
        lastName
      }
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
