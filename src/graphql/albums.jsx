import { gql } from "@apollo/client";

export const GET_ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
        user {
          id
          name
          email
        }
      }
    }
  }
`;

export const GET_ALBUM = gql`
  query($id: ID!) {
    album(id: $id) {
      id
      title
      photos {
        data {
          id
          title
          url
          thumbnailUrl
        }
      }
    }
  }
`;
