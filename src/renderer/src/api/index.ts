// 登录接口
import apiClient from '@renderer/utils/service'

export const login = (username: string, password: string) => {
  return apiClient.post('/user/login', { username, password })
}

// 注册接口
export const register = (username: string, password: string) => {
  return apiClient.post('/user/register', { username, password })
}
