import React, { useCallback, useEffect } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { useSearchParams } from 'react-router'
import { gettingUsers } from '../../services/axois/request/adminPanel'
import { useQuery } from '@tanstack/react-query'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import { ThreeDot } from 'react-loading-indicators'

const Users: React.FC = () => {
  useEffect(() => {
    document.title = 'سقفینو- پنل مدیریت-کاربران'
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage =
    localStorage.getItem('currentPage-RealEstatesDetailes') ?? '1'

  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ['Usres'],
    queryFn: () => gettingUsers({ page: savedPage }),
    staleTime: 300000,
  })

  const fetchProductInfo = useCallback(
    (filterParams: { page: string }) => gettingUsers(filterParams),
    [searchParams]
  )

  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }
    fetchProductInfo(filteredParams)
  }, [searchParams])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage', String(newPage))
    setSearchParams(newParams)
  }
  console.log(users)

  interface User {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    image: string
    created_at: string
    updated_at: string
    role: string
  }

  if (error) {
    return (
      <CMSLayout title="نمودار آگهی‌ها و کاربران" panel={true}>
        <div className="text-center text-red-500">خطا در دریافت اطلاعات</div>
      </CMSLayout>
    )
  }

  return (
    <>
      <CMSLayout title=" کاربران" panel={true}>
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
                  <tr className="bg-primary-tint-6 text-white text-xs sm:text-sm md:text-base">
                    <th className="border border-primary-tint-6 px-4 py-2">
                      شناسه کاربر
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      نام
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      نام خانوادگی
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      نوع فعالیت
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      شماره تلفن
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      تصویر
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      تاریخ عضویت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.data.data?.map((item: User) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-200 text-xs sm:text-sm md:text-base"
                    >
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.id}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.firstName}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.lastName}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.role === 'user'
                          ? 'کاربر'
                          : item.role === 'admin'
                          ? 'ادمین'
                          : item.role === 'real_estate_agent'
                          ? 'املاکی'
                          : ''}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.phoneNumber}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            className="w-full h-full object-cover aspect-square rounded-full"
                            src={`https://saghfino.abolfazlhp.ir/storage/${item?.image}`}
                            alt="تصویر"
                            onError={(event) => {
                              ;(event.target as HTMLImageElement).src =
                                '/img/Photo Place.png'
                            }}
                          />
                        </div>
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" flex items-center justify-center gap-3 my-8 ">
              {users?.data?.links?.length ? (
                <div className="flex items-center justify-center mt-10">
                  <Pagination
                    current_page={Number(
                      searchParams.get('page') ?? users?.data.current_page
                    )}
                    links={users?.data?.links ?? []}
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

export default Users
