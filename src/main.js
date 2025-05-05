// import "./assets/main.css";
import "element-plus/dist/index.css";
import "@/assets/styles/main/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
