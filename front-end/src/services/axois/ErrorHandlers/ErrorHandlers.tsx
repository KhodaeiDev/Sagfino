import { AxiosError } from 'axios'

const errorHandler = (error: AxiosError) => {
  const status = error.response ? error.response.status : null

  switch (status) {
    case 401:
      console.error('Unauthorized: Token might be invalid or expired.')
      break
    case 404:
      console.error('Not Found: The resource does not exist.')
      break
    case 500:
      console.error('Server Error: Please try again later.')
      break
    default:
      console.error('An unexpected error occurred:', error.message)
  }

  return Promise.reject(error)
}

export default errorHandler
