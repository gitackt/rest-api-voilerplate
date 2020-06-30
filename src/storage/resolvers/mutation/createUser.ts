// TypeORM
import { Connection } from 'typeorm'

// Models
import { User } from '@model/User'

export const createUserMutation = async (
  connection: Connection,
  id: string,
  firstName: string,
  lastName: string,
  age: number
) => {
  const user = new User()
  user.id = id
  user.firstName = firstName
  user.lastName = lastName
  user.age = age
  await connection.manager.save(user)
  return user
}
