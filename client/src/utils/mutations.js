import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
        username
        email
        isAdmin
      }
    }
  }
`;

export const DELETE_REQUEST = gql`
  mutation deleteRequest($unitId: ID!, $requestId: ID!) {
    deleteRequest(unitId: $unitId, requestId: $requestId) {
      _id
      unitNumber
      requests {
        _id
        isComplete
        requestBody
      }
    }
  }
`;

export const ADD_UNIT = gql`
  mutation addUnit(
    $email: String!
    $password: String!
    $unitNumber: Int!
    $firstName: String!
    $lastName: String!
  ) {
    addUnit(
      email: $email
      password: $password
      unitNumber: $unitNumber
      firstName: $firstName
      lastName: $lastName
    ) {
      unitNumber: Int
      email: String
      password: String
    }
  }
`;

export const POST_REQUEST = gql`
  mutation CreateRequest($requestBody: String!) {
    createRequest(requestBody: $requestBody) {
      _id
    }
  }
`;
