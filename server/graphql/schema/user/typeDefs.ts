import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    user(userId: ID!): User @auth(requires: AUTH)
    users: [User] @auth(requires: ADMIN)
  }

  type Mutation {
    createUser(data: cUserData!, userPic: Upload): User
    updateUser(userId: ID!, data: uUserData!): User @auth(requires: AUTH)
    deleteUser(userId: ID!): User @auth(requires: ADMIN)
    changePassword(data: cPData!): changePassword @auth(requires: USER)
  }

  input cPData {
    oldPassword: String!
    newPassword: String!
  }

  type changePassword {
    message: String
  }

  input cUserData {
    firstName: String!
    lastName: String
    username: String!
    email: String!
    password: String!
    role: EnumRole
    phone: String!
  }

  input uUserData {
    firstName: String!
    lastName: String
    username: String!
    email: String!
    role: EnumRole!
    phone: String!
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    role: EnumRole
    phone: String
    imgDir: String
    Recipient: [Recipient]
    UserPicture: UserPicture
    ShoppingCart: [ShoppingCart]
    createdAt: Date
    updatedAt: Date
  }

  type UserPicture {
    id: ID
    url: String
    createdAt: Date
    updatedAt: Date
  }
  enum EnumRole {
    ADMIN
    USER
  }
`;

export default typeDefs;
