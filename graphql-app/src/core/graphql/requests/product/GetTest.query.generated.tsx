import * as Types from '../../types/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTestQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTestQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', name?: string | null, image?: string | null, status?: string | null, episode: Array<{ __typename?: 'Episode', characters: Array<{ __typename?: 'Character', type?: string | null, created?: string | null } | null> } | null> } | null> | null } | null };


export const GetTestDocument = gql`
    query GetTest {
  characters {
    results {
      name
      image
      status
      episode {
        characters {
          type
          created
        }
      }
    }
  }
}
    `;

/**
 * __useGetTestQuery__
 *
 * To run a query within a React component, call `useGetTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTestQuery(baseOptions?: Apollo.QueryHookOptions<GetTestQuery, GetTestQueryVariables>) {
        const options = { ...defaultOptions, ...baseOptions }
        return Apollo.useQuery<GetTestQuery, GetTestQueryVariables>(GetTestDocument, options);
      }
export function useGetTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTestQuery, GetTestQueryVariables>) {
          const options = { ...defaultOptions, ...baseOptions }
          return Apollo.useLazyQuery<GetTestQuery, GetTestQueryVariables>(GetTestDocument, options);
        }
export type GetTestQueryHookResult = ReturnType<typeof useGetTestQuery>;
export type GetTestLazyQueryHookResult = ReturnType<typeof useGetTestLazyQuery>;
export type GetTestQueryResult = Apollo.QueryResult<GetTestQuery, GetTestQueryVariables>;