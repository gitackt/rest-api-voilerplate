// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '../../models/User'

export const usersQuery = async (connection: Connection) => await connection.manager.find(User)
