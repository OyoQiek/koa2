import { App } from 'vue'
import { createStore } from 'vuex'

import mutations from './mutation'
import storage from '@/utils/storage'
import { IState } from './type'

const state: IState = {
  userInfo: "" || storage.getItem('userInfo')
}

const store = createStore({
  state,
  mutations
})

export const setStore = (app: App) => {
  app.use(store)
}

export default store