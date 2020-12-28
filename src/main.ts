import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Notifications);

// Vue.component('app-notification', );
// Vue.component('transitory-notification', import('./components/structure/transitory-notification/transitory-notification.vue'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
