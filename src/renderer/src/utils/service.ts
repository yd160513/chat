import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建axios实例
const apiClient: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    debugger
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    debugger
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response?.data) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error)
  }
)

export default apiClient
