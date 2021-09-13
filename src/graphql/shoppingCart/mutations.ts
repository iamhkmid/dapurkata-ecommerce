import { gql } from "@apollo/client";

export const CREATE_SHOPPING_CART = gql`
  mutation ($bookId: String!, $amount: Int!) {
    createShoppingCart(bookId: $bookId, amount: $amount) {
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
