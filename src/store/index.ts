import Vue from 'vue';
import Vuex from 'vuex';
import location from './location/index';
import users from './users/index';
import notifications from './notifications/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,
  modules: {
    location,
    users,
    notifications,
  }
});

export default store;