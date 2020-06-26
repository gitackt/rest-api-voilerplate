require('dotenv').config()

module.exports = {
  type: 'mysql',
  host: 'db',
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['src/model/**/*.ts'],
  migrations: ['src/storage/migration/**/*.ts'],
  subscribers: ['src/storage/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/model',
    migrationsDir: 'src/storage/migration',
    subscribersDir: 'src/storage/subscriber',
  },
}
