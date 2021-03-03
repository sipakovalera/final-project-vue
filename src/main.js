import { createApp } from "vue";
import router from "./router";
import VuexStore from "./store/index";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import "./registerServiceWorker";

createApp(App)
  .use(router)
  .use(VuexStore)
  .use(VueAxios, axios)
  .mount("#app");
