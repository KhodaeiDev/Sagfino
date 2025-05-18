import React, { useState, useRef } from 'react'
import { GoClock } from 'react-icons/go'
import { NavLink } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import inputOtp from '../../../components/shared/UIComponents/FormElements/otp/inputOtp'
import InputOtp from '../../../components/shared/UIComponents/FormElements/otp/inputOtp'
import Input from '../../../components/shared/UIComponents/FormElements/input/input'

const StepTwo: React.FC = () => {
  const [otp, setOtp] = useState<{ id: string; value: string }[]>(
    Array(5)
      .fill('')
      .map(() => ({ id: uuidv4(), value: '' }))
  )
  const inputsRef = useRef<HTMLInputElement[]>([])

  const handleChange = (value: string, id: string) => {
    if (!isNaN(Number(value))) {
      const newOtp = otp.map((item) =>
        item.id === id ? { ...item, value } : item
      )
      setOtp(newOtp)

      const currentIndex = otp.findIndex((item) => item.id === id)
      if (value !== '' && currentIndex < otp.length - 1) {
        inputsRef.current[currentIndex + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: string
  ) => {
    const currentIndex = otp.findIndex((item) => item.id === id)
    if (event.key === 'Backspace' && otp[currentIndex].value === '') {
      if (currentIndex > 0) {
        inputsRef.current[currentIndex - 1]?.focus()
      }
    }
  }

      document.title = 'سقفینو - احزار هویت مرحله 2'


  return (
    <>
      <div className="center h-dvh w-full bg-gray-ED ">
        <div className="container center">
          <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-150 h-80 md:h-100 bg-white px-8 pb-10 pt-7.5 rounded-xl font-shabnam text-xs md:text-base text-Gray-35">
            <h4 className="font-shabnamBold text-sm md:text-2xl text-gray-21">
              کد تائید
            </h4>
            <span>کد ارسال‌شده به ۰۹۱۲۳۳۳۴۴۵۵ را وارد کنید</span>
            <NavLink to={''} className={'text-gray-71'}>
              {' '}
              ویرایش شماره موبایل
            </NavLink>
            {/* otp */}
            <div className="flex   flex-row-reverse gap-x-2 justify-center">
              {otp.map((item, index) => (
                <InputOtp className=" appearance-none w-10 md:w-23 h-10  md:h-12 border  border-gray-400 rounded-lg text-center text-lg  md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"></InputOtp>
                // <input
                //   key={item.id} 
                //   type="text"
                //   maxLength={1}
                //   value={item.value}
                //   onChange={(event) =>
                //     handleChange(event.target.value, item.id)
                //   }
                //   onKeyDown={(event) => handleKeyDown(event, item.id)}
                //   ref={(element) => {
                //     if (element) {
                //       inputsRef.current[index] = element
                //     }
                //   }}
                //   className=" w-10 md:w-23 h-10  md:h-12 border  border-gray-400 rounded-lg text-center text-lg  md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                // />
              ))}
            </div>
            {/* code time */}
            <div className=" flex items-center justify-center ">
              <div className=" flex items-center gap-1 text-gray-500 font-shabnam  text-xs lg:text-sm mt-7.5 ">
                <GoClock className=" w-4 h-4 " />
                <span className=" text-primary ">۱:۵۹</span>
                <span className=" cursor-pointer"> تا دریاف کد مجدد</span>
              </div>
            </div>
            {/* btn */}
            <div className="w-full h-10 md:h-14 cursor-pointer bg-primary hover:bg-primary/85 transition-all duration-500 center py-3 rounded-lg font-shabnam text-white mt-7 mb-8">
              <span>تائید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepTwo