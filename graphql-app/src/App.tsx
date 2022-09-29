import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router } from './router';

const apolloClient = new ApolloClient({
  uri: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};
