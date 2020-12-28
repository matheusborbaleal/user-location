import { IStateNotification } from './index';
import { INotification } from '../../interfaces/inotification';
import { addNotification } from './types';

export const mutations = {
  [addNotification]: (state: IStateNotification, notification: INotification) => {
    state.notifications.push(notification);
    localStorage.setItem('notifications', JSON.stringify(state.notifications));
  },
};
