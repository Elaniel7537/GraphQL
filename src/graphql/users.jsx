import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        phone
      }
    }
  }
`;