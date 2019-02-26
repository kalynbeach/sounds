const {
  ApolloServer,
  gql
} = require('apollo-server');

const typeDefs = gql `
  type Query {
    hello(name: String): String!
  }

  type User {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    hello: () => `Helloo Woorld`
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`)
})