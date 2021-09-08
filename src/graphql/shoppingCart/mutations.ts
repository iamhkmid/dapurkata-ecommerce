import { gql } from "@apollo/client";

export const ADD_SHOPPING_CART = gql`
  mutation ($userId: String!, $bookId: String!, $amount: Int!) {
    createShoppingCart(userId: $userId, bookId: $bookId, amount: $amount) {
      id
      amount
      Book {
        id
        title
        price
        Author {
          name
        }
        BookPicture {
          url
          type
        }
      }
    }
  }
`;

export const EDIT_SHOPPING_CART = gql`
  mutation ($cartId: String!, $amount: Int!) {
    updateShoppingCart(cartId: $cartId, amount: $amount) {
      id
      amount
      Book {
        id
        title
        price
        Author {
          name
        }
        BookPicture {
          url
          type
        }
      }
    }
  }
`;

export const DELETE_SHOPPING_CART = gql`
  mutation ($cartId: ID!) {
    deleteShoppingCart(cartId: $cartId) {
      id
      User {
        id
      }
      Book {
        id
        title
      }
      amount
    }
  }
`;
