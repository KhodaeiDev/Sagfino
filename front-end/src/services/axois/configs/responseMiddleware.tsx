import { AxiosError, AxiosResponse } from 'axios'
import errorHandler from '../ErrorHandlers/ErrorHandlers'

const onSuccess = (config: AxiosResponse): AxiosResponse => {
  return config
}

const onError = (error: AxiosError,setErrorMessage?: (message: string) => void): Promise<AxiosError> => {
  errorHandler(error, setErrorMessage) 
  return Promise.reject(error)
}


export default { onSuccess, onError }
