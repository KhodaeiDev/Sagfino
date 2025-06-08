import {
  axiosProtectedInstance,
  axiosUnProtectedInstance,
} from '../../configs/configs'
import { AxiosResponse } from 'axios'
import { AdvertisementData } from '../../../../context/AdRegistration/AdRegistration'

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
  return await axiosProtectedInstance.get(`/provinces/${provinceId}`)
}

export const createAdvertisementReq = async (
  advertisementData: AdvertisementData
): Promise<AxiosResponse> => {
  const formData = new FormData()

  Object.entries(advertisementData).forEach(([key, value]) => {
    if (key !== 'images' && value !== null) {
      formData.append(key, value.toString())
    }
  })

  if (advertisementData.images && advertisementData.images.length > 0) {
    advertisementData.images.forEach((file: File) => {
      if (!(file instanceof File)) {
        return
      }
      formData.append('images[]', file, file.name)
    })
  }

  return await axiosProtectedInstance.post('/new-advertisement', formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getProductInfo = async (
  productId: number
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get(`
ad/show/${productId}`)
}

export const saveAd = async (productId: number): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.post(`/ads/${productId}/save`)
}

export const unSaveAd = async (productId: number): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.delete(`/ads/${productId}/unsave`)
}
