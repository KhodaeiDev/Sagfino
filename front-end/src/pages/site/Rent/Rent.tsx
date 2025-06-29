import Sorting from '../../../components/shared/UIComponents/FormElements/sorting/sorting'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import SelectBox from '../../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { useCallback, useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators'
import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import FilteringModal from '../../../components/shared/Modals/filteringModal/filteringModal'
import { useMutation } from '@tanstack/react-query'
import { searchAds } from '../../../services/axois/request/Advertisements/AdvertisementsRequest'
import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { useSearchParams } from 'react-router'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'
import { v4 as uuidv4 } from 'uuid'

export type PaginationData = {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: { url: string | null; label: string; active: boolean }[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

const Rent: React.FC = () => {
  const [dealType, setDealType] = useState('نوع معامله')
  const [isopenModalFiltering, setOpenModalFiltering] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProductsState, setFilteredProducts] = useState<
    Advertisement[] | []
  >([])

  const [paginationDataState, setPaginationDataState] =
    useState<PaginationData | null>(null)

  const [, setFilteredParams] = useState<{
    city: string
    tr_type: string
    pr_type?: string
    rent_price?: string
    sell_price?: string
    typeOfWc?: string
    hasParking?: string
    hasElevator?: string
    page: string
  } | null>(null)

  const newParams = new URLSearchParams(searchParams)

  const openModalFiltering = useCallback(() => {
    setOpenModalFiltering(true)
  }, [setOpenModalFiltering])

  const closeModalFiltering = useCallback(() => {
    setOpenModalFiltering(false)
  }, [setOpenModalFiltering])

  useEffect(() => {
    document.title = 'سقفینو - اجاره'
  }, [])

  const fetchSearchAds = useCallback(
    async (filterParams: {
      city: string
      tr_type: string
      pr_type: string
      page: string
      rent_price?: string
      sell_price?: string
      typeOfWc?: string
      hasParking?: string
      hasElevator?: string
    }) => searchAds(filterParams),
    []
  )

  const {
    mutate: adFiltering,
    data: filteredProducts,
    isPending,
  } = useMutation({
    mutationKey: ['products', searchParams.get('page') ?? '1'],
    mutationFn: fetchSearchAds,
  })

  useEffect(() => {
    if (filteredProducts?.data?.data) {
      setFilteredProducts(filteredProducts.data.data)
    }
  }, [filteredProducts])

  console.log()

  useEffect(() => {
    const isSearchMoreFilter = localStorage.getItem('isSearchFilter') === 'true'

    const hasParking = isSearchMoreFilter
      ? localStorage.getItem('hasParking') === 'دارد'
        ? 1
        : localStorage.getItem('hasParking') === 'ندارد'
        ? 0
        : null
      : null

    const hasElevator = isSearchMoreFilter
      ? localStorage.getItem('hasElevator') === 'دارد'
        ? 1
        : localStorage.getItem('hasElevator') === 'ندارد'
        ? 0
        : null
      : null

    const storedParams: Partial<{
      city: string
      tr_type: string
      rent_price: string | null
      page: string
      pr_type: string | null
      sell_price?: string | null
      typeOfWc?: string | null
      hasParking?: number | null
      hasElevator?: number | null
    }> = {
      city:
        localStorage.getItem('searchFilter-value')?.trim() === 'همه'
          ? 'all'
          : localStorage.getItem('searchFilter-value') || 'تهران',
      tr_type: localStorage.getItem('tr-type') || 'rent',
      page: localStorage.getItem('currentPage-Rent-sell') ?? '1',
      pr_type: localStorage.getItem('pr_type') || 'residential',
      rent_price: localStorage.getItem('rent_price'),
      sell_price: localStorage.getItem('sell_price'),
      typeOfWc:
        localStorage.getItem('typeOfWc') === 'فرنگی'
          ? 'farangi'
          : localStorage.getItem('typeOfWc') === 'هردو'
          ? 'both'
          : localStorage.getItem('typeOfWc') === 'ایرانی'
          ? 'wc'
          : '',
      hasParking,
      hasElevator,
    }
    console.log('storedParams', storedParams)

    const filteredParams = Object.fromEntries(
      Object.entries(storedParams).filter(
        ([value]) => value !== null && value !== ''
      )
    ) as {
      city: string
      tr_type: string
      page: string
      pr_type: string
      rent_price?: string
      sell_price?: string
      typeOfWc?: string
      hasParking?: string
      hasElevator?: string
    }

    Object.entries(filteredParams).forEach(([key, value]) => {
      console.log(key, value)

      if (value !== null && value !== '') {
        newParams.set(key, String(value))
        setSearchParams(newParams)
      } else {
        newParams.delete(key)
        setSearchParams(newParams)
      }
    })

    setFilteredParams(filteredParams)

    setDealType(filteredParams.tr_type === 'sell' ? 'فروش' : 'اجاره')
    setSearchParams(newParams)
    adFiltering(filteredParams)
  }, [location.search])

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
      label: 'نوع معامله',
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
      localStorage.setItem('currentPage-Rent-sell', '1')
    },
    [setDealType]
  )

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-Rent-sell', String(newPage))
    setSearchParams(newParams)
  }

  useEffect(() => {
    if (filteredProducts?.data) {
      window.scrollTo({ top: 50, behavior: 'smooth' })
      setPaginationDataState(filteredProducts?.data)
    }
  }, [filteredProducts])

  return (
    <>
      <div className=" mb-10">
        <Sorting
          loadingSearch={loadingSearch}
          openModalFiltering={openModalFiltering}
        />
        <div className="container">
          {/* sorting */}
          <div className="md:flex gap-2 my-6 items-center justify-between">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-2xl font-shabnamBold">
                {' '}
                املاک{' '}
                {localStorage.getItem('tr-type') === 'sell'
                  ? 'فروشی'
                  : 'اجاره ای'}
              </h3>
              <span className="sm:h-9 font-shabnam text-primary">
                {isPending
                  ? 'در حال بارگذاری'
                  : filteredProductsState.length > 0
                  ? `${filteredProductsState.length}  موردی یافت شد `
                  : 'موردی یافت نشد'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <SelectBox
                options={
                  selectBoxData.find(
                    (data) => data.label === 'نوع معامله' || 'اجاره'
                  )?.items || []
                }
                selectedOption={dealType}
                onSelect={handleDealTypeSelect}
                width="w-full"
                responsiveWidth=" w-50"
                responsiveHeight="h-12"
              />
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
          ) : filteredProductsState.length > 0 ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
                {filteredProductsState.map((productInfos) => (
                  <ProductBox
                    key={uuidv4()}
                    isLoading={loading}
                    productInfo={productInfos}
                  />
                ))}
              </div>

              {/* صفحه‌بندی مخصوص داده‌های فیلتر شده */}
              {paginationDataState?.links?.length ? (
                <div className="flex items-center justify-center mt-10">
                  <Pagination
                    current_page={Number(
                      searchParams.get('page') ??
                        paginationDataState?.current_page
                    )}
                    links={paginationDataState?.links ?? []}
                    onPageChange={handlePageChange}
                  />
                </div>
              ) : null}
            </>
          ) : (
            <NoProducts
              des="موردی یافت نشد! لطفاً فیلترها را تغییر دهید."
              isBtn={false}
            />
          )}
        </div>
      </div>

      {isopenModalFiltering && (
        <FilteringModal closeModalFiltering={closeModalFiltering} />
      )}
    </>
  )
}

export default Rent
