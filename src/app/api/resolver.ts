// Apollo
import { IResolvers } from 'apollo-server-express'
import { User, Post } from '@api/graphql/graphql'

// TypeORM
import { Connection } from 'typeorm'

// Resolvers
import { usersQuery } from '@storage/resolvers/query/users'
import { postsQuery } from '@storage/resolvers/query/posts'
import { createUserMutation } from '@storage/resolvers/mutation/createUser'
import { createPostMutation } from '@storage/resolvers/mutation/createPost'

export const createResolvers = (connection: Connection) => {
  const resolvers: IResolvers = {
    Query: {
      users: async () => await usersQuery(connection),
      posts: async () => await postsQuery(connection),
    },
    Mutation: {
      createUser: async (parent, args) => {
        const param = args as User
        await createUserMutation(connection, param.name, param.age)
      },
      createPost: async (parent, args) => {
        const param = args as Post
        await createPostMutation(connection, param.title, param.content)
      },
    },
  }
  return resolvers
}
