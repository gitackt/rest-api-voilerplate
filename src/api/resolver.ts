// Apollo
import { IResolvers } from 'apollo-server-express'
import { User } from '@api/graphql/graphql'

// TypeORM
import { Connection } from 'typeorm'

// Resolvers
import { usersQuery } from '../storage/resolvers/query/users'
import { createUserMutation } from '../storage/resolvers/mutation/createUser'

export const createResolvers = (connection: Connection) => {
  const resolvers: IResolvers = {
    Query: {
      users: async () => await usersQuery(connection),
    },
    Mutation: {
      createUser: async (parent, args) => {
        const param = args as User
        await createUserMutation(connection, param.id, param.firstName, param.lastName, param.age)
      },
    },
  }
  return resolvers
}
