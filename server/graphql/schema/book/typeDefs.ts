import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    book(bookId: ID!): Book
    books: [Book]
  }

  type Mutation {
    createBook(data: cBookData!, cover: Upload, otherImgs: [Upload]): Book
      @auth(requires: ADMIN)
    updateBook(data: uBookData!): Book @auth(requires: ADMIN)
    deleteBook(bookId: ID!): Book @auth(requires: ADMIN)
  }

  input cBookData {
    title: String!
    synopsis: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    height: Int
    weight: Int
    stock: Int!
    price: Int!
    rating: String
    Category: [categoryInput]
    Author: authorInput
  }

  input uBookData {
    bookId: ID!
    title: String
    synopsis: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    height: Int
    weight: Int
    stock: Int
    price: Float
    rating: String
    Category: [categoryInput]
    Author: authorInput
  }

  input categoryInput {
    id: String
  }

  input authorInput {
    id: String
  }

  type Book {
    id: ID
    title: String
    synopsis: String
    edition: String
    series: String
    releaseYear: String
    numberOfPages: Int
    height: Int
    weight: Int
    stock: Int
    price: Float
    rating: String
    imgDir: String
    Category: [Category]
    authorId: String
    Author: Author
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
