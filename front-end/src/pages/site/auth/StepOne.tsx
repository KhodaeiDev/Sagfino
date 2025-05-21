import React, { useCallback, useContext, useState } from 'react'
import Input from '../../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  phoneValidator,
  requiredValidator,
} from '../../../validators/rules'
import UseForm from '../../../Hooks/useForm'
import { NavLink } from 'react-router'
import { sendMobileNumber } from '../../../services/axois/request/auth/authRequests'
import { useNavigate } from 'react-router'
import { AxiosError } from 'axios'
import { AuthContext } from '../../../context/authContext'
import { useSaveToLocalStorage } from '../../../Hooks/shared/shared'
import { FiPhone } from 'react-icons/fi'
import { FormType } from '../../../Hooks/useformType'

const StepOne: React.FC = () => {
  const navigate = useNavigate()
  document.title = 'سقفینو-احراز هویت مرحله 1'

  const auth = useContext(AuthContext)
  const [setSaveToLoaclStorage] = useSaveToLocalStorage('userPhone', null)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [formType, setFormType] = useState<FormType>('login')

  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const toggleCheckbox = useCallback(() => {
    setIsChecked((prev) => !prev)
  }, [])

  const handleFocus = useCallback(() => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }, [isFocused])

  const handleLogin = useCallback(async () => {
    if (!formState.isFormValid) {
      dispatch({
        type: 'SET_VALIDATION_MESSAGE_ERROR',
        value: 'شماره همراه وارد شده معتبر نیست.',
      })
      return
    }

    try {
      setLoading(true)
      dispatch({ type: 'SET_ERROR', value: '' })

      const response = await sendMobileNumber(formState.inputs.phone.value)
      setSaveToLoaclStorage(formState.inputs.phone.value)
      auth.updatephone(formState.inputs.phone.value)

      if (response?.status && response.status >= 200 && response.status < 300) {
        dispatch({
          type: 'SET_VALIDATION_MESSAGE_SUCCESS',
          value: 'شماره همراه معتبر است، ادامه دهید.',
        })
        navigate('/auth/StepTwo')
      }
      console.log(response)
    } catch (err) {
      let errorText = '⚠️ مشکلی پیش آمده!'

      if (err instanceof AxiosError) {
        errorText = err.response?.data?.error ?? errorText
      }
      dispatch({ type: 'SET_ERROR', value: errorText })
    } finally {
      setLoading(false)
    }
  }, [
    formState.inputs.phone.value,
    formState.isFormValid,
    dispatch,
    navigate,
    auth,
    setSaveToLoaclStorage,
  ])

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  return (
    <>
      <div className="center h-dvh w-full bg-gray-ED">
        <div className="container center">
          <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-150 h-85 md:h-110 bg-white px-8 pb-10 pt-7.5 rounded-xl font-shabnam text-xs md:text-base text-Gray-35">
            <h4 className="font-shabnamBold text-sm md:text-2xl text-gray-21">
              ورود
            </h4>
            <span>به سقفینو خوش آمدید</span>
            <div className=" text-sm flex items-center justify-center font-shabnamMedium ">
              <NavLink
                to={'/auth/StepThree'}
                onClick={() => setFormType('register')}
                className={ " text-xs md:text-base " }
              >
                هنوز حسابی ندارید؟  
                <span className="text-primary"> ثبت نام کنید!</span>
              </NavLink>
            </div>
            <span>لطفا برای ورود شماره تلفن خود را وارد کنید</span>

            <Input
              id="phone"
              type="text"
              placeholder="شماره تلفن"
              element="text"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none "
              validations={[
                requiredValidator(),
                minValidator(11),
                maxValidator(11),
                phoneValidator(),
              ]}
              onInputHandler={handleInputChange}
              onFocus={handleFocus}
              errorMessage={formState.errorMessage}
              isFocused={isFocused}
              validationMessageSuccess={`شماره همراه وارد شده معتبر است`}
              validationMessageError={`                    شماره همراه وارد شده معتبر نیست
`}
              icon={
                <FiPhone className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              }
            />

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
                  موافق{' '}
                  <NavLink
                    to={'/TermsAndConditions/TermsAndConditions'}
                    className="text-primary cursor-pointer"
                  >
                    قوانین سقفینو
                  </NavLink>{' '}
                  هستم.
                </label>
              </div>
            </div>

            <button
              disabled={
                !isChecked ||
                !formState.isFormValid ||
                !!formState.errorMessage ||
                !!loading
              }
              onClick={handleLogin}
              className={`   disabled:bg-primary disabled:cursor-not-allowed w-full h-10 md:h-14 cursor-pointer transition-all duration-500 center py-3 rounded-lg font-shabnam text-white mt-10 mb-8 ${
                formState.errorMessage
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-500/85'
              }`}
            >
              {loading
                ? '⏳ در حال پردازش...'
                : formState.errorMessage
                ? formState.errorMessage
                : isChecked && formState.isFormValid
                ? 'ورود'
                : 'شماره همراه خود را وارد کرده و تیک قوانین سقفینو را بزنید'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepOne
