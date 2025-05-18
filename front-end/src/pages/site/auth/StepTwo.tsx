import React, { useState, useRef, useContext } from 'react'
import { GoClock } from 'react-icons/go'
import { NavLink } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import InputOtp from '../../../components/shared/UIComponents/FormElements/otp/inputOtp'
import { AuthContext } from '../../../context/authContext'
import { verifyOtpCode } from '../../../services/axois/request/auth/authRequests'

const StepTwo: React.FC = () => {
  const [otp, setOtp] = useState<{ id: string; value: string }[]>(
    Array(6)
      .fill('')
      .map(() => ({ id: uuidv4(), value: '' }))
  )
  const auth = useContext(AuthContext)

  const inputsRef = useRef<HTMLInputElement[]>([])
  console.log(otp)

  const handleChange = (id: string, value: string) => {
    if (!isNaN(Number(value)) && value.length <= 1) {
      setOtp((prevOtp) =>
        prevOtp.map((item) => (item.id === id ? { ...item, value } : item))
      )

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

    if (currentIndex !== -1) {
      if (event.key === 'Backspace' && otp[currentIndex].value === '') {
        event.preventDefault() // ✅ جلوگیری از حذف مقدار در `input`

        if (currentIndex > 0 && inputsRef.current[currentIndex - 1]) {
          inputsRef.current[currentIndex - 1].focus() // ✅ انتقال به `input` قبلی
        }
      }
    }
  }
  const handleVaeryfayOtp = async () => {
    const finalOtp = otp.map((item) => item.value).join('')
    const response = await verifyOtpCode(auth.phone, finalOtp)
    console.log(response)
  }
console.log(auth.phone);
  document.title = 'سقفینو - احزار هویت مرحله 2'

  return (
    <>
      <div className="center h-screen w-full bg-gray-ED ">
        <div className="container center">
          <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-fit h-fit  bg-white px-8 pb-10 pt-7.5 rounded-xl font-shabnam text-xs md:text-base text-Gray-35">
            <h4 className="font-shabnamBold text-sm md:text-2xl text-gray-21">
              کد تائید
            </h4>
            <span>کد ارسال‌شده به {auth.phone} را وارد کنید</span>
            <NavLink to={'/auth/StepOne'} className={'text-gray-71'}>
              {' '}
              ویرایش شماره موبایل
            </NavLink>
            {/* otp */}
            <div className="flex   flex-row-reverse gap-x-2 justify-center">
              {otp.map((item, index) => (
                <InputOtp
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  placeholder="-"
                  className=" !appearance-none w-10 md:w-23 h-10  md:h-12 border  border-gray-400 rounded-lg text-center text-lg  md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  inputRef={(element) => {
                    if (element) {
                      inputsRef.current[index] = element
                    }
                  }}
                />
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
            <div
              onClick={handleVaeryfayOtp}
              className="w-full h-10 md:h-14 cursor-pointer bg-primary hover:bg-primary/85 transition-all duration-500 center py-3 rounded-lg font-shabnam text-white mt-7 "
            >
              <span>تائید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepTwo
