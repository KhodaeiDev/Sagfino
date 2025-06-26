import React, { useState, useCallback, useEffect } from 'react'
import SelectBox from '../selectBox/selectBox'
import { RiSearch2Line } from 'react-icons/ri'
import { FormType } from '../../../../../Hooks/useformType'
import UseForm from '../../../../../Hooks/useForm'
import Input from '../input/input'

import {
  maxValidator,
  minValidator,
  persianValidator,
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
  const [city, setCity] = useState<string>('')

 
  const [searchParams, setSearchParams] = useSearchParams()
  const [propertyType, setPropertyType] = useState('مسکونی')
  const [rentPrice, setRentPrice] = useState(' مرتب‌سازی بر اساس قیمت')
  const [sellPrice, setSellPrice] = useState(' مرتب‌سازی بر اساس قیمت')
  const trType = localStorage.getItem('tr-type') || 'rent'
  const newParams = new URLSearchParams(searchParams)
  const [formType] = useState<FormType>('rent-search')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const [showError] = useState<boolean>(false)

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
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      setCity(value)
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleSearchClick = () => {
    const city = localStorage.getItem('searchFilter-value') || 'تهران'
    localStorage.setItem('currentPage-Rent-sell', '1')

    if (city) {
      newParams.set('city', city)
      localStorage.setItem('searchFilter-value', String(city))
      setSearchParams(newParams)
    }
  }

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  const handlePropertyTypeSelect = useCallback(
    (value: string) => {
      setPropertyType(value)
      newParams.set('pr_type', value === 'تجاری' ? 'commercial' : 'residential')
      setSearchParams(newParams)

      localStorage.setItem(
        'pr_type',
        value === 'تجاری' ? 'commercial' : 'residential'
      )
      localStorage.setItem('currentPage-Rent-sell', '1')
    },
    [setPropertyType]
  )

  const handlePriceSorting = (value: string) => {
    console.log('trType', trType)
    if (trType === 'rent') {
      setRentPrice(value)
      newParams.set('rent_price', value === 'بیشترین قیمت' ? 'asc' : 'desc')
    } else {
      setSellPrice(value)
      newParams.set('sell_price', value === 'بیشترین قیمت' ? 'asc' : 'desc')
    }
    setSearchParams(newParams)

    localStorage.setItem(
      trType === 'rent' ? 'rent_price' : 'sell_price',
      value === 'بیشترین قیمت' ? 'asc' : 'desc'
    )
    localStorage.setItem('currentPage-Rent-sell', '1')
  }

  useEffect(() => {
    const prType = localStorage.getItem('pr_type') || 'residential'
    const rentPrice = localStorage.getItem('rent_price')
    const sellPrice = localStorage.getItem('sell_price')
    const cityDefulut = newParams.get('city') || 'تهران'

    localStorage.setItem('searchFilter-value', String(cityDefulut) || 'تهران')

    setPropertyType(
      String(
        prType ? (prType === 'commercial' ? 'تجاری' : 'مسکونی') : 'نوع ملک'
      )
    )
    setRentPrice(
      String(
        rentPrice
          ? rentPrice === 'asc'
            ? 'بیشترین قیمت'
            : 'کمترین قیمت'
          : ' مرتب‌سازی بر اساس قیمت'
      )
    )
    setSellPrice(
      String(
        sellPrice
          ? sellPrice === 'asc'
            ? 'بیشترین قیمت'
            : 'کمترین قیمت'
          : ' مرتب‌سازی بر اساس قیمت'
      )
    )
  }, [])

  const selectBoxData = [
    {
      label: 'نوع ملک',
      items: [
        { id: 1, name: 'تجاری' },
        { id: 2, name: 'مسکونی' },
      ],
    },
    {
      label: ' مرتب‌سازی بر اساس قیمت',
      items: [
        { id: 1, name: 'بیشترین قیمت' },
        { id: 2, name: 'کمترین قیمت' },
      ],
    },
  ]

  return (
    <>
      <div className="container">
        {/* Desktop */}
        <div className=" flex xl:flex-row flex-col-reverse gap-4 items-start h-auto   mt-10  lg:mt-20 ">
          <div className="flex w-full  flex-wrap  lg:flex-nowrap  items-center  gap-y-8  gap-x-2">
            <SelectBox
              options={
                selectBoxData.find((data) => data.label === 'نوع ملک')?.items ||
                []
              }
              selectedOption={propertyType}
              onSelect={handlePropertyTypeSelect}
              width="w-full"
              responsiveWidth="w-full"
              responsiveHeight="h-12"
            />

            {trType === 'rent' ? (
              <SelectBox
                options={
                  selectBoxData.find(
                    (data) => data.label === ' مرتب‌سازی بر اساس قیمت'
                  )?.items || []
                }
                selectedOption={rentPrice}
                onSelect={handlePriceSorting}
                width="w-full"
                responsiveWidth="w-full"
                responsiveHeight="h-12"
              />
            ) : (
              <SelectBox
                options={
                  selectBoxData.find(
                    (data) => data.label === ' مرتب‌سازی بر اساس قیمت'
                  )?.items || []
                }
                selectedOption={sellPrice}
                onSelect={handlePriceSorting}
                width="w-full"
                responsiveWidth="w-full"
                responsiveHeight="h-12"
              />
            )}

            <div
              onClick={openModalFiltering}
              className=" w-full xl:w-95
               items-center gap-2 cursor-pointer text-gray-1000 inline-flex bg-transparent rounded-lg border px-4 border-blue-400 shadow-blue-400/50  h-12 "
            >
              فیلتر های بیشتر
            </div>
          </div>
          <div className=" relative w-full  h-20 flex flex-col  ">
            <Input
              id="searchFilter"
              type="text"
              shouldFormat={true}
              placeholder="شهر خود را جستوجو کنید"
              element="text"
              className=" border  relative border-gray-90 py-3 rounded-lg pr-10  placeholder:text-xs md:placeholder:text-base outline-0 w-full font-shabnam text-Gray-35 placeholder-Gray-35"
              validations={[
                requiredValidator(),
                minValidator(2),
                maxValidator(12),
                persianValidator(),
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
              disabled={!isInvalid}
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
