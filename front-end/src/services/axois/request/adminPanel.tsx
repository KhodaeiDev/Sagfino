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
