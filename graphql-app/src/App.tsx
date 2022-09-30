import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router } from './router';

console.error('%c⧭', 'color: #ffa640', process.env.PUBLIC_GRAPHQL_ENDPOINT);

const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};
