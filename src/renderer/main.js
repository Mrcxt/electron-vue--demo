import Vue from "vue";
import ajax from "./api/config/request";

import App from "./App";
import router from "./router";
import store from "./store";

/* css */
import "./style/normalize.css";

/* install */

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
