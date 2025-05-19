import React, { useState, useRef, useContext, useEffect, useMemo } from 'react'
import { GoClock } from 'react-icons/go'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import InputOtp from '../../../components/shared/UIComponents/FormElements/otp/inputOtp'
import { AuthContext } from '../../../context/authContext'
import {
  sendMobileNumber,
  verifyOtpCode,
} from '../../../services/axois/request/auth/authRequests'
import { useGetFromLocalStorage } from '../../../Hooks/shared/shared'

const StepTwo: React.FC = () => {
  const navigate = useNavigate()

  const [otp, setOtp] = useState(
    Array(6)
      .fill('')
      .map(() => ({ id: uuidv4(), value: '' }))
  )

  const auth = useContext(AuthContext)
  const [userPhone] = useGetFromLocalStorage('userPhone')
  const inputsRef = useRef<HTMLInputElement[]>([])
  const [timeLeft, setTimeLeft] = useState(120)
  const [loading, setLoading] = useState(false)
  const [validOtp, setValidOtp] = useState<boolean>(true)
  const isOtpEmpty = otp.reduce((acc, item) => acc && item.value !== '', true)

  useEffect(() => {
    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', (event) => {
      window.history.pushState(null, '', window.location.href)
      event.preventDefault()
    })

    return () => {
      window.removeEventListener('popstate', () => {})
    }
  }, [])
  

  useEffect(() => {
    if (isOtpEmpty) {
      setValidOtp(true)
    }
  }, [otp, isOtpEmpty])

  useEffect(() => {
    const savedTimestamp = localStorage.getItem('auth_timestamp')
    const expirationTime = 120

    if (savedTimestamp) {
      const startTime = parseInt(savedTimestamp, 10)
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
      const remainingTime = Math.max(expirationTime - elapsedTime, 0)

      setTimeLeft(remainingTime)
    } else {
      if (sessionStorage.getItem('cameFromStepOne')) {
        setTimeLeft(0) 
      } else {
        localStorage.setItem('auth_timestamp', Date.now().toString())
        setTimeLeft(expirationTime) 
        sessionStorage.setItem('cameFromStepOne', 'true') 
      }
    }
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timeout = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timeout)
    } else {
      localStorage.removeItem('auth_timestamp')
    }
  }, [timeLeft])

  const getNewCode = async () => {
    setLoading(true)
    try {
      const response = await sendMobileNumber(String(userPhone))

      if (response.status === 200) {
        localStorage.setItem('auth_timestamp', Date.now().toString())
        setTimeLeft(120)
        console.log(response)
      }
    } catch (error) {
      console.error('خطا در دریافت کد:', error)
    } finally {
      setLoading(false)
    }

    auth.updatephone(String(userPhone))
  }

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeLeft % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }, [timeLeft])

  const handleVerifyOtp = async () => {
    const finalOtp = otp.map((item) => item.value).join('')

    try {
      const response = await verifyOtpCode(auth.phone, finalOtp)
      console.log(response)

      if (response.status === 200) {
        setValidOtp(true)
        navigate("/")
      } else {
        setValidOtp(false)
      }
    } catch (error) {
      console.log(error)
      setValidOtp(false)
      setOtp(
        Array(6)
          .fill('')
          .map(() => ({ id: uuidv4(), value: '' }))
      )
    }
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: string
  ) => {
    const currentIndex = otp.findIndex((item) => item.id === id)

    if (
      currentIndex !== -1 &&
      event.key === 'Backspace' &&
      otp[currentIndex].value === ''
    ) {
      event.preventDefault()

      inputsRef.current[currentIndex - 1]?.focus()
    }
  }

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

  const handleEditNumber = () => {
    navigate('/auth/StepOne')
    localStorage.removeItem('auth_timestamp')
    sessionStorage.removeItem('cameFromStepOne') 
  }

  return (
    <div className="center h-screen w-full bg-gray-ED">
      <div className="container center">
        <div className="flex flex-col gap-y-2 md:gap-y-4 text-center w-fit h-fit bg-white px-8 pb-10 pt-7.5 rounded-xl font-shabnam text-xs md:text-base text-Gray-35">
          <h4 className="font-shabnamBold text-sm md:text-2xl text-gray-21">
            کد تائید
          </h4>
          <span>کد ارسال‌شده به {auth.phone} را وارد کنید</span>
          <button onClick={handleEditNumber} className="text-gray-71  cursor-pointer ">
            ویرایش شماره موبایل
          </button>

          {/* OTP */}
          <div className="flex flex-row-reverse gap-x-2 justify-center">
            {otp.map((item, index) => (
              <InputOtp
                key={item.id}
                id={item.id}
                value={item.value}
                placeholder="-"
                className={`w-10 md:w-23 h-10 md:h-12 border ${
                  validOtp ? 'border-gray-400' : 'border-red-500'
                } rounded-lg text-center text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onChange={handleChange}
                onKeyDown={(event) => handleKeyDown(event, item.id)}
                inputRef={(el) => {
                  if (el) inputsRef.current[index] = el
                }}
              />
            ))}
          </div>

          {/* Code Time */}
          <div className="flex w-full items-center justify-center mt-7.5 gap-x-1">
            {timeLeft > 0 && (
              <div className="flex items-center gap-x-2 text-gray-500 font-shabnam text-xs lg:text-sm">
                <GoClock className="w-4 h-4" />
                <span className="text-primary">{formattedTime}</span>
                <span>تا</span>
              </div>
            )}
            <button
              onClick={getNewCode}
              className={`cursor-pointer text-gray-500 font-shabnam text-xs lg:text-sm ${
                loading || timeLeft > 0 ? ' !cursor-not-allowed opacity-50' : ''
              }`}
              disabled={loading || timeLeft > 0}
            >
              دریافت کد مجدد
            </button>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerifyOtp}
            disabled={!isOtpEmpty}
            className={`w-full h-10 md:h-14 transition-all duration-500 center py-3 rounded-lg font-shabnam text-white mt-7 ${
              validOtp
                ? 'bg-green-500 hover:bg-green-600 cursor-pointer'
                : 'bg-red-500 cursor-not-allowed'
            } ${!isOtpEmpty ? '!cursor-not-allowed opacity-50' : ''}`}
          >
            {validOtp ? 'تائید' : 'کد معتبر نیست دوباره تلاش کنید! '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
