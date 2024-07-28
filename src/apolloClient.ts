import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1420/graphql', // Ensure this URL matches your server URL
  cache: new InMemoryCache(),
});

export default client;
