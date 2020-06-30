// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '@model/User'

export const usersQuery = (connection: Connection) => connection.manager.find(User)
