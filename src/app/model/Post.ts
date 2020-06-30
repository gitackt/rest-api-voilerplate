import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

// Models
import { User } from '@model/User'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  title?: string

  @Column()
  content?: string

  @ManyToOne((type) => User, (user) => user.posts)
  user?: User
}
