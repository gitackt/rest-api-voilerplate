// Modules
import { graphqlServer } from '@src/app/api/server'
import { dbConnection } from '@src/app/storage/db'

const main = async () => {
  const connection = await dbConnection()
  graphqlServer(connection)
}

main().catch((e) => console.log(e))
