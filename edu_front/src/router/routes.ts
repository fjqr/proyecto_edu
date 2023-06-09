import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue')
  },
  {
    path: '/registro',
    component: () => import('layouts/Registro.vue')
  },
  {
    path: '/admin',
    component: () => import('layouts/Admin.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];


export default routes;
