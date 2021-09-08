import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    paymentType(isEnabled: Boolean): [paymentType] @auth(requires: AUTH)
    howToPay(paymentId: String!): [howToPay]
  }

  type Mutation {
    order(data: OrderInput!): order! @auth(requires: USER)
  }

  type paymentType {
    id: ID
    name: String
    PaymentService: [PaymentService]
    isEnabled: Boolean
    createdAt: Date
    updatedAt: Date
  }

  type PaymentService {
    id: ID
    name: String
    iconURL: String
    isEnabled: Boolean
    createdAt: Date
    updatedAt: Date
  }

  input OrderInput {
    orderType: String!
    recipientId: String
    bookId: String
    amount: Int
    courierCode: String!
    courierService: String!
    payment: String!
  }

  type order {
    id: String
    currency: String
    grossAmount: Int
    transactionTime: Date
    expirationTime: Date
    paymentId: String
    paymentType: String
    PaymentInfo: [PaymentInfo]
  }

  type PaymentInfo {
    name: String
    value: String
  }

  type howToPay {
    name: String
    stages: [String]
  }
`;

export default typeDefs;
