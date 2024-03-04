import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from "./components/HelloWorld.vue";

import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "@/assets/css/style.css";
import InputNumber from "primevue/inputnumber";

const routes = [
    { path: '/:shopid', component: HelloWorld }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App);
app.use(InputNumber);

app.use(router)

app.mount("#app");
