import { createRouter, createWebHistory } from 'vue-router';
import Albums from '../views/Albums.vue';

const routes = [
  {
    path: '/',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/playlists',
    name: 'Playlists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlists.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
