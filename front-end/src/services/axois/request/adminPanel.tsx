import { axiosProtectedInstance } from '../configs/configs'

import type { AxiosResponse } from 'axios'

interface CountsResponse {
  users: number
  ads: number
}

export const gettingCountsOfAdsUsers = async (): Promise<
  AxiosResponse<CountsResponse>
> => {
  return await axiosProtectedInstance.get('/admin/dashboard/ads-users-counts')
}
