const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { typeDefs } = require('./typeDefs');
const resolvers = require('./resolvers')

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ request }) => {
    return {
      prisma,
    };
  }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
