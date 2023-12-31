
import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path:'/dashboard',
    component: Dashboard,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
