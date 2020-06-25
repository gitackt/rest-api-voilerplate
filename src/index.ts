// Apollo
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './scheme'
import { createResolvers } from './resolver'

// Express
import express from 'express'
import cors from 'cors'

// TypeORM
import { createConnection } from 'typeorm'
import 'reflect-metadata'

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
    const resolver = createResolvers(connection)
    const options = { typeDefs, resolver }
    const server = new ApolloServer(options)
    startExpressServer(server)
  })
  .catch((error) => console.log(error))
