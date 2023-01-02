import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
// App
import App from "./App.vue";
// Routing
import router from "./router";

import "./assets/main.css";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
