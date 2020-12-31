import { NotificationInterface } from '../../interfaces/inotification';
import getters from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export interface StateNotification {
  notifications: NotificationInterface[];
}

const state: StateNotification = {
  notifications: [],
};

export default {
  state,
  actions,
  getters,
  mutations
};
