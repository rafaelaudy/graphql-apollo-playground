const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Mutation: {
    post: (root, { url, description }, context) =>
      context.prisma.createLink({
        url,
        description
      })
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
