// Logger
import { sendLog, LogType } from '../logger'

export const graphqlQueryLogger = {
  requestDidStart(requestContext: any) {
    const query = requestContext.request.query
    if (!query.includes('query IntrospectionQuery')) {
      sendLog(LogType.GraphqlQuery, query)
    }
  },
}
