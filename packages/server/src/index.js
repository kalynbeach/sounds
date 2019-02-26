const {
  ApolloServer,
  gql
} = require('apollo-server')

const typeDefs = gql `

  type Error {
    field: String!
    message: String!
  }

  type RegisterResponse {
    errors: [Error] 
    user: User
  }

  type LoginResponse {
    errors: [Error]
    success: Boolean
  }

  type User {
    id: ID!
    name: String!
  }

  type AudioClip {
    id: ID!
    title: String!
    # TODO: Add remaining fields (audioBlobURL, metadata, etc.)
  }

  input UserInfo {
    name: String!
    password: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): LoginResponse!
  }
`

const resolvers = {
  Query: {
    // TODO: Build out user resolver
    user: () => ({
      id: 1,
      name: "kalyn"
    })
  },
  Mutation: {
    // TODO: Build out user resolver
    register: () => ({
      errors: null,
      user: {
        id: 1,
        name: "kalyn"
      }
    }),
    // TODO: Build out user resolver
    login: () => ({
      errors: null,
      success: true
    })
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