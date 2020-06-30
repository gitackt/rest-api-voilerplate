// Modules
import { graphqlServer } from '@api/server'
import { dbConnection } from '@storage/db'

const main = async () => {
  const connection = await dbConnection()
  graphqlServer(connection)
}

main().catch((e) => console.log(e))
