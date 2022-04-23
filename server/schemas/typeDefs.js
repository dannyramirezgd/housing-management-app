const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Unit {
    unitNumber: Int
    email: String
    password: String
    requestCount: Int
    requests: [Request]
  }
  
  type Request {
    _id: ID
    requestBody: String
    unit: String
    createdAt: String
  }

  type Admin {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    requestCount: Int
    unitCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
