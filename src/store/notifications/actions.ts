import { NotificationInterface } from '../../interfaces/inotification';
import { addNotification } from './types';

export const emmitNewNotification = (notification: NotificationInterface) => ({ type: 'newNotification', notification });

export const actions = {
  newNotification({ commit }: { commit: Function }, { notification }: { notification: NotificationInterface }) {
    commit(addNotification, notification);
  },
};
