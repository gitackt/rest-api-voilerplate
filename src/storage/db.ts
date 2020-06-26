// TypeORM
import { createConnection, ConnectionOptions } from 'typeorm'
import 'reflect-metadata'

// Logger
import { DatabaseQueryLogger } from './dbLogger'

require('dotenv').config()

const options: ConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: ['query', 'error'],
  logger: new DatabaseQueryLogger(),
  entities: ['src/model/**/*.ts'],
  migrations: ['src/storage/migration/**/*.ts'],
  subscribers: ['src/storage/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/model',
    migrationsDir: 'src/storage/migration',
    subscribersDir: 'src/storage/subscriber',
  },
}

export const dbConnection = () => createConnection(options)
