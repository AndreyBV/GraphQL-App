import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router } from './router';

const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};
