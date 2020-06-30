// Apollo
import { ApolloServer, gql } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'
import { createResolvers } from '@src/app/api/resolver'

// Express
import express from 'express'
import cors from 'cors'

// TypeORM
import { Connection } from 'typeorm'

// Logger
import { graphqlContextLogger, Context } from '../../logger/app/serverLogger'

// Constants
import { PORT } from '../../constants'

const message = `server on http://localhost:${PORT}/graphql`

const startExpressServer = (server: ApolloServer) => {
  const app = express()
  app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' })
  app.listen({ port: PORT }, () => console.log(message))
}

export const graphqlServer = (connection: Connection) => {
  const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, './graphql/schema.graphql'), 'utf8'))
  const resolvers = createResolvers(connection)
  const context = async (context: Context) => graphqlContextLogger(context)
  const options = { typeDefs, resolvers, context }
  const server = new ApolloServer(options)
  startExpressServer(server)
}
