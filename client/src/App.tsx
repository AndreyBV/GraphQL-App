import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './core/graphql';
import { Router } from './router';

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};
