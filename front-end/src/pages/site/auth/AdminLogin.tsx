import React, { useCallback, useContext, useState } from 'react'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import Input from '../../../components/shared/UIComponents/FormElements/input/input'
import UseForm from '../../../Hooks/useForm'
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from '../../../validators/rules'
import ToastNotification from '../../../services/toastify/toastify'
import { verifyAdmin } from '../../../services/axois/request/auth/authRequests'
import { AxiosError } from 'axios'
import { AuthContext, UserInfoType } from '../../../context/auth/authContext'

const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const [loading, setLoading] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const [formState, onInputHandler, dispatch] = UseForm('admin-login')

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleLogin = async () => {
    if (!formState.isFormValid) {
      dispatch({
        type: 'SET_VALIDATION_MESSAGE_ERROR',
        value: 'لطفاً اطلاعات وارد شده را بررسی کنید.',
      })
      return
    }

    try {
      setLoading(true)
      dispatch({ type: 'CLEAR_ERRORS' })

      const response = await verifyAdmin(
        formState.inputs.username_admin.value,
        formState.inputs.password_admin.value
      )

      if (response.status >= 200 && response.status < 300) {
        const userData: UserInfoType = {
          firstName: response?.data?.firstName,
          lastName: response?.data?.lastName,
          phoneNumber: response?.data?.phoneNumber,
          image: response?.data?.image || null,
          role: 'admin',
        }
        auth.login(userData, response.data.token)
        ToastNotification(
          'success',
          'ورود موفقیت‌آمیز بود! در حال انتقال...',
          5000
        )
        setTimeout(() => {
          navigate('/AdminPanel/users')
        }, 3000)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response?.data?.message || '⚠️ نام کاربری یا رمز عبور اشتباه است.'
        dispatch({
          type: 'SET_ERROR',
          value: message,
        })
        ToastNotification('error', message, 5000)
      } else {
        ToastNotification('error', 'خطای ناشناخته رخ داد.', 5000)
      }
    } finally {
      setLoading(false)
    }
  }

  const hasError =
    formState.inputs.username?.errorMessage ||
    formState.inputs.password?.errorMessage

  const buttonText = loading
    ? '⏳ در حال ورود...'
    : hasError
    ? '⚠️ اطلاعات نادرست است'
    : !formState.isFormValid
    ? 'لطفاً فرم را کامل کنید'
    : 'ورود'

  return (
    <div className="center h-dvh w-full bg-gray-ED">
      <div className="container center">
        <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-150 bg-white p-10 md:px-25 md:py-10 rounded-xl font-shabnam text-xs md:text-base text-gray-1000">
          <h4 className="font-shabnamBold text-sm md:text-2xl">ورود ادمین</h4>

          {/* username input */}
          <div className="w-full h-full relative">
            <Input
              id="username_admin"
              type="text"
              placeholder="نام کاربری"
              element="text"
              className="w-full h-full py-3 !outline-0 md:py-5 pr-10 rounded-xl border !border-gray-AD bg-transparent placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
              validations={[
                requiredValidator(),
                minValidator(3),
                maxValidator(25),
              ]}
              onInputHandler={handleInputChange}
              onFocus={handleFocus}
              errorMessage={formState.inputs.username?.errorMessage}
              isFocused={isFocused}
              validationMessageSuccess="نام کاربری معتبر است"
              validationMessageError="نام کاربری معتبر نیست"
              icon={
                <AiOutlineUser className="absolute w-4 h-4 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              }
            />
          </div>

          {/* password input */}
          <div className="w-full h-full relative">
            <Input
              id="password_admin"
              type="password"
              placeholder="رمز عبور"
              element="text"
              className="w-full h-full py-3 !outline-0 md:py-5 pr-10 rounded-xl border !border-gray-AD bg-transparent placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
              validations={[
                requiredValidator(),
                minValidator(6),
                maxValidator(50),
              ]}
              onInputHandler={handleInputChange}
              onFocus={handleFocus}
              errorMessage={formState.inputs.password?.errorMessage}
              isFocused={isFocused}
              validationMessageSuccess="رمز عبور معتبر است"
              validationMessageError="رمز عبور معتبر نیست"
              icon={
                <AiOutlineLock className="absolute w-4 h-4 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              }
            />
          </div>

          <button
            disabled={!formState.isFormValid}
            onClick={handleLogin}
            className={`w-full h-10 md:h-14 center py-3 rounded-lg font-shabnam text-white mt-10 mb-8 transition-all duration-500 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : hasError
                ? 'bg-red-500 hover:bg-red-600 cursor-not-allowed'
                : formState.isFormValid
                ? 'bg-green-500 hover:bg-green-600 cursor-pointer'
                : 'bg-primary hover:bg-primary/85 cursor-not-allowed'
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
