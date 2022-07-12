export interface IUserInfo {
  userId: number,
  userName: string,
  userEmail: string,
  state: number,
  deptId: number,
  role: string,
  token: string,
  roleList: Array<string>
}

export interface IState {
  userInfo: IUserInfo
}