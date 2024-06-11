
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import "amfe-flexible"
import "./styles/index.css"
const app = createApp(App)
app.use(Vant).use(router).mount('#app')
