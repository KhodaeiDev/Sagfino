import React, { useCallback, useEffect, useState } from 'react'
import EstateBox from '../../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
// import RealEstateModal from '../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
// import { RiSearch2Line } from 'react-icons/ri'
import { useMutation } from '@tanstack/react-query'
import { getAllRealEstates } from '../../../services/axois/request/RealEstate/RealEstate'
import { ThreeDot } from 'react-loading-indicators'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'
// import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
// import { usePaginationData } from '../../../Hooks/shared/shared'
import { PaginationData } from '../Rent/Rent'
import { useSearchParams } from 'react-router'
import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
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
  const [realEstates, setRealEstates] = useState<RealEstateType[] | []>([])
  const [paginationDataState, setPaginationDataState] =
    useState<PaginationData | null>(null)
  const newParams = new URLSearchParams(searchParams)
  const savedPage = localStorage.getItem('currentPage-RealEstates') ?? '1'

  useEffect(() => {
    document.title = 'سقفینو-املاک و مستغلات'
  }, [])

  const fetchGetRealEstates = useCallback(
    async (filterParams: { page: string }) => getAllRealEstates(filterParams),
    []
  )

  const {
    mutate: getingAllRealEstates,
    data: allRealEstates,
    isPending,
  } = useMutation({
    onSuccess: () => {},
    mutationFn: fetchGetRealEstates,
  })

  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }

    getingAllRealEstates(filteredParams)
  }, [searchParams])

  useEffect(() => {
    if (!allRealEstates?.data?.data) return
    setRealEstates(allRealEstates?.data?.data)
  }, [allRealEstates])

  useEffect(() => {
    if (allRealEstates?.data) {
      window.scrollTo({ top: 50, behavior: 'smooth' })
      setPaginationDataState(allRealEstates?.data)
    }
  }, [allRealEstates])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage', String(newPage))
    setSearchParams(newParams)
  }
  console.log(allRealEstates)

  return (
    <>
      <div className="container">
        <div className=" mt-12 ">
          <SectionHeader title="املاک و مستغلات" center={false} />
        </div>
        {/* <div className=" my-10 ">
          <div className=" w-full lg:w-xl border border-gray-90 h-12 md:h-16 rounded-xl  flex items-center justify-between pl-4 pr-4.5 ">
            <div className=" flex items-center gap-3  text-xs  lg:text-base text-gray-1000">
              <RiSearch2Line className=" text-2xl  " />
              <input
                placeholder="شهر مورد نظر را اضافه کنید"
                className=" outline-0 bg-transparent font-shabnam  placeholder:text-gray-1000 "
                type="text"
              />
            </div>
            <div className=" flex items-center  ">
              <div className=" border  text-sm md:text-base border-gray-90 w-19 md:w-21.5 h-8 md:h-10 flex items-center justify-between p-1.5 md:p-2.5 rounded-lg">
                تهران
                <div className="  cursor-pointer w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border border-black center">
                  x
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {isPending ? (
          <div className="w-full flex items-center justify-center">
            <ThreeDot
              variant="bounce"
              color="#CB1B1B"
              size="large"
              text=""
              textColor=""
            />
          </div>
        ) : realEstates?.length ? (
          <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2.5 lg:gap-x-6 lg:gap-y-4 ">
            {realEstates?.map((estateInfo) => (
              <EstateBox key={estateInfo.id} estateInfo={estateInfo} />
            ))}
          </div>
        ) : (
          <NoProducts des="موردی یافت نشد!" isBtn={false} />
        )}
        <div className=" flex items-center justify-center gap-3 my-8 ">
          {paginationDataState?.links?.length ? (
            <div className="flex items-center justify-center mt-10">
              <Pagination
                current_page={Number(
                  searchParams.get('page') ?? paginationDataState?.current_page
                )}
                links={paginationDataState?.links ?? []}
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
