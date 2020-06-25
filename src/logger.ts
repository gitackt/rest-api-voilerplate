import { Logger, QueryRunner } from 'typeorm'

interface DBQuery {
  query: string
  parameters?: any[]
  error?: string
  time?: number
}

export class DBQueryLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const log: DBQuery = {
      query,
      parameters,
    }
    console.log(log)
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const log: DBQuery = {
      query,
      parameters,
      error,
    }
    console.log(log)
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const log: DBQuery = {
      query,
      parameters,
      time,
    }
    console.log(log)
  }

  logSchemaBuild() {}
  logMigration() {}
  log() {}
}

export const graphqlQueryLogger = {
  requestDidStart(requestContext: any) {
    const res = requestContext.request.query
    if (!res.includes('query IntrospectionQuery')) {
      console.log(res)
    }
  },
}
