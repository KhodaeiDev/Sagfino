import React, { useState } from 'react'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  phoneValidator,
  requiredValidator,
} from '../../validators/rules'
import UseForm from '../../Hooks/useForm'

const StepOne: React.FC = () => {
  document.title = 'سقفینو-احزار هویت مرحله 1'
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false) // مدیریت فکوس

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev)
  }

  const [formState, onInputHandler] = UseForm(
    { phone: { value: '', isValid: false } },
    false
  )

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  console.log('isFocused:', isFocused, 'for,', formState.isFormValid)

  return (
    <div className="center h-dvh w-full bg-gray-ED">
      <div className="container center">
        <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-150 h-85 md:h-110 bg-white px-8 pb-10 pt-7.5 rounded-xl font-shabnam text-xs md:text-base text-Gray-35">
          <h4 className="font-shabnamBold text-sm md:text-2xl text-gray-21">
            ورود
          </h4>
          <span>به سقفینو خوش آمدید</span>
          <span>لطفا برای ورود شماره تلفن خود را وارد کنید</span>

          <Input
            id="phone"
            type="text"
            placeholder="شماره تلفن"
            element="text"
            className="border border-gray-300 mt-6.25 rounded-lg p-2 focus:outline-none "
            validations={[
              requiredValidator(),
              minValidator(11),
              maxValidator(11),
              phoneValidator(),
            ]}
            onInputHandler={onInputHandler}
            onFocus={handleFocus}
          />

          <div className=" w-full flex  items-start justify-start font-shabnam">
            {isFocused ? (
              formState.isFormValid ? (
                <span className="text-green-500">
                  شماره همراه وارد شده معتبر است
                </span>
              ) : (
                <span className="text-primary">
                  شماره همراه وارد شده معتبر نیست
                </span>
              )
            ) : null}
          </div>

          <div className="flex items-center gap-x-2">
            <div
              onClick={toggleCheckbox}
              className="flex items-center gap-x-2.5 cursor-pointer"
            >
              <div
                className={`w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center border-2 rounded-md ${
                  isChecked
                    ? 'bg-green-500 border-green-500'
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
                <span className="text-primary cursor-pointer">
                  قوانین سقفینو
                </span>{' '}
                هستم.
              </label>
            </div>
          </div>

          <button
            disabled={!isChecked || !formState.isFormValid}
            className="  disabled:bg-primary disabled:cursor-not-allowed   w-full h-10 md:h-14 cursor-pointer bg-green-500 hover:bg-green-500/85 transition-all duration-500 center py-3 rounded-lg font-shabnam text-white mt-10 mb-8"
          >
            {isChecked && formState.isFormValid
              ? 'ورود'
              : 'شماره همراه خود را وارد کرده و تیک قوانین سقفینو را بزنید'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepOne
