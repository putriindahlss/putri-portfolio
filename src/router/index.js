// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProfileIntro from "../components/ProfileIntro.vue";

const routes = [
  { path: "/", name: "About", component: ProfileIntro },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
      return savedPosition || { top: 0 }
    },
})  

export default router;
