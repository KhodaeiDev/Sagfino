import { InternalAxiosRequestConfig, AxiosError } from 'axios'
import errorHandler from '../ErrorHandlers/ErrorHandlers'

const onSuccess = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {

  return config
}

const onError = (
  error: AxiosError,
  setErrorMessage?: (message: string) => void
): Promise<AxiosError> => {
  interface ApiErrorResponse {
    error?: string
  }

  const errorResponse = error.response?.data as ApiErrorResponse
  const errorMessage = errorResponse.error ?? '⚠️ مشکلی پیش آمده!'

  if (setErrorMessage) {
    setErrorMessage(errorMessage) 
  }

  return Promise.reject(error)
}

export default { onSuccess, onError }