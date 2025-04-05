import axios from 'axios'
import requestMiddleware from './requestMiddleware'
import responseMiddleware from './responseMiddleware'

const axoisProtectedInstance = axios.create({
  baseURL: 'https://sagfino.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer Token',
  },
})

const axoisUnProtectedInstance = axios.create({
  baseURL: 'https://sagfino.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

axoisProtectedInstance.interceptors.request.use(
  requestMiddleware.onSuccess,
  requestMiddleware.onError
)

axoisProtectedInstance.interceptors.response.use(
  responseMiddleware.onSuccess,
  responseMiddleware.onError
)

axoisUnProtectedInstance.interceptors.request.use(
  requestMiddleware.onSuccess,
  requestMiddleware.onError
)

axoisUnProtectedInstance.interceptors.response.use(
  responseMiddleware.onSuccess,
  responseMiddleware.onError
)

export { axoisUnProtectedInstance, axoisProtectedInstance }
