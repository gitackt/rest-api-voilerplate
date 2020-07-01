// TypeORM
import { Connection } from 'typeorm'

// Models
import { Post } from '@model/Post'

export const createPostMutation = async (connection: Connection, title: string, content: string) => {
  const post = new Post()
  post.title = title
  post.content = content
  await connection.manager.save(post)
  return post
}
