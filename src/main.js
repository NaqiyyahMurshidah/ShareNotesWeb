import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter, useRouter } from "vue-router";
import Content from "./components/Content.vue";
import Sample from "./components/Sample.vue";
import Math from "./components/Math.vue";
import Database from "./components/Database.vue";
import Eop from "./components/Eop.vue";
import Business from "./components/Business.vue";
import Highschool from "./components/Highschool.vue";
import Undergraduate from "./components/Undergraduate.vue";
import Mathcomp from "./components/Mathcomp.vue";
import Biology from "./components/Biology.vue";
import History from "./components/History.vue";
import Physics from "./components/Physics.vue";
import Chemistry from "./components/Chemistry.vue";
import VueHorizontal from "vue-horizontal";

const routes = [
  { path: "/", component: Content }, //setup roeuter more than 1 pages
  { path: "/add", component: Sample }, //each page
  { path: "/math", component: Math },
  { path: "/database", component: Database },
  { path: "/eop", component: Eop },
  { path: "/business", component: Business },
  { path: "/highschool", component: Highschool },
  { path: "/undergraduate", component: Undergraduate },
  { path: "/mathcomp", component: Mathcomp },
  { path: "/biology", component: Biology },
  { path: "/historyy", component: History },
  { path: "/chem", component: Chemistry },
  { path: "/phys", component: Physics },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(VueHorizontal).mount("#app");
