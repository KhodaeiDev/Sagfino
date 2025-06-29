import { axiosProtectedInstance } from '../configs/configs'

import type { AxiosResponse } from 'axios'

export const gettingCountsOfAdsUsers = async (): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.get('/admin/dashboard/ads-users-counts')
}

export const gettingUsers = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.get(
    `
admin/dashboard/users`,
    { params: filters }
  )
}

export const gettingAds = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.get(`admin/dashboard/ads`, {
    params: filters,
  })
}

export const changeStatusAds = async (idAd: number): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.post(
    `/admin/dashboard/ads/change-status/${idAd}`
  )
}

export const removeAds = async (idAd: number): Promise<AxiosResponse> => {
  return await axiosProtectedInstance.delete(`/admin/dashboard/ads/${idAd}`)
}
