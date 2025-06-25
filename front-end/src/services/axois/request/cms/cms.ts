import { axiosProtectedInstance } from '../../configs/configs'

export const getUserAdSaved = async () => {
  return await axiosProtectedInstance.get(`/ads/saved-ads`)
}

export const deleteAllSaved = async () => {
  return await axiosProtectedInstance.delete(`
ads/saved-ads`)
}

export const getAdsCreated = async () => {
  return await axiosProtectedInstance.get(`
my-ads`)
}

export const deleteAllAdsCreated = async () => {
  return await axiosProtectedInstance.delete(`
my-ads`)
}

export const deleteSpecificAdMe = async (id: number) => {
  return await axiosProtectedInstance.delete(`
my-ads/${id}`)
}
