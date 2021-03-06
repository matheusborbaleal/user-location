import { actions } from './actions';
import getters from './getters';
import { mutations } from './mutations';

const state = {
  users: [],
  loggedUser: {},
  userToken: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
