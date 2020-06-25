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

// Logger
import { DBQueryLogger, graphqlQueryLogger } from './logger'

require('dotenv').config()

const startExpressServer = (server: ApolloServer) => {
  const message = `server on http://localhost:${PORT}/graphql`
  const app = express()
  app.use(cors())
  server.applyMiddleware({ app, path: '/graphql' })
  app.listen({ port: PORT }, () => console.log(message))
}

createConnection({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: ['query', 'error'],
  logger: new DBQueryLogger(),
  entities: ['src/models/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
})
  .then(async (connection) => {
    const resolvers = createResolvers(connection)
    const options = { typeDefs, resolvers, plugins: [graphqlQueryLogger] }
    const server = new ApolloServer(options)
    startExpressServer(server)
  })
  .catch((error) => console.log(error))
