import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'

import { User } from './entity/User'

createConnection({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: '',
  database: 'poifull',
  synchronize: true,
  logging: true,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
})
  .then(async (connection) => {
    console.log('Inserting a new user into the database...')
    const user = new User()
    user.firstName = 'Timber'
    user.lastName = 'Saw'
    user.age = 25
    await connection.manager.save(user)
    console.log('Saved a new user with id: ' + user.id)

    console.log('Loading users from the database...')
    const users = await connection.manager.find(User)
    console.log('Loaded users: ', users)

    console.log('Here you can setup and run express/koa/any other framework.')

    const app = express()

    app.use(cors())

    interface IUser {
      id: string
      username: string
    }
    interface Users {
      [key: string]: IUser
    }

    const iUsers: Users = {
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
        users: () => Object.values(iUsers),
        user: ({ id }) => iUsers[id] || null,
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
