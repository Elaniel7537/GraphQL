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

export const GET_POST_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      name
      posts {
        data {
          id
          title
          body
        }
      }
    }
  }
`;
