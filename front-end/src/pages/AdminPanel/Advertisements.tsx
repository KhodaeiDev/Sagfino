import React, { useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { useSearchParams } from 'react-router'

import { gettingAds, removeAds } from '../../services/axois/request/adminPanel'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import { ThreeDot } from 'react-loading-indicators'
import { changeStatusAds } from '../../services/axois/request/adminPanel'
import ToastNotification from '../../services/toastify/toastify'

type AdvertisementPanel = {
  id: number
  title: string
  description: string
  address: string
  area: number
  city: string
  floor: number
  number_of_floors: number
  elevator: number
  parking: number
  rent_price: number
  mortgage_price: number
  sell_price: number | null
  status: number
  property_type: 'residential' | 'commercial' | string
  transaction_type: 'rent' | 'sell' | 'mortgage' | string
  type_of_wc: string
  created_at: string
  updated_at: string
  images: {
    id?: number
    url?: string
  }[]
  user: {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    image: string
    created_at: string
    updated_at: string
  }
}
const Advertisements: React.FC = () => {
  useEffect(() => {
    document.title = 'پنل مدیریت - آگهی‌های ثبت‌شده'
  }, [])
  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage = localStorage.getItem('currentPage-adsAdminPanel') ?? '1'
  const [loadingChangeId, setLoadingChangeId] = useState<number | null>(null)
  const [loadingDeleteId, setLoadingDeleteId] = useState<number | null>(null)
  const queryClient = useQueryClient()

  const {
    isLoading,
    data: ads,
    error,
  } = useQuery({
    queryKey: ['ads', savedPage],
    queryFn: () => gettingAds({ page: savedPage }),
    staleTime: 60000,
  })

  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }
    gettingAds(filteredParams)
  }, [searchParams])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-adsAdminPanel', String(newPage))
    setSearchParams(newParams)
  }

  const mutation = useMutation({
    mutationFn: (idAd: number) => changeStatusAds(idAd),
    onMutate: (idAd) => {
      setLoadingChangeId(idAd)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ads', savedPage],
      })
      const filteredParams: { page: string } = {
        page: savedPage,
      }
      gettingAds(filteredParams)
      ToastNotification(
        'success',
        ' آگهی مورد نظر با  موفقیت تغییر وضعیت داده شد ',
        5000
      )
      setLoadingChangeId(null)
    },
    onError: (error) => {
      ToastNotification('error', 'خطا در تغییر وضعیت آگهی', 5000)
      console.error(error)
      setLoadingChangeId(null)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (idAd: number) => removeAds(idAd),
    onMutate: (idAd) => {
      setLoadingDeleteId(idAd)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ads', savedPage] })
      ToastNotification('success', 'آگهی با موفقیت حذف شد', 5000)
      setLoadingDeleteId(null)
    },
    onError: (error) => {
      ToastNotification('error', 'خطا در حذف آگهی', 5000)
      console.error(error)
      setLoadingDeleteId(null)
    },
  })

  const statusTextMap: Record<number, string> = {
    1: 'فعال',
    2: 'تایید شد',
    0: 'تایید نشد',
    4: 'در حال انتظار',
  }
  const getStatusClass = (status: number | string) => {
    const statusText =
      typeof status === 'number' ? statusTextMap[status] ?? '' : status

    switch (statusText) {
      case 'فعال':
        return 'bg-green-500 rounded-lg py-1 px-1 text-[10px] text-white'
      case 'تایید شد':
        return 'bg-blue-500 rounded-lg py-1 px-1 text-[10px] text-white'
      case 'تایید نشد':
        return 'bg-red-500 rounded-lg py-1 px-1 text-[10px] text-white'
      case 'در حال انتظار':
        return 'bg-yellow-500 rounded-lg py-1 px-1 text-[10px] text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  if (error) {
    return (
      <CMSLayout title="آگهی‌های ثبت‌ شده" panel={true}>
        <div className="text-center text-red-500">خطا در دریافت اطلاعات</div>
      </CMSLayout>
    )
  }

  return (
    <>
      <CMSLayout title="آگهی‌های ثبت‌ شده" panel={true}>
        {isLoading ? (
          <div className="w-full flex items-center justify-center h-50">
            <ThreeDot
              variant="bounce"
              color="#CB1B1B"
              size="large"
              text=""
              textColor=""
            />
          </div>
        ) : (
          <div className="p-2 lg:p-6 overflow-x-auto">
            <div className="w-full">
              <table className="table-auto border-collapse min-w-full border border-primary-tint-6 bg-white text-center shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-primary-tint-6 text-white text-xs sm:text-xs ">
                    <th className="border border-primary-tint-6 px-1 py-2">
                      شناسه آگهی
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      نام کاربر
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      عنوان
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      توضیحات
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      متراژ
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      قیمت اجاره
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      قیمت رهن
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      قیمت فروش
                    </th>
                    <th className="border border-primary-tint-6 px-1 py-2">
                      وضعیت
                    </th>

                    <th className="border border-primary-tint-6 px-1 py-2">
                      <div>حذف</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ads?.data?.data.map((item: AdvertisementPanel) => (
                    <tr key={item.id} className="hover:bg-gray-200 text-xs ">
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.id}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.user.firstName} {item.user.lastName}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.title}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.description.slice(0, 12)}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.area}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.rent_price
                          ? item.rent_price.toLocaleString('fa')
                          : item.rent_price === 0
                          ? 'توافقی'
                          : '___'}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.mortgage_price
                          ? item.mortgage_price.toLocaleString('fa')
                          : item.mortgage_price === 0
                          ? 'توافقی'
                          : '___'}
                      </td>
                      <td className="border border-primary-tint-6 px-1 py-2">
                        {item.sell_price
                          ? item.sell_price.toLocaleString('fa')
                          : item.sell_price === 0
                          ? 'توافقی'
                          : '___'}
                      </td>
                      <td
                        className={`border border-primary-tint-6 px-1  py-1  rounded `}
                      >
                        <div className={`${getStatusClass(item.status)}`}>
                          {statusTextMap[item.status] ?? 'نامشخص'}
                        </div>
                        <button
                          onClick={() => mutation.mutate(item.id)}
                          disabled={loadingChangeId === item.id}
                          className="mt-1 text-xs text-blue-600 hover:underline cursor-pointer disabled:cursor-not-allowed"
                        >
                          {loadingChangeId === item.id
                            ? '  پردازش'
                            : 'تغییر وضعیت'}
                        </button>
                      </td>

                      <td className="border border-primary-tint-6 px-1 py-2">
                        <button
                          onClick={() => deleteMutation.mutate(item.id)}
                          disabled={loadingDeleteId === item.id}
                          className="cursor-pointer  hover:bg-white hover:border hover:border-primary hover:text-black duration-300 transition-all bg-red-500 text-white px-2 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loadingDeleteId === item.id ? 'پردازش' : 'حذف'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" flex items-center justify-center gap-3 my-8 ">
              {ads?.data?.links?.length ? (
                <div className="flex items-center justify-center mt-10">
                  <Pagination
                    current_page={Number(
                      searchParams.get('page') ?? ads?.data.current_page
                    )}
                    links={ads?.data?.links ?? []}
                    onPageChange={handlePageChange}
                  />
                </div>
              ) : null}{' '}
            </div>{' '}
          </div>
        )}
      </CMSLayout>
    </>
  )
}

export default Advertisements
