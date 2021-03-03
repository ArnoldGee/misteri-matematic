import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Page1 from "../views/1";
import Page2 from "../views/2";
import Page3 from "../views/3";
import Page4 from "../views/4";
import Page5 from "../views/5";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/1",
    name: "1",
    component: Page1
  },
  {
    path: "/2",
    name: "2",
    component: Page2
  },
  {
    path: "/3",
    name: "3",
    component: Page3
  },
  {
    path: "/4",
    name: "4",
    component: Page4
  },
  {
    path: "/5",
    name: "5",
    component: Page5
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
