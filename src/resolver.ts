// Apollo
import { IResolvers } from 'apollo-server-express'

// TypeORM
import { Connection } from 'typeorm'

// Resolvers
import { usersQuery } from './resolvers/query/users'

export const createResolvers = (connection: Connection) => {
  const resolvers: IResolvers = {
    Query: {
      users: async () => await usersQuery(connection),
    },
  }
  return resolvers
}
