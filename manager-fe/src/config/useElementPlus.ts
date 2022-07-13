import {
  ElButton,
  ElSpace,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon,
  ElMenu,
  ElMenuItem,
  ElBadge,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElSubMenu,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
import { App } from 'vue'

export const loadElementPlus = (app: App) => {
  app.use(ElButton)
  app.use(ElSpace)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElIcon)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElBadge)
  app.use(ElDropdown)
  app.use(ElDropdownMenu)
  app.use(ElDropdownItem)
  app.use(ElSubMenu)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
}