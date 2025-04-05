import { AxiosError, AxiosResponse } from 'axios'
import errorHandler from '../ErrorHandlers/ErrorHandlers'

const onSuccess = (config: AxiosResponse): AxiosResponse => {
  console.log('Request Config:', config)

  return config
}

const onError = (error: AxiosError): Promise<AxiosError> => {
  errorHandler(error)
  return Promise.reject(error)
}

export default { onSuccess, onError }
