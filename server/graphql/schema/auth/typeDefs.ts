import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    checkUser: CheckUser
  }

  type Mutation {
    signin(username: String!, password: String!, rememberMe: Boolean!): signin
    register(data: RegisterData!, userPic: Upload): Register
    registerConfirmation(
      confirmId: String!
      confirmCode: String!
    ): RegisterConfirmation
  }

  type signin {
    jwt: String
    user: CheckUser
  }

  type Register {
    confirmId: String
    expirationTime: Date
    message: String
  }

  type RegisterConfirmation {
    user: registerUserData
    message: String
  }

  type registerUserData {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    role: EnumRole
    phone: String
  }

  input RegisterData {
    firstName: String!
    lastName: String
    username: String!
    email: String!
    password: String!
    phone: String!
  }

  type CheckUser {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    role: EnumRole
    phone: String
    userPicture: String
  }
`;

export default typeDefs;
