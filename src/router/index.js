import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import router1 from "@/components/router1.vue"
import router2 from "@/components/router2.vue"
import router3 from "@/components/router3.vue"
import router4 from "@/components/router4.vue"
import router5 from "@/components/router5.vue"
import router6 from "@/components/router6.vue"
import router7 from "@/components/router7.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/router1',
    name: 'router1',
    component: router1
  },
  {
    path: '/router2',
    name: 'router2',
    component: router2
  },
  {
    path: '/router3',
    name: 'router3',
    component: router3
  },
  {
    path: '/router4',
    name: 'router4',
    component: router4
  },
  {
    path: '/router5',
    name: 'router5',
    component: router5
  },
  {
    path: '/router6',
    name: 'router6',
    component: router6
  },
  {
    path: '/router7',
    name: 'router7',
    component: router7
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
