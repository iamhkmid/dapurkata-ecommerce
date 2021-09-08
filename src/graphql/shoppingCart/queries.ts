import { gql } from "@apollo/client";

export const SHOPPINGCART = gql`
  query ($userId: String!) {
    shoppingCart(userId: $userId) {
      id
      amount
      Book {
        id
        title
        price
        weight
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
