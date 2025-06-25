import React, { useEffect, useCallback } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { GoTrash } from 'react-icons/go'
import ProductBox from '../../components/shared/Cards/productBox/productBox'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query' 
import { getUserAdSaved } from '../../services/axois/request/cms/cms'
import { ThreeDot } from 'react-loading-indicators'
import { v4 as uuidv4 } from 'uuid'
import { Advertisement } from '../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { deleteAllSaved } from '../../services/axois/request/cms/cms'
import ToastNotification from '../../services/toastify/toastify'
import NoProducts from '../../components/shared/UIComponents/Layout/NoProducts/NoProducts'

const SavedAd: React.FC = () => {
  useEffect(() => {
    document.title = 'سقفینو- آگهی ذخیره شده '
  }, [])

  const queryClient = useQueryClient()

  const {
    isLoading,
    data: adSavedData,
    refetch,
  } = useQuery({
    queryKey: ['adSaved'],
    queryFn: () => getUserAdSaved(),
    staleTime: 60000,
  })

  const savedAds = adSavedData?.data?.[0] || []
  const hasSavedAds = savedAds.length > 0

  const deleteMutation = useMutation({
    mutationFn: deleteAllSaved,
    
    onSuccess: () => {
      refetch()
      ToastNotification(
        'success',
        'تمامی آگهی‌های ذخیره شده با موفقیت حذف شد',
        5000
      )
      queryClient.removeQueries({ queryKey: ['adSaved'] })
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
      </CMSLayout>
    </>
  )
}

export default SavedAd
