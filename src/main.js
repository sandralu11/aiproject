import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import $ from "jquery"; //导入jquery

const app = createApp(App);

app.use(router);

app.mount("#app");
