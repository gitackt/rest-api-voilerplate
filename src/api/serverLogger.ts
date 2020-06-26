// Express
import { Request, Response } from 'express'

// Logger
import { sendLog, LogType } from '../logger'

export interface Context {
  req: Request
  res: Response
}

interface GraphqlContext {
  headers?: string
  body?: string
  query?: string
  error?: string
}

export const graphqlContextLogger = (context: Context) => {
  try {
    const headers = JSON.stringify(context.req.headers)
    const body = JSON.stringify(context.req.body)
    const query = JSON.stringify(context.req.body.query)
    if (!body.includes('query IntrospectionQuery')) {
      const params: GraphqlContext = {
        headers,
        body,
        query,
      }
      sendLog(LogType.GraphqlContext, params)
    }
  } catch (e) {
    const params: GraphqlContext = {
      error: e,
    }
    sendLog(LogType.GraphqlContextError, params)
  }
}
