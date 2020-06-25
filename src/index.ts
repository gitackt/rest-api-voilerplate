// Apollo
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'

// Express
import express from 'express'
import cors from 'cors'

// TypeORM
import { createConnection } from 'typeorm'
import 'reflect-metadata'

// Models
import { User } from './models/User'

// Constants
import { PORT } from './constants'

const startExpressServer = (server: ApolloServer) => {
  const message = `server on http://localhost:${PORT}/graphql`
  const app = express()
  app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' })
  app.listen({ port: PORT }, () => console.log(message))
}

createConnection()
  .then(async (connection) => {
    const users = await connection.manager.find(User)

    const schema = gql`
      type Query {
        users: [User!]
      }

      type User {
        id: ID!
        firstName: String
        lastName: String
        age: ID
      }
    `

    const resolvers: IResolvers = {
      Query: {
        users: () => Object.values(users),
      },
    }

    const server = new ApolloServer({
      typeDefs: schema,
      resolvers,
    })

    startExpressServer(server)
  })
  .catch((error) => console.log(error))
