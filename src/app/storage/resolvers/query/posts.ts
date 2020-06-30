// TypeORM
import { Connection } from 'typeorm'

// Models
import { Post } from '@src/app/model/Post'

export const postsQuery = (connection: Connection) => connection.manager.find(Post)
