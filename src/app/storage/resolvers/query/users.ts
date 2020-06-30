// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '@src/app/model/User'

export const usersQuery = (connection: Connection) => connection.manager.find(User)
