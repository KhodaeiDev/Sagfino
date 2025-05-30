import {
  axiosProtectedInstance,
  axiosUnProtectedInstance,
} from '../../configs/configs'
import { AxiosResponse } from 'axios'

export const getingProvinces = async (): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get('/provinces')
}
export const searchAds = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get('/ads/filter', { params: filters })
}

export const saveAdReq = async (
  AdvertisementsId: number
): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.post(`/ads/${AdvertisementsId}/save`)
}

export const getingCities = async (
  provinceId: number
): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.get(`/provinces/${provinceId}`) // ✅ حذف `/api/api/` و تصحیح مسیر
}

