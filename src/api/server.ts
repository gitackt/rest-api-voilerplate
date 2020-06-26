// Apollo
import { ApolloServer, gql } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'
import { createResolvers } from './resolver'

// Express
import express from 'express'
import cors from 'cors'

// TypeORM
import { Connection } from 'typeorm'

// Logger
import { graphqlContextLogger, Context } from './serverLogger'

// Constants
import { PORT } from '../constants'

const startExpressServer = (server: ApolloServer) => {
  const message = `server on http://localhost:${PORT}/graphql`
  const app = express()
  app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' })
  app.listen({ port: PORT }, () => console.log(message))
}

export const graphqlServer = (connection: Connection) => {
  const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, './schema.gql'), 'utf8'))
  const resolvers = createResolvers(connection)
  const options = {
    typeDefs,
    resolvers,
    context: async (context: Context) => {
      graphqlContextLogger(context)
      return context
    },
  }
  const server = new ApolloServer(options)
  startExpressServer(server)
}
