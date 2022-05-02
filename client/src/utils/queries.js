import { gql } from '@apollo/client';

export const QUERY_ME = gql`
 {
    me {
      _id
      unitNumber
      email
      firstName
      lastName
      requests {
        requestBody
        unit
        createdAt
        isComplete
      }
    }
  }
`

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_REQUESTS = gql`
  query {
    requests {
      _id
      unitNumber
      requestCount
      requests {
        _id
        requestBody
        unit
        createdAt
        isComplete
      }
    }
  }
`;
