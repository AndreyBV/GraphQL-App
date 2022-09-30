import * as Types from '../../types/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTestUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTestUserQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', name?: string | null } | null> | null } | null };


export const GetTestUserDocument = gql`
    query GetTestUser {
  characters {
    results {
      name
    }
  }
}
    `;

/**
 * __useGetTestUserQuery__
 *
 * To run a query within a React component, call `useGetTestUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTestUserQuery(baseOptions?: Apollo.QueryHookOptions<GetTestUserQuery, GetTestUserQueryVariables>) {
        const options = { ...defaultOptions, ...baseOptions }
        return Apollo.useQuery<GetTestUserQuery, GetTestUserQueryVariables>(GetTestUserDocument, options);
      }
export function useGetTestUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTestUserQuery, GetTestUserQueryVariables>) {
          const options = { ...defaultOptions, ...baseOptions }
          return Apollo.useLazyQuery<GetTestUserQuery, GetTestUserQueryVariables>(GetTestUserDocument, options);
        }
export type GetTestUserQueryHookResult = ReturnType<typeof useGetTestUserQuery>;
export type GetTestUserLazyQueryHookResult = ReturnType<typeof useGetTestUserLazyQuery>;
export type GetTestUserQueryResult = Apollo.QueryResult<GetTestUserQuery, GetTestUserQueryVariables>;