import Sorting from '../../../components/shared/UIComponents/FormElements/sorting/sorting'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import SelectBox from '../../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { useCallback, useEffect, useState } from 'react'
import { TbFilterSearch } from 'react-icons/tb'

import BoxEstate from '../../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
import RealEstateModal from '../../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import { ThreeDot } from 'react-loading-indicators'

import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import FilteringModal from '../../../components/shared/Modals/filteringModal/filteringModal'
import { useMediaQuery } from 'react-responsive'

import { FilteringModalMobail } from '../../../components/shared/Modals/filteringModal/filteringModal'
import { useMutation } from '@tanstack/react-query'
import { searchAds } from '../../../services/axois/request/Advertisements/AdvertisementsRequest'
import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { useLocation, useSearchParams } from 'react-router'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'

const Rent: React.FC = () => {
  const [dealType, setDealType] = useState('نوع معامله')
  const [isopenModalFiltering, setOpenModalFiltering] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const newParams = new URLSearchParams(String(location.search))
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // const handleSelect = (option: string) => {
  //   setSelectedOption(option)
  // }

  // const openModal = useCallback(() => {
  //   setIsModalVisible(true)
  // }, [setIsModalVisible])

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [setIsModalVisible])

  const openModalFiltering = useCallback(() => {
    setOpenModalFiltering(true)
  }, [setOpenModalFiltering])

  const closeModalFiltering = useCallback(() => {
    setOpenModalFiltering(false)
  }, [setOpenModalFiltering])

  document.title = 'سقفینو - اجاره'

  const fetchSearchAds = useCallback(
    async (filterParams: { city: string; tr_type: string; pr_type: string }) =>
      searchAds(filterParams),
    []
  )

  const {
    mutate: adFiltering,
    data: filteredProducts,
    isPending,
  } = useMutation({
    onSuccess: () => {},
    mutationFn: fetchSearchAds,
  })
  console.log(filteredProducts)
  useEffect(() => {
    const city = localStorage.getItem('rent-search-value') || 'تهران'
    const trType = localStorage.getItem('tr-type') || 'rent'
    const prType = localStorage.getItem('pr_type')

    newParams.set('city', String(city))
    newParams.set('tr_type', String(trType) || 'rent')
    newParams.set('pr_type', String(prType))

    console.log('🔍 درخواست ارسال‌شده:', newParams.toString())

    setDealType(String(trType === 'sell' ? 'فروش' : 'اجاره'))

    setSearchParams(newParams)
    adFiltering({
      city: String(city),
      tr_type: String(trType),
      pr_type: String(prType),
    })
    console.log('درخواست داده شد')
  }, [location.search, searchParams])

  useEffect(() => {
    if (isPending) {
      setLoading(true)
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [isPending])

  const loadingSearch = isPending

  const selectBoxData = [
    {
      label: ' نوع معامله ',
      items: [
        { id: 1, name: 'فروش' },
        { id: 2, name: 'اجاره' },
      ],
    },
  ]

  const handleDealTypeSelect = useCallback(
    (value: string) => {
      setDealType(value)
      newParams.set(
        'tr_type',
        String(value === 'فروش' ? 'sell' : 'rent') || 'rent'
      )
      setSearchParams(newParams)
      localStorage.setItem('tr-type', value === 'فروش' ? 'sell' : 'rent')
    },
    [setDealType]
  )

  return (
    <>
      <div>
        <Sorting
          loadingSearch={loadingSearch}
          openModalFiltering={openModalFiltering}
        />
        <div className="container">
          {/* sorting */}
          <div className="   md:flex  gap-2 my-6 items-center justify-between">
            <div className=" flex flex-col gap-y-3">
              <h3 className=" text-2xl font-shabnamBold">
                {' '}
                املاک{' '}
                {localStorage.getItem('tr-type') === 'sell'
                  ? 'فروشی'
                  : 'اجاره ای'}
              </h3>
              <span className="  sm:h-9 font-shabnam text-primary">
                {isPending
                  ? ' در حال بارگذاری'
                  : `${
                      !filteredProducts?.data?.data.length
                        ? 'موردی یافت نشد'
                        : `${filteredProducts?.data?.data.length} مورد یافت شد`
                    }   `}
              </span>
            </div>
            <div className=" flex items-center justify-between ">
              <SelectBox
                options={
                  selectBoxData.find((data) => data.label === ' نوع معامله ')
                    ?.items || []
                }
                selectedOption={dealType}
                onSelect={handleDealTypeSelect}
                width="w-full"
                responsiveWidth=" w-50"
                responsiveHeight="h-12"
              />
              <div
                onClick={openModalFiltering}
                className="  flex md:hidden  items-center gap-1 cursor-pointer text-gray-1000 border-blue-400 shadow-blue-400/50 shadow-lg p-3 border w-41.5  md:h-12 h-8 rounded-lg"
              >
                <TbFilterSearch className=" text-xl md:text-2xl" />
                <span>فیلتر های بیشتر</span>
              </div>
            </div>
          </div>
          {/* products */}
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
          ) : filteredProducts?.data.data?.length ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
              {filteredProducts.data.data.map((productInfos: Advertisement) => (
                <ProductBox
                  key={productInfos?.id}
                  isLoading={loading}
                  productInfo={productInfos}
                />
              ))}
            </div>
          ) : (
            <NoProducts
              des="شما می‌توانید در شهرهای مختلف جستجو کنید و نوع معامله را تغییر دهید."
              isBtn={false}
            />
          )}
        </div>
      </div>
      <div className="container mt-5 mb-25.5">
        <div className=" flex items-center justify-center gap-3 ">
          <Pagination />
        </div>
      </div>
      {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )}
      {isopenModalFiltering && (
        <>
          {isMobile ? (
            <FilteringModalMobail closeModalFiltering={closeModalFiltering} />
          ) : (
            <FilteringModal closeModalFiltering={closeModalFiltering} />
          )}
        </>
      )}
    </>
  )
}

export default Rent
