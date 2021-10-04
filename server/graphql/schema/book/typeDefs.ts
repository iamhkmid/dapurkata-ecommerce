import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    book(bookId: ID!): Book
    books: [Book]
    booksWithFilter(filter: BookFilter!): BooksWithFilter
  }

  type Mutation {
    createBook(data: cBookData!, cover: Upload, otherImgs: [Upload]): Book
      @auth(requires: ADMIN)
    updateBook(data: uBookData!): Book @auth(requires: ADMIN)
    deleteBook(bookId: ID!): Book @auth(requires: ADMIN)
  }

  input BookFilter {
    search: String
    skip: Int!
    take: Int!
  }
  input cBookData {
    title: String!
    description: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    lenght: Int
    width: Int
    weight: Int
    stock: Int!
    price: Int!
    language: String
    isbn: String
    categories: [categoryInput]
    authorId: String
    publisherId: String
  }

  input uBookData {
    bookId: ID!
    title: String
    description: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    lenght: Int
    width: Int
    weight: Int
    stock: Int
    price: Int
    language: String
    isbn: String
    categories: [categoryInput]
    authorId: String
    publisherId: String
  }

  input categoryInput {
    id: String
  }
  type BooksWithFilter {
    hasPrev: Boolean
    hasNext: Boolean
    skip: Int
    take: Int
    currentPage: Int
    numberOfPages: Int
    data: [DataBooksWithFilter]
  }
  type DataBooksWithFilter {
    id: ID
    title: String
    price: Int
    author: String
    coverURL: String
  }
  type Book {
    id: ID
    title: String
    description: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    lenght: Int
    width: Int
    weight: Int
    stock: Int
    price: Int
    language: String
    isbn: String
    pictureDir: String
    Category: [Category]
    authorId: String
    Author: Author
    Publisher: Publisher
    BookPicture: [BookPicture]
    createdAt: Date
    updatedAt: Date
  }

  type BookPicture {
    id: ID
    url: String
    type: String
    createdAt: Date
    updatedAt: Date
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`;

export default typeDefs;
