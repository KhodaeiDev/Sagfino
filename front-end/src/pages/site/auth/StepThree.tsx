import React, { useCallback } from 'react'

import { AiOutlineUser } from 'react-icons/ai'
import { FormType } from '../../../Hooks/useformType'
import { registerUser } from '../../../services/axois/request/auth/authRequests'

import { FiPhone } from 'react-icons/fi'
import { useState } from 'react'
import {
  maxValidator,
  minValidator,
  phoneValidator,
  requiredValidator,
} from '../../../validators/rules'
import UseForm from '../../../Hooks/useForm'
import Input from '../../../components/shared/UIComponents/FormElements/input/input'
import { NavLink, useNavigate } from 'react-router'
import { AxiosError } from 'axios'
import { ToastContainer, Bounce } from 'react-toastify'
import ToastNotification from '../../../services/toastify/toastify'

const StepThree: React.FC = () => {
  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [formType, setFormType] = useState<FormType>('register')
  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const handleFocus = useCallback(() => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }, [isFocused])

  const toggleCheckbox = useCallback(() => {
    setIsChecked((prev) => !prev)
  }, [])

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleRegister = useCallback(async () => {
    if (!formState.isFormValid) {
      dispatch({
        type: 'SET_VALIDATION_MESSAGE_ERROR',
        value: 'اطلاعات وارد شده معتبر نیست، لطفاً بررسی کنید.',
      })
      return
    }

    try {
      setLoading(true)
      dispatch({ type: 'CLEAR_ERRORS' })

      const response = await registerUser(
        formState.inputs.name.value,
        formState.inputs.lastName.value,
        formState.inputs.phone.value,
        isChecked ? 'real_estate_agent' : 'user'
      )

      if (response?.status && response.status >= 200 && response.status < 300) {
        dispatch({
          type: 'SET_VALIDATION_MESSAGE_SUCCESS',
          value:
            'ثبت‌نام موفقیت‌آمیز بود! لطفاً با شماره تلفن خود وارد شوید. شما به صفحه ورود هدایت خواهید شد.',
        })

        ToastNotification(
          'success',
          `ثبت‌نام موفقیت‌آمیز بود! لطفاً چند لحظه صبر کنید  
در حال هدایت به صفحه ورود، با شماره تلفن وارد شوید.`
        )

        setTimeout(() => {
          navigate('/auth/StepOne')
        }, 6000)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorData = err.response?.data?.errors

        if (errorData) {
          Object.entries(errorData).forEach(([key, value]) => {
            const fieldID =
              key === 'phone_number'
                ? 'phone'
                : key === 'first_name'
                ? 'name'
                : key === 'last_name'
                ? 'lastName'
                : null

            if (fieldID && Array.isArray(value) && value.length > 0) {
              dispatch({
                type: 'SET_INPUT_ERROR',
                inputID: fieldID,
                value: value[0],
              })
            } else if (fieldID) {
              dispatch({
                type: 'SET_INPUT_ERROR',
                inputID: fieldID,
                value: '⚠️ خطای نامشخص رخ داد!',
              })
            }
          })
        } else {
          dispatch({
            type: 'SET_ERROR',
            value:
              err.response?.data?.message ?? '⚠️ مشکلی در ثبت‌نام پیش آمد!',
          })
        }
      }
    } finally {
      setLoading(false)
    }
  }, [
    formState.inputs.name.value,
    formState.inputs.lastName.value,
    formState.inputs.phone.value,
    dispatch,
    navigate,
    isChecked,
    formState.isFormValid,
  ])

  const hasError =
    formState.inputs.name?.errorMessage ||
    formState.inputs.lastName?.errorMessage ||
    formState.inputs.phone?.errorMessage

  const customErrorMessage = hasError
    ? '⚠️ لطفاً اطلاعات وارد شده را بررسی کنید.'
    : 'ثبت اطلاعات'

  return (
    <>
      <div className="center  h-dvh  w-full  bg-gray-ED ">
        <div className="container  center ">
          <div className="flex flex-col  gap-y-2  md:gap-y-4   text-center w-150  bg-white p-10 md:px-25 md:py-10  rounded-xl  font-shabnam text-xs  md:text-base text-gray-1000">
            <h4 className="font-shabnamBold  text-sm md:text-2xl ">ثبت نام</h4>
            <div className="text-sm flex items-center justify-center font-shabnamMedium">
              <NavLink
                to="/auth/StepOne"
                onClick={() => setFormType('login')}
                className={' text-xs md:text-base '}
              >
                قبلاً ثبت‌نام کرده‌اید؟{' '}
                <span className="text-primary">وارد شوید!</span>
              </NavLink>
            </div>
            <span className=" text-sm  md:text-base ">
              برای ثبت‌ نام اطلاعات زیر را تکمیل نمایید
            </span>

            {/* Custom input */}
            {/*name  */}
            <div className="w-full  h-full">
              <Input
                id="name"
                type="text"
                placeholder=" نام خود را وارد کنید "
                element="text"
                className=" w-full h-full py-3  !outline-0   md:py-5  rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                validations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(25),
                ]}
                onInputHandler={handleInputChange}
                onFocus={handleFocus}
                errorMessage={formState.inputs.name?.errorMessage}
                isFocused={isFocused}
                validationMessageSuccess={` نام وارد شده معتبر است`}
                validationMessageError={`  نام وارد شده معتبر نیست`}
                icon={
                  <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                }
              />
            </div>
            {/*last name  */}
            <div className=" w-full  h-full">
              <Input
                id="lastName"
                type="text"
                placeholder="نام خانوادگی  خود را وارد کنید "
                element="text"
                className=" w-full h-full py-3  !outline-0   md:py-5  rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                validations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(25),
                ]}
                onInputHandler={handleInputChange}
                onFocus={handleFocus}
                errorMessage={formState.inputs.lastName?.errorMessage}
                isFocused={isFocused}
                validationMessageSuccess={`نام  خانوادگی  وارد شده معتبر است`}
                validationMessageError={` نام  خانوادگی  وارد شده معتبر نیست`}
                icon={
                  <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                }
              />
            </div>

            {/* phone  */}
            <div className=" w-full   h-full">
              <Input
                id="phone"
                type="text"
                placeholder="شماره تلفن"
                element="text"
                className=" w-full h-full py-3  !outline-0   md:py-5  rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                validations={[
                  requiredValidator(),
                  minValidator(11),
                  maxValidator(11),
                  phoneValidator(),
                ]}
                onInputHandler={handleInputChange}
                onFocus={handleFocus}
                errorMessage={formState.inputs.phone?.errorMessage}
                isFocused={isFocused}
                validationMessageSuccess={`شماره همراه وارد شده معتبر است`}
                validationMessageError={` شماره همراه وارد شده معتبر نیست
`}
                icon={
                  <FiPhone className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                }
              />
            </div>

            {/* check box */}
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-2.5">
                <div
                  onClick={toggleCheckbox}
                  className={`cursor-pointer w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center border-2 rounded-md ${
                    isChecked
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {isChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <label
                  htmlFor="agree"
                  className="text-xs md:text-sm text-gray-700 ml-2"
                >
                  من یک <span className="text-primary ">مشاور املاک</span> هستم.
                </label>
              </div>
            </div>
            <button
              disabled={!formState.isFormValid || loading}
              onClick={handleRegister}
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
              {loading ? '⏳ در حال پردازش...' : customErrorMessage}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default StepThree
