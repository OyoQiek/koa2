/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const envConfig: {
  [key: string]: any
} = {
  dev: {
    baseApi: '/',
    mockApi: '/'
  },
  test: {
    baseApi: '/',
    mockApi: '/'
  },
  prod: {
    baseApi: '/',
    mockApi: '/'
  }
}
export default {
  env,
  mock: true,
  ...envConfig[env]
}