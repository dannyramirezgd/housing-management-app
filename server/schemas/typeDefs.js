const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Unit {
    _id: ID
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
    isComplete: Boolean
  }

  type Admin {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    requestCount: Int
    unitCount: Int
    # testing. DK
    units: [Unit]
    # requests: [request]
  }

  type UnitAuth {
    token: ID!
    unit: Unit
  }

  type AdminAuth {
    token: ID!
    admin: Admin
  }

  type Query {
    me(unitNumber: Int!): Unit
    # testing. DK
    admins: [Admin]
    admin(email: String!): Admin
    units: [Unit]
    requests: [Unit]
  }

  type Mutation {
    loginUnit(email: String!, password: String!): UnitAuth
    login(email: String!, password: String!): AdminAuth
    addUnit(email: String!, password: String!, unitNumber: Int!, firstName: String!, lastName: String!): Unit
    addAdmin(username: String!, email: String!, password: String!): AdminAuth
    createRequest(requestBody: String!): Unit
    markComplete(unitId: ID!, requestId: ID!): Unit
    deleteRequest(unitId: ID!, requestId: ID!): Unit
  }
`;

module.exports = typeDefs;
