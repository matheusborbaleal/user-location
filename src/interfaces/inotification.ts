export enum TypeNotification {
  DEFAULT,
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}

export interface NotificationInterface {
  id?: string;
  type?: TypeNotification;
  title: string;
  message: string;
  errorCode?: string;
  url?: string;
  icon?: string;
  duration?: number;
  viewed?: boolean;
  logId?: string;
}
