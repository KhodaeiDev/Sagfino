import { AxiosError } from 'axios'

const errorHandler = (
  error: AxiosError,
  setErrorMessage?: (message: string) => void
) => {
  interface ApiErrorResponse {
    error?: string
  }

  const errorResponse = error.response?.data as ApiErrorResponse
  const errorMessage = errorResponse.error ?? '⚠️ مشکلی پیش آمده!'

  if (setErrorMessage) {
    setErrorMessage(errorMessage) 
  }
}

export default errorHandler
