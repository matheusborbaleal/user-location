import { StateNotification } from './index';
import { NotificationInterface } from '../../interfaces/inotification';
import { addNotification } from './types';

export const mutations = {
  [addNotification]: (state: StateNotification, notification: NotificationInterface) => {
    state.notifications.push(notification);
    localStorage.setItem('notifications', JSON.stringify(state.notifications));
  },
};
