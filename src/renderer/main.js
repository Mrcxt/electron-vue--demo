import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";

/* css */
import "normalize.css";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.axios = Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
