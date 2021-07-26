import { DefaultLayout } from '../layouts';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InLibrary from '../views/InLibrary.vue';
import Loaned from '../views/Loaned.vue';
import Add from '../views/Add.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: InLibrary,
      },
      {
        path: '/loaned',
        component: Loaned,
      },
      {
        path: '/add',
        component: Add,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;
