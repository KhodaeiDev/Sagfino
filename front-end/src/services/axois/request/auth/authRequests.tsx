import { AxiosResponse } from 'axios'
import { axiosUnProtectedInstance } from '../../configs/configs'

const sendMobileNumber = async ( mobileNumber: string): Promise<AxiosResponse> => {
  const dataNumber = { phone_number: mobileNumber }

  return axiosUnProtectedInstance.post('/send-otp', dataNumber)
}

const verifyOtpCode = async (
  mobileNumber: string,
  code: string
): Promise<AxiosResponse> => {
  const authdata = { phone_number: mobileNumber, code }
  return axiosUnProtectedInstance.post('/verify-otp', authdata)
}

const registerUser = (
  name: string,
  lastName: string,
  phone: string,
  role: string
) => {
  const userData = {
    first_name: name,
    last_name: lastName,
    phone_number: phone,
    role,
  }

  return axiosUnProtectedInstance.post('/register', userData)
}

export { sendMobileNumber, verifyOtpCode, registerUser }
