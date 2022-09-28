import { gql } from '@apollo/client';

export const getTestData = gql`
  query Query {
    allFilms {
      films {
        title
      }
    }
  }
`;
