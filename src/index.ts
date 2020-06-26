// Apollo
import { ApolloServer, gql } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'
import { createResolvers } from './api/resolver'

// Express
import express from 'express'
import cors from 'cors'

// TypeORM
import { createConnection, ConnectionOptions } from 'typeorm'
import 'reflect-metadata'

// Constants
import { PORT } from './constants'

// Logger
import { DatabaseQueryLogger, graphqlQueryLogger } from './logger'

require('dotenv').config()

const startExpressServer = (server: ApolloServer) => {
  const message = `server on http://localhost:${PORT}/graphql`
  const app = express()
  app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' })
  app.listen({ port: PORT }, () => console.log(message))
}

const options: ConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: ['query', 'error'],
  logger: new DatabaseQueryLogger(),
  entities: ['src/model/**/*.ts'],
  migrations: ['src/storage/migration/**/*.ts'],
  subscribers: ['src/storage/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/model',
    migrationsDir: 'src/storage/migration',
    subscribersDir: 'src/storage/subscriber',
  },
}

createConnection(options)
  .then(async (connection) => {
    const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, './schema.gql'), 'utf8'))
    const resolvers = createResolvers(connection)
    const options = { typeDefs, resolvers, plugins: [graphqlQueryLogger] }
    const server = new ApolloServer(options)
    startExpressServer(server)
  })
  .catch((error) => console.log(error))
