import { App } from 'vue'
import { loadElementPlus } from '@/config/useElementPlus'
import API from '@/api'

const init = (app: App) => {
  // 加载elementPlus
  loadElementPlus(app)
  // api请求
  app.config.globalProperties.$api = API
}

export default init