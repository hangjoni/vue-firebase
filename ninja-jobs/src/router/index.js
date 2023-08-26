import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import JobDetails from "../views/jobs/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/job/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect => doesn't work , probably due to caching
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catch all 404
  {
    path: "/:catchAll(.*)",
    redirect: "/jobs",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
