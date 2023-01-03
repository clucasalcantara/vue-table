import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// App
import App from "./App.vue";
// Routing
import router from "./router";

import "./assets/main.css";
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(PiniaVuePlugin);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
