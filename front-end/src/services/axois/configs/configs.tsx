import axios from 'axios'
import requestMiddleware from './requestMiddleware'
import responseMiddleware from './responseMiddleware'

const axiosProtectedInstance = axios.create({
  baseURL: 'https://saghfino.abolfazlhp.ir/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer Token',
  },
})

const axiosUnProtectedInstance = axios.create({
  baseURL: 'https://saghfino.abolfazlhp.ir/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosProtectedInstance.interceptors.request.use(
  requestMiddleware.onSuccess,
  requestMiddleware.onError
)

axiosProtectedInstance.interceptors.response.use(
  responseMiddleware.onSuccess,
  responseMiddleware.onError
)

axiosUnProtectedInstance.interceptors.request.use(
  requestMiddleware.onSuccess,
  requestMiddleware.onError
)

axiosUnProtectedInstance.interceptors.response.use(
  responseMiddleware.onSuccess,
  responseMiddleware.onError
)

export { axiosUnProtectedInstance, axiosProtectedInstance }
