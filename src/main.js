
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router'
import "amfe-flexible"
const app = createApp(App)
app.use(Vant).use(router).mount('#app')
