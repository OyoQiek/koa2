import storage from "@/utils/storage"
import { IState, IUserInfo } from './type'

export default {
  saveUserInfo (state: IState, userInfo: IUserInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  }
}