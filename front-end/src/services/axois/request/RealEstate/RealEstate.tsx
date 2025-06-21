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

export const getRealEstateInfo = async (productId: number) => {
  const token = localStorage.getItem('userToken')?.replace(/"/g, '')

  if (token !== 'null' || !token) {
    return await axiosProtectedInstance.get(`real-estates/${productId}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
  } else {
    return await axiosProtectedInstance.get(`real-estates/${productId}`, {})
  }
}
