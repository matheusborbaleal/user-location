import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/pg-login/pg-login.vue'),
  },
  {
    path: '/',
    name: 'LocationDashboard',
    component: () => import('../pages/pg-location-dashboard/pg-location-dashboard.vue'),
  },
];

const router = new VueRouter({
  routes
});

export default router;
