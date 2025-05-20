import React, { useCallback } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

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
// import Input from '../../components/shared/UIComponents/FormElements/input/input'

const StepThree: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const [formState, onInputHandler, dispatch] = UseForm(
    { phone: { value: '', isValid: false } },
    false
  )

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

  return (
    <>
      <div className="center  h-dvh  w-full  bg-gray-ED ">
        <div className="container  center ">
          <div className="flex flex-col  gap-y-2  md:gap-y-4   text-center w-150  bg-white  px-25 py-10  rounded-xl  font-shabnam text-xs  md:text-base text-gray-1000">
            <h4 className="font-shabnamBold  text-sm md:text-2xl ">ثبت نام</h4>
            <span> با این موبایل حساب کاربری وجود ندارد </span>
            <span>برای ثبت‌ نام اطلاعات زیر را تکمیل نمایید</span>

            {/* Custom input */}
            {/*name  */}
            <div className="w-full  h-full">
              <Input
                id="phone"
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
                errorMessage={formState.errorMessage}
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
                id="phone"
                type="text"
                placeholder=" نام خانوادگی  خود را وارد کنید    "
                element="text"
                className=" w-full h-full py-3  !outline-0   md:py-5  rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                validations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(25),
                ]}
                onInputHandler={handleInputChange}
                onFocus={handleFocus}
                errorMessage={formState.errorMessage}
                isFocused={isFocused}
                validationMessageSuccess={` نام  خانوادگی  وارد شده معتبر است`}
                validationMessageError={`  نام  خانوادگی  وارد شده معتبر نیست`}
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
                errorMessage={formState.errorMessage}
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
            <div className=" w-full   h-10  md:h-14 cursor-pointer bg-primary hover:bg-primary/85 transition-all duration-500 center  py-3  rounded-lg   font-shabnam text-white mt-10 mb-8 ">
              <span>ثبت اطلاعات</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepThree
