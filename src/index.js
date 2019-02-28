const { GraphQLServer } = require("graphql-yoga");

let feed = [
  { id: 1, description: "desc", url: "url" },
  { id: 2, description: "desc2", url: "url2" }
];
let idCount = feed.length + 1;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => feed,
    link: (parent, { id }) => feed[id - 1]
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
    },

    updateLink: (parent, { id, url, description }) => {
      const updatedLink = { id, url, description };
      feed[id - 1] = updatedLink;

      return updatedLink;
    },

    deleteLink: (parent, { id }) => {
      const index = id - 1;
      const removedLink = feed[index];
      feed = feed.slice(0, index).concat(feed.slice(index + 1, feed.length));
      return removedLink;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
