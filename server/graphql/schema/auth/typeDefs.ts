import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    checkUser: CheckUser
  }

  type Mutation {
    signin(username: String!, password: String!, rememberMe: Boolean!): signin
    logout: message @auth(requires: AUTH)
  }

  type signin {
    jwt: String
    user: CheckUser
  }

  type CheckUser {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    role: EnumRole
    phone: String
    UserPicture: UserPicture
  }

  type message {
    message: String
  }
`;

export default typeDefs;
