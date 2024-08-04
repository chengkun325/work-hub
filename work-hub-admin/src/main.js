import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from "@element-plus/icons-vue";
import "@/styles/common.scss";
import "@/styles/reset.scss";
import "@/assets/iconfont/iconfont.scss";
import "@/assets/fonts/font.scss";
import "@/styles/element.scss";

const app = createApp(App)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons);
})

app.use(ElementPlus)
app.use(router)
app.mount('#app')
