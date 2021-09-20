import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query {
    books {
      id
      title
      price
      stock
      isbn
      Author {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_BOOK = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      description
      edition
      series
      releaseYear
      numberOfPages
      lenght
      width
      weight
      stock
      price
      language
      isbn
      pictureDir
      Category {
        id
        name
        group
      }
      Author {
        id
        name
      }
      Publisher {
        id
        name
      }
      BookPicture {
        id
        type
        url
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_ORDER_BOOK = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      price
      weight
      Author {
        id
        name
      }
      BookPicture {
        id
        type
        url
      }
    }
  }
`;

export const GET_BOOK_DEL = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
    }
  }
`;

export const GET_FORM_BOOK = gql`
  query {
    authors {
      id
      name
    }
    publishers {
      id
      name
    }
    categories {
      id
      name
      group
    }
  }
`;

export const GET_BOOKS_SORT_NEW = gql`
  query {
    books {
      id
      title
      price
      BookPicture {
        type
        url
      }
      Author {
        id
        name
      }
    }
  }
`;

export const GET_BOOK_DETAIL = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      description
      edition
      series
      releaseYear
      numberOfPages
      weight
      width
      lenght
      stock
      price
      language
      isbn
      Category {
        id
        name
      }
      Author {
        id
        name
      }
      Publisher {
        id
        name
      }

      BookPicture {
        id
        type
        url
      }
    }
  }
`;
