import { AxiosResponse } from 'axios'
import {
  axiosProtectedInstance,
  axiosUnProtectedInstance,
} from '../../configs/configs'

export const getAllRealEstates = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get(`/real-estates`, {
    params: filters,
  })
}

export const getRealEstateInfo = async (
  productId: number,
  filters: Record<string, string | null>
) => {
  const token = localStorage.getItem('userToken')?.replace(/"/g, '')

  if (token !== 'null' || !token) {
    return await axiosProtectedInstance.get(`real-estates/${productId}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
      params: filters,
    })
  } else {
    return await axiosProtectedInstance.get(`real-estates/${productId}`, {})
  }
}

export const scoringRequest = async (
  scoringInfo: Record<number, number | null>
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.post(`/real-estates/rate`, scoringInfo)
}
