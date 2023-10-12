import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type Wallet {
    id: ID!
    title: String!
  }

  input AddWalletInput {
    title: String!
  }

  type Query {
    wallets: [Wallet]
    # getWallet(id: ID!): Wallet
  }

  type Mutation {
    addWallet(input: AddWalletInput!): Wallet!
  }
`;
const wallets = [
    {
        id: 1,
        title: "The Awakening",
    },
    {
        id: 2,
        title: "City of Glass",
    },
];
const resolvers = {
    Query: {
        wallets: () => wallets,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
