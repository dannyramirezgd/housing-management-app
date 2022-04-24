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

export const MARK_COMPLETE = gql`
  mutation markComplete($unitId: ID!, $requestId: ID!) {
    markComplete(unitId: $unitId, requestId: $requestId) {
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