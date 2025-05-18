import { AxiosResponse } from 'axios'
import { axiosUnProtectedInstance } from '../../configs/configs'

const sendMobileNumber = async (
  mobileNumber: string
): Promise<AxiosResponse> => {
  const dataNumber = { phone_number: mobileNumber }

  return axiosUnProtectedInstance.post('/send-otp', dataNumber)
}

const verifyOtpCode = async (
  mobileNumber: string,
  code: string
): Promise<AxiosResponse> => {
  const authdata = { phone_number: mobileNumber, code }
  console.log(authdata)
  return axiosUnProtectedInstance.post('/verify-otp', authdata)
}
export { sendMobileNumber, verifyOtpCode }
