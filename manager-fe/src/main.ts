import { createApp } from 'vue'
import App from './App.vue'
import router, { setRouter } from '@/router'
import { setStore } from '@/store'
import init from '@/config/init'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 路由
setRouter(app)
// vuex
setStore(app)
// 初始化
init(app)
app.mount('#app')
