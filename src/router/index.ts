import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Fate from '../views/Fate.vue';
import Setting from '../views/Setting.vue';
import * as process from 'process';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: 'fate',
        component: Fate,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/signup',
    name: 'SignUp',
    component: Index,
  }, {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
