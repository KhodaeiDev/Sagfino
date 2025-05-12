import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { LuEye } from 'react-icons/lu'
import { IoEyeOffOutline } from 'react-icons/io5'
import { PiKeyLight } from 'react-icons/pi'

import { useState } from 'react'
// import Input from '../../components/shared/UIComponents/FormElements/input/input'

const StepThree: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <>
      <div className="center h-dvh w-full bg-gray-ED ">
        <div className="container  center ">
          <div className="flex flex-col  gap-y-2  md:gap-y-4   text-center w-150  bg-white  px-7  md:px-34.5 pb-24.5 pt-16 rounded-xl  font-shabnam text-xs  md:text-base text-gray-1000">
            <h4 className="font-shabnamBold  text-sm md:text-2xl ">ثبت نام</h4>
            <span> با این موبایل حساب کاربری وجود ندارد </span>
            <span>برای ثبت‌ نام اطلاعات زیر را تکمیل نمایید</span>

            {/* Custom input */}
            <div className="flex items-center justify-between text-gray-1000 border border-gray-AD rounded-xl py-3 px-2  md:py-5 md:px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
              <div className="flex  w-full  items-center gap-x-2">
                <AiOutlineUser className=" w-4 h-4 md:w-6 md:h-6" />
                {/* <Input
                  className=" w-full  outline-0 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                  type={'text'}
                  placeholder="نام خود را وارد کنید"
                  element="text"
                /> */}
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-1000 border border-gray-AD rounded-xl py-3 px-2  md:py-5 md:px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
              <div className="flex w-full items-center gap-x-2">
                <AiOutlineUser className=" w-4 h-4 md:w-6 md:h-6" />
                {/* <Input
                  className=" w-full  outline-0 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                  type={'text'}
                  placeholder="نام خانوادگی خود را وارد کنید"
                  element="text"
                /> */}
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-1000 border border-gray-AD rounded-xl py-3 px-2  md:py-5 md:px-3focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
              <div className="flex w-full items-center gap-x-2">
                <PiKeyLight className=" w-4 h-4  md:w-6 md:h-6" />
                {/* <Input
                  className="  w-full outline-0 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="رمز دلخواه خود را وارد کنید"
                  element="text"
                /> */}
              </div>
              {showPassword ? (
                <IoEyeOffOutline
                  className="  w-4 h-5 md:w-5 md:h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <LuEye
                  className="w-4 h-5 md:w-5 md:h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
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
