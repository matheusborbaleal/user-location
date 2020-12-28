export enum ITypeNotification {
  DEFAULT,
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}

export interface INotification {
  id?: string;
  type?: ITypeNotification;
  title: string;
  message: string;
  errorCode?: string;
  url?: string;
  icon?: string;
  duration?: number;
  viewed?: boolean;
  logId?: string;
}
