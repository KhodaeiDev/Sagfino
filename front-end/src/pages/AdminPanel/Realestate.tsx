import React, { useCallback, useEffect } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { useSearchParams } from 'react-router'
import { gettingRealEstate } from '../../services/axois/request/adminPanel'
import { useQuery } from '@tanstack/react-query'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import { ThreeDot } from 'react-loading-indicators'

type RealEstateTyps = {
  id: number
  agent_id: number
  name: string
  tagline: string
  city: string
  image: string
  rate_count: number
  rate_sum: number
  rate: number
  address: string
}

const Realestate: React.FC = () => {
  useEffect(() => {
    document.title = 'سقفینو- پنل مدیریت-کاربران'
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage =
    localStorage.getItem('currentPage-RealEstateAdminPanel') ?? '1'

  const {
    isLoading,
    data: RealEstate,
    error,
  } = useQuery({
    queryKey: ['RealEstate'],
    queryFn: () => gettingRealEstate({ page: savedPage }),
    staleTime: 300000,
  })

  const fetchRealEstate = useCallback(
    (filterParams: { page: string }) => gettingRealEstate(filterParams),
    [searchParams]
  )


  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }
    fetchRealEstate(filteredParams)
  }, [searchParams])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-RealEstateAdminPanel', String(newPage))
    setSearchParams(newParams)
  }

  if (error) {
    return (
      <CMSLayout title="املاکی ها" panel={true}>
        <div className="text-center text-red-500">خطا در دریافت اطلاعات</div>
      </CMSLayout>
    )
  }

  return (
    <>
      <CMSLayout title=" املاکی ها" panel={true}>
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
                      شناسه املاکی
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      نام املاکی
                    </th>

                    <th className="border border-primary-tint-6 px-4 py-2">
                      شعار{' '}
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      شهر{' '}
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      تصویر
                    </th>
                    <th className="border border-primary-tint-6 px-4 py-2">
                      آدرس{' '}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RealEstate?.data.data?.map((item: RealEstateTyps) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-200 text-xs sm:text-sm md:text-base"
                    >
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.id}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.name}
                      </td>

                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.tagline}
                      </td>
                      <td className="border border-primary-tint-6 px-4 py-2">
                        {item.city}
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
                        {item.address}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" flex items-center justify-center gap-3 my-8 ">
              {RealEstate?.data?.links?.length ? (
                <div className="flex items-center justify-center mt-10">
                  <Pagination
                    current_page={Number(
                      searchParams.get('page') ?? RealEstate?.data.current_page
                    )}
                    links={RealEstate?.data?.links ?? []}
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

export default Realestate
