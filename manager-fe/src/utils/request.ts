/**
 * axios二次封装
 */
import axios from 'axios'
import router from '@/router/index'
import config from '@/config/index'
import { ElMessage } from 'element-plus'

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // todo
  const headers = req.headers as any
  if (headers.Authorization) headers.Authorization = 'name'
  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 40001) {
    // 未登录或token失效
    ElMessage.error(msg)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(msg)
  } else {
    ElMessage.error(msg || '请求异常')
    return Promise.reject(msg)
  }
})

const request: any = (options: any) => {
  options.methods = options.methods || 'get'
  if (options.methods.toLowerCase() === 'get') {
    options.params = options.data
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

['get', 'post'].forEach(el => {
  request[el] = (url: string, data: any, options: any) => {
    return request({
      url,
      data,
      methods: el,
      ...options
    })
  }
})

export default request
