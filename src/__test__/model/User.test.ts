import { User } from '../../app/model/User'

describe('User model test', () => {
  it('Create User', () => {
    const entity = new User()
    const answer = new User()
    expect(entity).toEqual(answer)
  })
})
