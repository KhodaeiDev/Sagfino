import React, { useState, useCallback, useEffect } from 'react'
import SelectBox from '../selectBox/selectBox'
import { RiSearch2Line } from 'react-icons/ri'
import { TbFilterSearch } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import { FormType } from '../../../../../Hooks/useformType'
import UseForm from '../../../../../Hooks/useForm'
import Input from '../input/input'

import {
  maxValidator,
  minValidator,
  onlyNumberValidator,
  requiredValidator,
} from '../../../../../validators/rules'
import { useSearchParams } from 'react-router'

type SortingProps = {
  openModalFiltering: () => void
  loadingSearch: boolean
}

const Sorting: React.FC<SortingProps> = ({
  openModalFiltering,
  loadingSearch,
}) => {
  const [options, setOptions] = useState<string[]>([
    ' منطقه ',
    'نوع ملک',
    'قیمت',
    '  متراژ ',
  ])
  const [city, setCity] = useState<string>('')

  const [formType] = useState<FormType>('rent-search')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const cityLocalStorage = localStorage.getItem('cityRent')
  useEffect(() => {
    if (cityLocalStorage) {
      setCity(String(cityLocalStorage))
    }
  }, [])
  const [showError] = useState<boolean>(false)

  const handleSelect = useCallback((index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = value
      return newOptions
    })
  }, [])

  const selectBoxData = [
    {
      label: 'منطقه',
      items: ['منطقه 1', 'منطقه 2', 'منطقه 22', 'منطقه 16', 'منطقه 6'],
    },
    {
      label: 'نوع',
      items: ['مسکونی', 'تجاری', 'بازرگانی'],
    },
    {
      label: 'قیمت ',
      items: ['ارزان‌ترین', 'گران‌ترین'],
    },
    {
      label: 'متراژ',
      items: ['بالای 40', 'بالای 60', 'بالای 80', 'بالای 100'],
    },
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
  const handleInputChange = useCallback(
    (
      inputID: string,
      value: string = String(localStorage.getItem('rent-search-value')),
      isValid: boolean
    ) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      setCity(value)
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleSearchClick = () => {
    const city = localStorage.getItem('rent-search-value')
    console.log('city', city)

    if (city) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('city', city)
      localStorage.setItem('rent-search-value', String(city))
      setSearchParams(newParams)
    }
  }

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  return (
    <>
      <div className="container">
        {/* Desktop */}
        <div className="hidden md:flex xl:flex-row md:flex-col-reverse gap-4 items-start   mt-22">
          <div className="flex items-center justify-start gap-2">
            {selectBoxData.map((data, index) => (
              <SelectBox
                key={index}
                selectedOption={options[index]}
                onSelect={(option) => handleSelect(index, option)}
                width="w-27"
                responsiveWidth="w-27"
                responsiveHeight="h-12"
              >
                {data.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </SelectBox>
            ))}
            <div
              onClick={openModalFiltering}
              className="flex items-center gap-2 cursor-pointer text-gray-1000 border-blue-400 shadow-blue-400/50 shadow-lg p-3 border w-41.5 h-12 rounded-lg"
            >
              <span>فیلتر های بیشتر</span>
            </div>
          </div>
          <div className=" relative w-full  flex flex-col  h-[82px] ">
            {/* <input
                  className="border-none  placeholder:text-xs md:placeholder:text-base outline-0 w-full font-shabnam text-Gray-35 placeholder-Gray-35"
                  type="text"
                  placeholder="شهر مورد نظر را جست‌وجو کنید"
                  onChange={(event) => searchInputChangeHandler(event)}
                  value={String(city)}
                  onBlur={blurHandler}
                /> */}
            <Input
              id="rent-search"
              type="text"
              shouldFormat={true}
              placeholder="شهر خود را جستوجو کنید"
              element="text"
              className=" border  relative border-gray-90 py-3 rounded-lg pr-10  placeholder:text-xs md:placeholder:text-base outline-0 w-full font-shabnam text-Gray-35 placeholder-Gray-35"
              validations={[
                requiredValidator(),
                minValidator(2),
                maxValidator(12),
              ]}
              onInputHandler={handleInputChange}
              onFocus={handleFocus}
              errorMessage={formState.inputs.SalePrice?.errorMessage}
              isFocused={isFocused}
              validationMessageSuccess={` نام شهر وارد شده معتبر است`}
              validationMessageError={` نام شهر وارد شده معتبر نیست`}
              icon={
                <RiSearch2Line className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2  text-Gray-35 " />
              }
            />
            <button
              onClick={handleSearchClick}
              className={`absolute  bottom-1/2 left-3 cursor-pointer border p-1 !font-shabnam border-gray-90   min-w-fit  rounded-sm text-[8px] md:text-[10px] transition-all duration-500  ${
                loadingSearch || !isInvalid
                  ? 'bg-gray-300 text-gray-500  !cursor-not-allowed'
                  : 'hover:bg-primary hover:border-primary hover:text-white'
              } `}
            >
              {!isInvalid
                ? 'نام شهر را وارد کنید'
                : loadingSearch
                ? 'درحال بارگذاری'
                : 'جستجو'}
            </button>
          </div>
          {/* <div className="flex items-center">
            {cityLocalStorage ? (
              <div className="border border-gray-90 flex items-center justify-between gap-x-1 p-2 rounded-lg">
                {cityLocalStorage}
                <div className="cursor-pointer w-5 h-5 rounded-full border border-black center">
                  <MdClose size={12} color="black" />
                </div>
              </div>
            ) : (
              ''
            )}
          </div> */}
        </div>
        {!isInvalid && showError && (
          <p className="text-red-500 text-xs">نام شهر وارد شده معتبر نیست.</p>
        )}
      </div>
    </>
  )
}

export default Sorting
