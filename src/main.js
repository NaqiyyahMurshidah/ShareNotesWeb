import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter, useRouter } from "vue-router";
import Content from "./components/Content.vue";
import VueHorizontal from "vue-horizontal";
import File from "./File.vue";


const routes = [
  { path: "/", component: Content }, //setup roeuter more than 1 pages
  //each page the "/" put name there
  { path: "/file", component: File },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(VueHorizontal).mount("#app");
