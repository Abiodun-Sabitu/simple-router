import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../components/AboutUs.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
