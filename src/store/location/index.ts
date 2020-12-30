import { actions } from './actions';
import getters from './getters';
import { mutations } from './mutations';

const state = {
  nearbyLocations: [],
  selectedPlace: {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
