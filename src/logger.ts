interface Log {
  data: string
  logType: LogType
  timeStamp: number
}

export enum LogType {
  GraphqlContext = 'GraphqlContext',
  GraphqlContextError = 'GraphqlContextError',
  DatabaseQuery = 'DatabaseQuery',
}

export const sendLog = (logType: LogType, rowData: any) => {
  const log: Log = {
    data: JSON.stringify(rowData),
    logType,
    timeStamp: new Date().getTime(),
  }
  // Send logs to cloud storage, s3, stdout...
  console.log(log)
}
