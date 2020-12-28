import { INotification } from '../../interfaces/inotification';
import { addNotification } from './types';

export const emmitNewNotification = (notification: INotification) => ({ type: 'newNotification', notification });

export const actions = {
  newNotification({ commit }: { commit: Function }, { notification }: { notification: INotification }) {
    commit(addNotification, notification);
  },
};
