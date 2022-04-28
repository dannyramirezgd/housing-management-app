import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
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
      requests{
        _id
        isComplete
        requestBody
      }
    }
  }
`