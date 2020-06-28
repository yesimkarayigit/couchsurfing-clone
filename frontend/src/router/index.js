import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bookings from "../views/Bookings";
import Hosts from "../views/Hosts";
import Surfers from "../views/Surfers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/hosts",
    name: "Hosts",
    component: Hosts
  },
  {
    path: "/surfers",
    name: "Surfers",
    component: Surfers
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
