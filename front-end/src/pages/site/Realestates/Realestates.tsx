import React, { useCallback, useEffect, useState } from 'react'
import EstateBox from '../../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
// import RealEstateModal from '../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import { RiSearch2Line } from 'react-icons/ri'
import { useMutation } from '@tanstack/react-query'
import { getAllRealEstates } from '../../../services/axois/request/RealEstate/RealEstate'
import { ThreeDot } from 'react-loading-indicators'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'
// import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
// import { usePaginationData } from '../../../Hooks/shared/shared'
import { useSearchParams } from 'react-router'
import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import Input from '../../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  persianValidator,
  requiredValidator,
} from '../../../validators/rules'
import { FormType } from '../../../Hooks/useformType'
import UseForm from '../../../Hooks/useForm'
// import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'

export type RealEstateType = {
  address: string
  agent_id: number
  city: string
  id: number
  image: string
  name: string
  rate: number | null
  rate_count: number
  rate_sum: number
  tagline: string
}

const Realestates: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const newParams = new URLSearchParams(searchParams)
  const savedPage = localStorage.getItem('currentPage-RealEstates') ?? '1'
  const [city, setCity] = useState<string>(
    localStorage.getItem('searchFilterRealestates') || 'تهران'
  )

  useEffect(() => {
    document.title = 'سقفینو-املاک و مستغلات'
  }, [])

  const fetchGetRealEstates = useCallback(
    async (filterParams: { page: string; city: string }) =>
      getAllRealEstates(filterParams),
    []
  )

  const [formType] = useState<FormType>('rent-search')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const handleSearchClick = () => {
    const city =
      localStorage.getItem('searchFilterRealestates-value') || 'تهران'
    localStorage.setItem('currentPage-Realestates', '1')

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

  const {
    mutate: getingAllRealEstates,
    data: allRealEstates,
    isPending: loadingSearch,
  } = useMutation({
    mutationFn: fetchGetRealEstates,
  })

  console.log(allRealEstates)

  useEffect(() => {
    newParams.set('page', savedPage)
    newParams.set('city', city)
    setSearchParams(newParams)

    const filteredParams: { page: string; city: string } = {
      page: savedPage,
      city,
    }
    console.log(filteredParams)
    getingAllRealEstates(filteredParams)
  }, [searchParams])

  useEffect(() => {
    if (allRealEstates?.data) {
      window.scrollTo({ top: 50, behavior: 'smooth' })
    }
  }, [allRealEstates])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage', String(newPage))
    setSearchParams(newParams)
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
  const isInvalid = validateCityName(city)
  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      setCity(value)
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  return (
    <>
      <div className="container">
        <div className=" mt-12 ">
          <SectionHeader title="املاک و مستغلات" center={false} />
        </div>
        <div className=" relative w-2/4  h-20 flex flex-col  ">
          <Input
            id="searchFilterRealestates"
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
            validationMessageSuccess={`نام شهر وارد شده معتبر است`}
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
        {loadingSearch ? (
          <div className="w-full flex items-center justify-center">
            <ThreeDot
              variant="bounce"
              color="#CB1B1B"
              size="large"
              text=""
              textColor=""
            />
          </div>
        ) : allRealEstates?.data.data.length ? (
          <div
            className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2.5 lg:gap-x-6 lg:gap-y-4 mt-10
           "
          >
            {allRealEstates?.data.data?.map((estateInfo: RealEstateType) => (
              <EstateBox key={estateInfo.id} estateInfo={estateInfo} />
            ))}
          </div>
        ) : (
          <NoProducts des="موردی یافت نشد!" isBtn={false} />
        )}
        <div className=" flex items-center justify-center gap-3 my-8 ">
          {allRealEstates?.data?.links?.length ? (
            <div className="flex items-center justify-center mt-10">
              <Pagination
                current_page={Number(
                  searchParams.get('page') ?? allRealEstates?.data.current_page
                )}
                links={allRealEstates?.data?.links ?? []}
                onPageChange={handlePageChange}
              />
            </div>
          ) : null}{' '}
        </div>{' '}
      </div>
      {/* {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )} */}
    </>
  )
}

export default Realestates
