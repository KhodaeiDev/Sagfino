import { RiSearch2Line } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'
import React, { useEffect, useState } from 'react'
import { searchAds } from '../../../../../../services/axois/request/public/publicRequest'
import { useQuery } from '@tanstack/react-query'

type ButtonType = 'rent' | 'sell'

const HeaderContent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>('rent')
  const [city, setCity] = useState<string>('')
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false) 

  const buttons: { label: string; value: ButtonType }[] = [
    { label: 'اجاره', value: 'rent' },
    { label: 'خرید', value: 'sell' },
  ]

  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCity(event.target.value.trim())
  }

  const validateCityName = (city: string): boolean => {
    const trimmedCity = city.trim()
    return (
      trimmedCity.length >= 2 &&
      /^[\u0600-\u06FF\s]+$/.test(trimmedCity) &&
      !/\d/.test(trimmedCity) &&
      !/[!@#$%^&*()_+={};:'",.<>?|]/.test(trimmedCity)
    )
  }

  const handleSearchClick = () => {
    if (validateCityName(city)) {
      setSearchTriggered(true)
    }
  }

  const filterParams = {
    tr_type: activeButton,
    city,
  }

  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ['Advertisements', city],
    queryFn: () => searchAds(filterParams),
    enabled: searchTriggered,
  })

  useEffect(() => {
    if (isFetched) {
      setSearchTriggered(false)
      setCity('')
    }
  }, [isFetched])
  console.log(isLoading)

  console.log(data)
  console.log(error)
  console.log(isFetched)

  useEffect(() => {
    if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
      window.scrollBy({ top: 300, behavior: 'smooth' })
    }
  }, [data])
  

  return (
    <div className="mt-10 md:mt-25 lg:mt-0 flex flex-col items-center text-white font-shabnamBold gap-0.5 xl:gap-5">
      <h2 className="text-base xl:text-54 lg:text-5xl md:text-3xl">
        سقفینو؛ سقفی برای همه
      </h2>

      <div className="w-53.5 h-14.5 md:h-auto md:w-xl lg:w-4xl">
        <h3 className="text-xs xl:text-32 lg:text-3xl md:text-2xl text-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString('سقفینو؛ سقفی برای همه')
                .pauseFor(2000)
                .start()
            }}
            options={{
              loop: true,
            }}
          />
        </h3>
      </div>

      <div className="bg-white mt-2 lg:mt-5 w-75 xl:w-3xl lg:w-2xl md:w-xl text-black rounded-2xl flex flex-col gap-1.5 py-1.5 md:py-3.5 px-5 md:px-7">
        {/* دکمه‌ها */}
        <div className="flex justify-center items-center gap-20 md:gap-50 lg:gap-70 font-shabnamMedium text-lg md:text-2xl md:mb-1">
          {buttons.map(({ label, value }) => (
            <span
              key={value}
              className={`cursor-pointer transition-all duration-500 ${
                activeButton === value ? ' text-primary' : 'text-gray-500'
              }`}
              onClick={() => setActiveButton(value)}
            >
              {label}
            </span>
          ))}
        </div>

        <div className={` w-full mt-2  tran `}>
          <div className="flex">
            <div
              className={` transition-all duration-500 h-[2.5px] w-1/2 ${
                activeButton === 'rent' ? '  bg-primary' : ' bg-Gray-35'
              }`}
            ></div>
            <div
              className={` transition-all duration-500 h-[2.5px] w-1/2 ${
                activeButton === 'sell' ? ' bg-primary' : 'bg-Gray-35'
              }`}
            ></div>
          </div>
        </div>

        <div className="w-full mb-0 md:m-1">
          <div className="flex items-center gap-1.5">
            <RiSearch2Line className="text-2xl md:text-3xl text-Gray-35" />
            <input
              className="border-none placeholder:text-xs sm:placeholder:text-base outline-0 w-full font-shabnam text-Gray-35 placeholder-Gray-35"
              type="text"
              placeholder="شهر مورد نظر را جست‌وجو کنید"
              onChange={(event) => searchInputChangeHandler(event)}
              value={city}
            />
            <button
              disabled={isLoading || !validateCityName(city)}
              onClick={handleSearchClick}
              className={`cursor-pointer border !font-shabnam border-gray-90 p-1.5 rounded-sm text-xs transition-all duration-500
    ${
      isLoading || !validateCityName(city)
        ? 'bg-gray-300 text-gray-500  !cursor-not-allowed'
        : 'hover:bg-primary hover:border-primary hover:text-white'
    }`}
            >
              {isLoading ? 'بارگیری' : 'جستجو'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
