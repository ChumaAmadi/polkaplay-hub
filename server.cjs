const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    nft(id: ID!): NFT
  }

  type NFT {
    id: ID!
    name: String!
    creators: [String!]!
    price: Float!
    description: String
    imageUrl: String
    owner: String
    creationDate: String
  }
`;

const resolvers = {
  Query: {
    nft: (_, { id }) => ({
      id,
      name: 'Sample NFT',
      creators: ['Alice', 'Bob'],
      price: 99.99,
      description: 'This is a sample NFT',
      imageUrl: 'https://example.com/sample-nft.png',
      owner: 'Alice',
      creationDate: '2023-01-01',
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 1420 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
