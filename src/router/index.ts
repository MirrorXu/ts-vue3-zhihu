import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect:{name:'demo'},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:"/demo",
    name:"demo",
    redirect:{name:'counter'},
    component: ()=>import('@/views/demo/routerview.vue'),
    children:[
       {
        path:"counter",
        name:'counter',
        component:  ()=>import('@/views/demo/counter.vue'),
      }
    ]
  },
  {
    path:"/:pathMatch(.*)*",
    name:'notFound',
    component:()=> import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
