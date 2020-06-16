import express from 'express'
import cors from 'cors'
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'

const app = express()

app.use(cors())

interface User {
  id: string
  username: string
}
interface Users {
  [key: string]: User
}

const users: Users = {
  '1': { id: '1', username: 'mkubara' },
  '2': { id: '2', username: 'suzukalight' },
}

const schema = gql`
  type Query {
    me: User
    users: [User!]
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
  }
`

const resolvers: IResolvers = {
  Query: {
    users: () => Object.values(users),
    user: ({ id }) => users[id] || null,
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 3000 }, () => {
  console.log('server on http://localhost:3000/graphql')
})
