import {
  ElButton,
  ElSpace,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon
} from 'element-plus'
import { App } from 'vue'

export const loadElementPlus = (app: App) => {
  app.use(ElButton)
  app.use(ElSpace)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElIcon)
}