import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // redirect: { name: "home" },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    redirect: { name: "counter" },
    component: () => import("@/views/demo/routerview.vue"),
    children: [
      {
        path: "counter",
        name: "counter",
        component: () => import("@/views/demo/counter.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
