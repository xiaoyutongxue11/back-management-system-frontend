import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);
app
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
