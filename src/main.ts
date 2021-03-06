import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import moment from 'moment';

import Notifications from 'vue-notification';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(IconsPlugin);

moment.locale('pt_BR');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
