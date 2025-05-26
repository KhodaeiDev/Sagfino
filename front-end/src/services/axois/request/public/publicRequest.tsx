import { axiosUnProtectedInstance } from '../../configs/configs'
import { AxiosResponse } from 'axios'

const getingCities = (): Promise<AxiosResponse> => {
  return axiosUnProtectedInstance.get('/cities')
}

export { getingCities }
