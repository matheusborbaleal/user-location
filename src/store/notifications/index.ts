import { INotification } from '../../interfaces/inotification';
import getters from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export interface IStateNotification {
  notifications: INotification[];
}

const state: IStateNotification = {
  notifications: [],
};

export default {
  state,
  actions,
  getters,
  mutations
};
