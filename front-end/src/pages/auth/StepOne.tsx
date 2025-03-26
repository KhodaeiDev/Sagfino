import React, { useState } from 'react'
import Input from '../../components/shared/UIComponents/FormElements/input/input'

const StepOne: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  document.title = 'سقفینو - احزار هویت مرحله 1'

  return (
    <>
      <div className="center h-dvh w-full bg-gray-ED ">
        <div className="container  center ">
          <div className="flex flex-col  gap-y-2  md:gap-y-4   text-center w-150 h-80 md:h-100 bg-white px-8 pb-10 pt-7.5 rounded-xl  font-shabnam text-xs  md:text-base text-Gray-35">
            <h4 className="font-shabnamBold  text-sm md:text-2xl text-gray-21">
              ورود
            </h4>
            <span>به سقفینو خوش آمدید</span>
            <span>لطفا برای ورود شماره تلفن خود را وارد کنید</span> 
            <Input
              type="text"
              placeholder="شماره تلفن"
              element="text"
              className="border border-gray-300 mt-6.25 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {/* Custom Checkbox */}
            <div className="flex items-center gap-x-2">
              <div
                onClick={toggleCheckbox}
                className="flex items-center  gap-x-2.5 cursor-pointer"
              >
                {/* Outer Box */}
                <div
                  className={` w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center border-2 rounded-md ${
                    isChecked
                      ? 'bg-primary border-primary'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {/* Check Icon */}
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
                  className=" text-xs  md:text-sm text-gray-700 ml-2"
                >
                  موافق{' '}
                  <span className="text-primary cursor-pointer">
                    قوانین سقفینو
                  </span>{' '}
                  هستم.
                </label>
              </div>
            </div>
            <div className=" w-full   h-10  md:h-14 cursor-pointer bg-primary hover:bg-primary/85 transition-all duration-500 center  py-3  rounded-lg   font-shabnam text-white mt-10 mb-8 ">
              <span>ورود</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepOne
