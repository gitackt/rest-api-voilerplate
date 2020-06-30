// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '@src/app/model/User'

export const createUserMutation = async (connection: Connection, name: string, age: number) => {
  const user = new User()
  user.name = name
  user.age = age
  await connection.manager.save(user)
  return user
}
