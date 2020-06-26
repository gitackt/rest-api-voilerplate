interface Log {
  data: any
  logType: LogType
  timeStamp: number
}

export enum LogType {
  GraphqlQuery = 'GraphqlQuery',
  DatabaseQuery = 'DatabaseQuery',
}

export const sendLog = (logType: LogType, data: any) => {
  const log: Log = {
    data: JSON.stringify(data),
    logType,
    timeStamp: new Date().getTime(),
  }
  console.log(log)
}
