import { InternalAxiosRequestConfig, AxiosError } from 'axios'
import errorHandler from '../ErrorHandlers/ErrorHandlers'

const onSuccess = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  console.log('Request Config:', config)

  return config
}

const onError = (error: AxiosError): Promise<AxiosError> => {
  errorHandler(error)
  return Promise.reject(error)
}

export default { onSuccess, onError }