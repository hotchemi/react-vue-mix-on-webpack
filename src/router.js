import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import ReactApp from './ReactApp.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/react',
    component: ReactApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
