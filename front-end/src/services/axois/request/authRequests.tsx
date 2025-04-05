import { axoisUnProtectedInstance } from '../configs/configs'
import { AxiosError } from 'axios'

const sendMobileNumber = async (mobileNumber: string): Promise<void> => {
  try {
    const response = await axoisUnProtectedInstance.post('/auth/send-otp', {
      mobile: mobileNumber,
    })

    console.log('Mobile Sent Successfully:', response.status)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Axios Error:', error.response?.data || error.message)
      // خطاهای مربوط به پاسخ سرور را هندل کنید
    } else {
      console.error('Unexpected Error:', error)
      // خطاهای دیگر را مدیریت کنید
    }
  }
}

export { sendMobileNumber }
