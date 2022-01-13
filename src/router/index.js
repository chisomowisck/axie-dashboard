import Vue from "vue";
import VueRouter from "vue-router";

// Landing
import Landing from "../views/Landing.vue";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Index from "../views/dashboard/Index";


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Landing",
    component: Landing,
  },

  {
    path: "/index",
    name: "Index",
    component: Index,
     meta: {
            requiresAuth: true,
        }
  },

  
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
