import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import CMSLayout from '../../components/cms/CMSLayout'
import MyChartComponent from './charts'
import { gettingCountsOfAdsUsers } from '../../services/axois/request/adminPanel'
import { AxiosResponse } from 'axios'
import { ThreeDot } from 'react-loading-indicators'

interface CountsResponse {
  users: number
  ads: number
}

const UserAdsReport: React.FC = () => {
  useEffect(() => {
    document.title = 'پنل مدیریت - آگهی‌های ثبت‌شده'
  }, [])

  const { data, isLoading, error } = useQuery<AxiosResponse<CountsResponse>>({
    queryKey: ['adsUsersCounts'],
    queryFn: gettingCountsOfAdsUsers,
  })

  if (isLoading) {
    return (
      <CMSLayout title="نمودار آگهی‌ها و کاربران" panel={true}>
        <div className="w-full flex items-center justify-center h-50">
          <ThreeDot
            variant="bounce"
            color="#CB1B1B"
            size="large"
            text=""
            textColor=""
          />
        </div>
      </CMSLayout>
    )
  }

  if (error || !data?.data) {
    return (
      <CMSLayout title="نمودار آگهی‌ها و کاربران" panel={true}>
        <div className="text-center text-red-500">خطا در دریافت اطلاعات</div>
      </CMSLayout>
    )
  }

  const { users, ads } = data.data

  return (
    <CMSLayout
      title="            تعداد کاربران و آگهی‌های ثبت‌شده
"
      panel={true}
    >
      <div className="p-4">
        <div className="mb-6 text-right">
          <h2 className="text-xl font-semibold text-primary">گزارش آماری</h2>
        </div>
        <MyChartComponent users={users} ads={ads} />
      </div>
    </CMSLayout>
  )
}

export default UserAdsReport
