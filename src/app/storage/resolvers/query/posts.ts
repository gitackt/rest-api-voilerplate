// TypeORM
import { Connection } from 'typeorm'

// Models
import { Post } from '@model/Post'

export const postsQuery = (connection: Connection) => connection.manager.find(Post)
