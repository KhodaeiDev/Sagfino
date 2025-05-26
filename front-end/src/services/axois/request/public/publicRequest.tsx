import { axiosUnProtectedInstance } from '../../configs/configs'
import { AxiosResponse } from 'axios'

export const getingCities = async (): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get('/cities')
}

export const searchAds = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get('/ads/filter', { params: filters })
}
