import { AxiosResponse } from 'axios'
import { axiosUnProtectedInstance } from '../../configs/configs'

export const getAllRealEstates = async (
  filters: Record<string, string | null>
): Promise<AxiosResponse> => {
  return await axiosUnProtectedInstance.get(`/real-estates`, {
    params: filters,
  })
}
