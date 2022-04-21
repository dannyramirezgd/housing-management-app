const { gql } = require('apollo-server-express');

const typeDefs = gql`
   
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