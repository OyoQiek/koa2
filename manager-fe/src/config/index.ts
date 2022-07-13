/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const envConfig: {
  [key: string]: any
} = {
  development: {
    baseApi: '/api',
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
  mock: false,
  ...envConfig[env]
}