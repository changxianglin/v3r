import { createRouter, createWebHashHistory } from "vue-router";

import Layout from '../Layout/index.vue'
import hello from '../components/HelloWorld.vue'
import about from '../components/About.vue'
import home from '../components/Home.vue'
import orde from '../components/Orde.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/about',
    children: [
      {
        path: 'login',
        name: 'login',
        component: hello,
      },
      {
        path: 'order',
        name: 'order',
        component: orde,
      },
      {
        path: 'about',
        name: 'about',
        component: about,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router