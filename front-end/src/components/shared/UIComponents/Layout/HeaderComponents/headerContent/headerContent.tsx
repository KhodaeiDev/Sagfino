import { RiSearch2Line } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'
import React, { useEffect, useState } from 'react'
import { searchAds } from '../../../../../../services/axois/request/Advertisements/AdvertisementsRequest'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ToastNotification from '../../../../../../services/toastify/toastify'
import { useSearch } from '../../../../../../context/HomePageSearch/useSearch'
import { useSearchParams } from 'react-router'

export type ButtonType = 'rent' | 'sell'
export interface Image {
  id: number
  ad_id: number
  path: string
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
  image?: string | null
  created_at: string
  updated_at: string
}

export interface Advertisement {
  id: number
  user_id: number
  title: string
  description: string
  address: string
  area: number
  floor: number
  number_of_floors: number
  rooms: number
  city: string
  type_of_wc: string
  elevator: boolean
  parking: boolean
  property_type: string
  mortgage_price: number | null
  rent_price: number | null
  sell_price: number | null
  transaction_type: string
  created_at: string
  updated_at: string
  images: Image[]
  similar_ads: Advertisement[]
  user: UserProfile
  is_saved: boolean
  saved_by_users_count: number
}

export interface AdvertisementResponse {
  data: Advertisement[]
}

const HeaderContent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>('rent')
  const [city, setCity] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)
  const [cachedData, setCachedData] = useState<AdvertisementResponse | null>(
    null
  )
  const [, setSearchParams] = useSearchParams()
  const { setSearchState } = useSearch()

  const buttons: { label: string; value: ButtonType }[] = [
    { label: 'اجاره', value: 'rent' },
    { label: 'خرید', value: 'sell' },
  ]

  const validateCityName = (city: string): boolean => {
    const trimmedCity = city.trim()
    return (
      trimmedCity.length >= 2 &&
      /^[\u0600-\u06FF\s]+$/.test(trimmedCity) &&
      !/\d/.test(trimmedCity) &&
      !/[!@#$%^&*()_+={};:'",.<>?|]/.test(trimmedCity)
    )
  }
  const isInvalid = validateCityName(city)

  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCity(event.target.value.trim())
    setShowError(true)
  }

  const blurHandler = () => {
    setShowError(false)
  }

  const queryClient = useQueryClient()
  const {
    mutate: triggerSearchAds,
    data: searchData,
    isPending,
  } = useMutation({
    mutationFn: async (filterParams: { tr_type: string; city: string }) =>
      searchAds(filterParams),
    onSuccess: (newData) => {
      queryClient.setQueryData<Advertisement[]>(
        ['Advertisements', `${city}-${activeButton}`],
        (oldData) => {
          const newAds = newData?.data ?? []

          if (!Array.isArray(oldData) || !Array.isArray(newAds)) {
            return newAds
          }

          return [...oldData, ...newAds]
        }
      )

      setSearchState((prev) => ({
        ...prev,
        result: newData.data.data,
        city,
        isLoading: false,
        transactionType: activeButton,
      }))

      setTimeout(() => {
        queryClient.removeQueries({
          queryKey: ['Advertisements', `${city}-${activeButton}`],
        })
      }, 300000)
    },
  })

  const checkURLAndFetchData = (): boolean => {
    const searchParams = new URLSearchParams(window.location.search)
    const cityFromUrl = searchParams.get('city')
    const transactionTypeFromUrl = searchParams.get('tr_type')

    if (cityFromUrl && transactionTypeFromUrl) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const cityFromUrl = searchParams.get('city')
    const transactionTypeFromUrl = searchParams.get('tr_type')

    if (cityFromUrl && transactionTypeFromUrl) {
      setSearchState((prev) => ({ ...prev, isLoading: true }))
      setCity(cityFromUrl)
      setActiveButton(transactionTypeFromUrl as ButtonType)

      triggerSearchAds({ tr_type: transactionTypeFromUrl, city: cityFromUrl })
    }
  }, [])

  const handleSearchClick = () => {
    setSearchState((prev) => ({ ...prev, isLoading: true }))

    const newParams = new URLSearchParams()
    newParams.set('city', city)
    newParams.set('tr_type', activeButton)

    setSearchParams(newParams)

    const cachedData =
      queryClient.getQueryData<AdvertisementResponse | null>([
        'Advertisements',
        `${city}-${activeButton}`,
      ]) || null
    const searchParams = new URLSearchParams(window.location.search)
    const cityFromUrl = searchParams.get('city')
    const transactionTypeFromUrl = searchParams.get('tr_type')

    setCity(String(cityFromUrl))
    setActiveButton(transactionTypeFromUrl as ButtonType)
    if (cachedData) {
      setCachedData(cachedData)
    } else if (checkURLAndFetchData()) {
      triggerSearchAds({ tr_type: activeButton, city: city })
    }
  }

  useEffect(() => {
    if (
      searchData?.data.data &&
      Array.isArray(searchData.data.data) &&
      searchData.data.data.length > 0
    ) {
      if (window.innerWidth > 768) {
        window.scrollBy({ top: 350, behavior: 'smooth' })
      } else {
        window.scrollBy({ top: 100, behavior: 'smooth' })
      }

      const storedData = {
        result: searchData.data.data,
        timestamp: Date.now(),
        city,
        transactionType: activeButton,
      }

      localStorage.setItem('searchData', JSON.stringify(storedData))
      setSearchState((prev) => ({
        ...prev,
        result: { data: searchData.data.data.slice(0, 8) },
        isLoading: false,
        transactionType: activeButton,
      }))
    } else if (searchData?.data.data.length === 0) {
      ToastNotification(
        'error',
        'هیچ آگهی‌ای برای این شهر ثبت نشده است. می‌توانید شهر دیگری را جستجو کنید یا نوع معامله (اجاره/خرید) را تغییر دهید.',
        5000
      )
      setSearchState((prev) => ({
        ...prev,
        result: null,
        isLoading: false,
        city,
        transactionType: activeButton,
      }))
      setShowError(false)
    }
  }, [searchData])

  useEffect(() => {
    if (!cachedData || !cachedData.data || !Array.isArray(cachedData.data))
      return

    if (cachedData.data.length === 0) {
      ToastNotification(
        'error',
        'هیچ آگهی‌ای برای این شهر ثبت نشده است. لطفاً شهر دیگری را جستجو کنید یا نوع معامله را تغییر دهید.',
        5000
      )
      setShowError(false)
      setSearchState((prev) => ({
        ...prev,
        result: null,
        isLoading: false,
        city,
        transactionType: activeButton,
      }))
    } else {
      if (window.innerWidth > 640) {
        if (window.innerWidth > 768) {
          window.scrollBy({ top: 600, behavior: 'smooth' })
        } else {
          window.scrollBy({ top: 100, behavior: 'smooth' })
        }
      }

      setSearchState((prev) => ({
        ...prev,
        result: { data: cachedData.data.slice(0, 8) },
        isLoading: false,
        city,
        transactionType: activeButton,
      }))
    }
  }, [cachedData])

  useEffect(() => {
    const storedData = localStorage.getItem('searchData')

    if (storedData) {
      const parsedData = JSON.parse(storedData)
      const currentTime = Date.now()

      if (currentTime - parsedData.timestamp < 300000) {
        setSearchState((prev) => ({
          ...prev,
          result: { data: parsedData.result.slice(0, 8) },
          isLoading: false,
          city: parsedData.city,
          transactionType: parsedData.transactionType,
        }))
      } else {
        localStorage.removeItem('searchData')
      }
    }
  }, [])

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

      <div className="bg-white mt-2 lg:mt-5 w-75 xl:w-3xl lg:w-2xl md:w-xl text-black rounded-2xl flex flex-col gap-1.5 py-1.5 md:py-3.5 px-3 md:px-5">
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
          <div className="flex items-center  gap-1.5">
            <RiSearch2Line className="text-2xl md:text-3xl text-Gray-35" />
            <div className=" w-full flex flex-col ">
              <input
                className="border-none  placeholder:text-xs md:placeholder:text-base outline-0 w-full font-shabnam text-Gray-35 placeholder-Gray-35"
                type="text"
                placeholder="شهر مورد نظر را جست‌وجو کنید"
                onChange={(event) => searchInputChangeHandler(event)}
                value={city}
                onBlur={blurHandler}
              />
            </div>
            <button
              disabled={isPending || !isInvalid}
              onClick={handleSearchClick}
              className={`cursor-pointer border p-1 !font-shabnam border-gray-90   min-w-fit  rounded-sm text-[8px] md:text-[10px] transition-all duration-500
    ${
      isPending || !isInvalid
        ? 'bg-gray-300 text-gray-500  !cursor-not-allowed'
        : 'hover:bg-primary hover:border-primary hover:text-white'
    }`}
            >
              {!isInvalid
                ? 'نام شهر را وارد کنید'
                : isPending
                ? 'درحال بارگذاری'
                : 'جستجو'}
            </button>
          </div>
          {!isInvalid && showError && (
            <p className="text-red-500 text-xs">نام شهر وارد شده معتبر نیست.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
