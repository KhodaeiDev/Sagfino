import { AxiosResponse } from 'axios'
import { axiosUnProtectedInstance } from '../configs/configs'

const sendMobileNumber = async (
  mobileNumber: string
): Promise<AxiosResponse> => {
  const dataNumber = { phone_number: mobileNumber }

  return axiosUnProtectedInstance.post('/send-otp', dataNumber)
}

export { sendMobileNumber }
