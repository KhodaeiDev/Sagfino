import React, { useCallback, useEffect, useState } from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import { TiTick } from 'react-icons/ti'
import { CiLocationOn } from 'react-icons/ci'
import { TbHomeEco } from 'react-icons/tb'
// import PersonalInformation from '../../../components/shared/Cards/personalInformationBox/Personalinformation'
import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
// import SelectBox from '../../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import RealEstateModal from '../../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import { useParams, useSearchParams } from 'react-router'
import { getRealEstateInfo } from '../../../services/axois/request/RealEstate/RealEstate'
import { useQuery } from '@tanstack/react-query'
import { ThreeDot } from 'react-loading-indicators'
import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'
// import { Pagination } from 'swiper/modules'

const RealEstateDetails: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage =
    localStorage.getItem('currentPage-RealEstatesDetailes') ?? '1'

  const openModal = useCallback(() => {
    setIsModalVisible(true)
  }, [setIsModalVisible])

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [setIsModalVisible])

  // const handleSelect = useCallback((option: string) => {
  //   setSelectedOption(option)
  // }, [])
  const [isConsultantInfo, setIsConsultantInfo] = useState<boolean>(true)
  useEffect(() => {
    setIsConsultantInfo(false)
  }, [])

  useEffect(() => {
    document.title = ' سقفینو-جزئیات املاک'
  }, [])

  const { estateId } = useParams()
  const fetchProductInfo = useCallback(
    () => getRealEstateInfo(Number(estateId)),
    [estateId]
  )

  const { isLoading, data: realEstateInfosData } = useQuery({
    queryKey: ['productInfo', estateId],
    queryFn: fetchProductInfo,
    staleTime: 300000,
  })

  const realEstateInfos = realEstateInfosData?.data
  const userAgent = realEstateInfos?.agent

  console.log(realEstateInfos)
  console.log(userAgent)

  useEffect(() => {
    if (realEstateInfos?.ads?.data?.length) {
      newParams.set('page', savedPage)
    }
    setSearchParams(newParams)
  }, [searchParams])

  if (isLoading) {
    return (
      <>
        <div className=" flex items-center justify-center h-100 ">
          <ThreeDot
            variant="bounce"
            color="#CB1B1B"
            size="large"
            text=""
            textColor=""
          />
        </div>
      </>
    )
  }

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-RealEstatesDetailes', String(newPage))
    setSearchParams(newParams)
  }

  return (
    <>
      <NavBarMobail />
      {/* Header */}
      <div className=" relative RealEstateDetails  RealEstateDetailsMobile">
        {/* Navbar */}
        <NavBar />
        {/* logo */}
        <div className="container">
          <div className=" absolute  -bottom-10 lg:-bottom-35 center w-24 h-24  lg:w-xs lg:h-80 rounded-full  bg-gray-f9 ">
            <img
              className=" w-2/3  h-2/3  rounded-3xl  "
              src={`https://saghfino.abolfazlhp.ir/storage/${realEstateInfos?.image}`}
              alt="Logo"
              onError={(event) => {
                ;(event.target as HTMLImageElement).src = '/img/Photo Place.png'
              }}
            />
          </div>
        </div>
      </div>
      {/* EstateDetails  */}
      <div className="container mt-15 lg:mt-50  ">
        <div className="flex items-start  justify-between flex-col-reverse lg:flex-row  ">
          {/*  EstateDetails   right */}
          <div className=" w-full text-center lg:text-right flex flex-col justify-center lg:justify-between gap-y-5  mt-15 ">
            <div className=" flex items-center justify-center lg:justify-start  gap-x-2 ">
              <h2 className=" text-sm md:text-4xl font-shabnamBold text-Gray-35  ">
                {realEstateInfos?.name}
              </h2>
              <div className=" center justify-center lg:justify-between  w-4 h-4  md:w-10 md:h-10 rounded-full bg-blue-tick  ">
                <TiTick className=" text-white w-3 h-3 md:w-7.5 md:h-7.5  " />
              </div>
            </div>
            <span className=" font-shabnam  text-10 lg:text-lg  text-gray-1000 ">
              میزان رضایتمندی کاربران: {realEstateInfos?.rate_count} از{' '}
              {realEstateInfos?.rate_sum}
            </span>
            <h3 className=" font-shabnamBold text-Gray-35  text-xs md:text-3xl ">
              {realEstateInfos?.tagline}
            </h3>
            <div className=" text-gray-1000 flex items-center  justify-center lg:justify-start  gap-x-2 font-shabnamBold text-xs lg:text-2xl ">
              <CiLocationOn></CiLocationOn>
              تهران، نیاوران، سه راه یاسر
            </div>
            <div className=" text-gray-1000 flex items-center  justify-center lg:justify-start gap-x-2 font-shabnamBold text-xs lg:text-2xl ">
              <TbHomeEco></TbHomeEco>
              {userAgent?.ads_count
                ? `  آگهی فعال ${userAgent?.ads_count}`
                : 'آگهی فعالی برای این املاکی وجود ندارد'}
            </div>
            <div className=" flex items-center  justify-center lg:justify-between  ">
              <div
                onClick={openModal}
                className=" hover:bg-primary transition duration-300 hover:text-white border center w-46.5  justify-center lg:justify-between  h-12 border-primary  text-primary rounded-lg cursor-pointer "
              >
                تماس با ما
              </div>
            </div>
          </div>
          {/* EstateDetails left */}
          <div className=" w-full flex items-center justify-center  lg:justify-end  mt-5 lg:mt-0 ">
            {/* <PersonalInformation></PersonalInformation> */}
          </div>
        </div>
      </div>
      {/*  Tusi Real Estate Advertisement*/}
      <div className=" mt-15 lg:mt-30 ">
        <div className="container">
          <SectionHeader title="آگهی املاک توسی" center={false} />
          <span className=" text-primary ">
            {' '}
            {realEstateInfos?.ads?.data?.length
              ? ` یافت شد ${realEstateInfos?.ads?.data?.length}`
              : 'املاکی مورد نظر آگهی فعالی ندارد'}
          </span>
          {realEstateInfos?.ads?.data?.length ? (
            realEstateInfos?.ads?.data.map((productInfo: Advertisement) => (
              <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-4 mt-10 ">
                <ProductBox
                  key={productInfo?.id}
                  isLoading={isLoading}
                  productInfo={productInfo}
                />
              </div>
            ))
          ) : (
            <NoProducts des="آگهی برا این املاکی وجود ندارد" />
          )}
          <div className=" flex items-center justify-center mt-10 ">
            {/* صفحه‌بندی مخصوص داده‌های فیلتر شده */}
            {realEstateInfos?.ads?.data?.length ? (
              <div className="flex items-center justify-center mt-10">
                <Pagination
                  current_page={Number(
                    searchParams.get('page') ??
                      realEstateInfos?.ads?.current_page
                  )}
                  links={realEstateInfos?.ads?.links ?? []}
                  onPageChange={handlePageChange}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* footer */}

      {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          isConsultantInfo={isConsultantInfo}
          userInfos={userAgent}
        />
      )}
    </>
  )
}

export default RealEstateDetails
