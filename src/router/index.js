
import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path:'/',
    component: Home,
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
