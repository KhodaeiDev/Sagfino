import { axiosProtectedInstance } from '../../configs/configs'
import axios from 'axios'

export const getUserAdSaved = async (
  filters: Record<string, string | null>
) => {
  return await axiosProtectedInstance.get(`/ads/saved-ads`, { params: filters })
}

export const deleteAllSaved = async () => {
  return await axiosProtectedInstance.delete(`
ads/saved-ads`)
}

export const getAdsCreated = async (filters: Record<string, string | null>) => {
  return await axiosProtectedInstance.get(
    `
my-ads`,
    { params: filters }
  )
}

export const deleteAllAdsCreated = async () => {
  return await axiosProtectedInstance.delete(`
my-ads`)
}

export const deleteSpecificAdMe = async (id: number) => {
  return await axiosProtectedInstance.delete(`
my-ads/${id}`)
}

export const updateUserProfile = async (
  data: {
    first_name: string
    last_name: string
    image?: File
  },
  token: string
) => {
  const cleanToken = token.replace(/^"|"$/g, '')

  const formData = new FormData()
  formData.append('first_name', data.first_name)
  formData.append('last_name', data.last_name)

  if (data.image instanceof File) {
    formData.append('image', data.image)
  }

  return axios.post(
    'https://saghfino.abolfazlhp.ir/api/update-user-profile',
    formData,
    {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        Accept: 'application/json',
      },
    }
  )
}
