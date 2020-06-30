// Express
import { Request, Response } from 'express'

// Logger
import { sendLog, LogType } from '../logger'

export interface Context {
  req: Request
  res: Response
}

interface GraphqlContext {
  headers?: any
  body?: any
  query?: any
  error?: string
}

export const graphqlContextLogger = (context: Context) => {
  try {
    if (!JSON.stringify(context.req.body).includes('query IntrospectionQuery')) {
      const params: GraphqlContext = {
        headers: context.req.headers,
        body: context.req.body,
        query: context.req.body.query,
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
