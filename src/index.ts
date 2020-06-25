import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'

import { User } from './entity/User'

createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...')
    const user = new User()
    user.firstName = 'Timber'
    user.lastName = 'Saw'
    user.age = 25
    await connection.manager.save(user)

    const users = await connection.manager.find(User)

    const app = express()

    app.use(cors())

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

    server.applyMiddleware({ app, path: '/graphql' })

    app.listen({ port: 3000 }, () => {
      console.log('server on http://localhost:3000/graphql')
    })
  })
  .catch((error) => console.log(error))
