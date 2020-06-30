// TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

// Models
import { Post } from '@model/Post'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  name?: string

  @Column()
  age?: number

  @OneToMany((type) => Post, (post) => post.user)
  posts?: Post[]
}
