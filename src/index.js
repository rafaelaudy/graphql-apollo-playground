const { GraphQLServer } = require("graphql-yoga");

const feed = [
  { id: 1, description: "desc", url: "url" },
  { id: 2, description: "desc2", url: "url2" }
];
let idCount = feed.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => feed
  },
  Mutation: {
    post: (parent, { url, description }) => {
      const link = {
        id: idCount++,
        url,
        description
      };

      feed.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      info: String!
      feed: [Link!]!
    }
    
    type Mutation {
      post(url: String!, description: String!): Link!
    }
    
    type Link {
      id: ID!
      description: String!
      url: String!
    }
  `,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
