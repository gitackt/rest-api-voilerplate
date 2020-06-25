// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '../../models/User'

export const usersQuery = (connection: Connection) => connection.manager.find(User)
