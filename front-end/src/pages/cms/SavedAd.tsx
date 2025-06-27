import React, { useEffect, useCallback } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { GoTrash } from 'react-icons/go'
import ProductBox from '../../components/shared/Cards/productBox/productBox'
import { useMutation } from '@tanstack/react-query'
import { getUserAdSaved } from '../../services/axois/request/cms/cms'
import { ThreeDot } from 'react-loading-indicators'
import { v4 as uuidv4 } from 'uuid'
import { Advertisement } from '../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { deleteAllSaved } from '../../services/axois/request/cms/cms'
import ToastNotification from '../../services/toastify/toastify'
import NoProducts from '../../components/shared/UIComponents/Layout/NoProducts/NoProducts'
import { useSearchParams } from 'react-router'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'

const SavedAd: React.FC = () => {
  useEffect(() => {
    document.title = 'سقفینو- آگهی ذخیره شده '
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage = localStorage.getItem('currentPage-SavedAd') ?? '1'

  const fetchGetMyAds = useCallback(
    async (filterParams: { page: string }) => getUserAdSaved(filterParams),
    []
  )

  const {
    mutate: getingAllSavedAd,
    data: adSavedData,
    isPending: isLoading,
  } = useMutation({
    mutationFn: fetchGetMyAds,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteAllSaved,

    onSuccess: () => {
      getingAllSavedAd({ page: savedPage })
      ToastNotification(
        'success',
        'تمامی آگهی‌های ذخیره شده با موفقیت حذف شد',
        5000
      )
    },
    onError: (error: unknown) => {
      console.error('Error during deleteAllSaved mutation:', error)
      ToastNotification('error', 'خطا در حذف آگهی‌ها', 5000)
    },
  })

  const deleteAllSavedHandler = useCallback(() => {
    if (deleteMutation.isPending) return
    deleteMutation.mutate()
  }, [deleteMutation.isPending, deleteMutation.mutate])

  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }
    getingAllSavedAd(filteredParams)
  }, [searchParams])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-SavedAd', String(newPage))
    setSearchParams(newParams)

    setTimeout(() => {
      if (adSavedData?.data?.data) {
        window.scrollTo({ top: 50, behavior: 'smooth' })
      }
    }, 200)
  }
  console.log(adSavedData)

  const savedAds = adSavedData?.data?.data || []
  const hasSavedAds = savedAds.length > 0
  // console.log(hasSavedAds, savedAds)
  return (
    <>
      <CMSLayout title="آگهی ذخیره شده " panel={false}>
        {hasSavedAds && (
          <div className="w-full mt-4 flex items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base">
            <GoTrash
              onClick={deleteAllSavedHandler}
              className={`w-6 h-6 cursor-pointer ${
                deleteMutation.isPending ? 'opacity-50 pointer-events-none' : ''
              }`}
            />
            پاک کردن همه آگهی‌ها
          </div>
        )}

        {isLoading ? (
          <div className=" flex items-center justify-center h-50 ">
            <ThreeDot
              variant="bounce"
              color="#CB1B1B"
              size="large"
              textColor=""
            />
          </div>
        ) : (
          <div className="container">
            <>
              {hasSavedAds ? (
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-2 md:gap-4 mt-10">
                  {savedAds.map((productInfos: Advertisement) => (
                    <ProductBox
                      key={productInfos.id || uuidv4()}
                      isLoading={isLoading}
                      productInfo={productInfos}
                    />
                  ))}
                </div>
              ) : (
                <NoProducts
                  des="آگهی ذخیره شده ی از طرف شما وجود ندارد"
                  isBtn={true}
                />
              )}
            </>
          </div>
        )}
        <div className=" flex items-center justify-center mt-10 ">
          {adSavedData?.data?.data?.length ? (
            <div className="flex items-center justify-center mt-10">
              <Pagination
                current_page={Number(
                  searchParams.get('page') ?? adSavedData?.data?.current_page
                )}
                links={adSavedData?.data?.links ?? []}
                onPageChange={handlePageChange}
              />
            </div>
          ) : null}
        </div>
      </CMSLayout>
    </>
  )
}

export default SavedAd
