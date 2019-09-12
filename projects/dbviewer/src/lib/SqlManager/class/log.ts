export enum LogType {
  SUCCESS = 'success',
  ERROR = 'danger',
  INFORMATION = 'info',
}

export class Log {

  typeLog: LogType;
  description: string;
  date: string;

  /**
   * Construcor of log class
   * @param typeLog is type of the log like success, error, etc
   * @param description is the description of the log
   * @param date is the date of the log
   */
  constructor(typeLog: LogType, description: string, date: string) {
    this.typeLog = typeLog;
    this.description = description;
    this.date = date;
  }


}
