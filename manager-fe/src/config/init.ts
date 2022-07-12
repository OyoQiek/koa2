import { App } from 'vue'
import { loadElementPlus } from '@/config/useElementPlus'
import request from '@/utils/request'

const init = (app: App) => {
  // 加载elementPlus
  loadElementPlus(app)
  // api请求
  app.config.globalProperties.$api = request
}

export default init