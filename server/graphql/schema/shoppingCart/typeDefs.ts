import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    shoppingCart(userId: String!): [ShoppingCart] @auth(requires: AUTH)
  }

  type Mutation {
    createShoppingCart(
      userId: String!
      bookId: String!
      amount: Int!
    ): ShoppingCart @auth(requires: AUTH)
    updateShoppingCart(cartId: String!, amount: Int!): ShoppingCart
      @auth(requires: AUTH)
    deleteShoppingCart(cartId: ID!): ShoppingCart @auth(requires: AUTH)
  }

  type ShoppingCart {
    id: ID
    User: User
    Book: Book
    amount: Int
    createdAt: Date
    updatedAt: Date
  }
`;

export default typeDefs;
