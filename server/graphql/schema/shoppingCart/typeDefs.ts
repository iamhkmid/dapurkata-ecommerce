import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    shoppingCart(userId: String!): [ShoppingCart] @auth(requires: AUTH)
  }

  type Mutation {
    createShoppingCart(bookId: String!, amount: Int!): ShoppingCart
      @auth(requires: USER)
    updateShoppingCart(cartId: String!, amount: Int!): ShoppingCart
      @auth(requires: USER)
    deleteShoppingCart(cartId: ID!): ShoppingCart @auth(requires: USER)
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
