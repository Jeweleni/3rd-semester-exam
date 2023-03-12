import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";
createApp(App).mount("#app").app.use(router);
