import CMSLayout from '../../components/cms/CMSLayout'
import { NavLink, useSearchParams } from 'react-router'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import { GoTrash } from 'react-icons/go'
// import { FaRegEdit } from 'react-icons/fa'
import { getAdsCreated } from '../../services/axois/request/cms/cms'
import { useMutation } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'
import { Advertisement } from '../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { ThreeDot } from 'react-loading-indicators'
import { deleteAllAdsCreated } from '../../services/axois/request/cms/cms'
import { useCallback, useEffect } from 'react'
import ToastNotification from '../../services/toastify/toastify'
import { useQueryClient } from '@tanstack/react-query'
import { deleteSpecificAdMe } from '../../services/axois/request/cms/cms'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'

const MyAds: React.FC = () => {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()
  const newParams = new URLSearchParams(searchParams)
  const savedPage = localStorage.getItem('currentPage-myads') ?? '1'

  const fetchGetMyAds = useCallback(
    async (filterParams: { page: string }) => getAdsCreated(filterParams),
    []
  )

  useEffect(() => {
    document.title = 'سقفینو-آگهی های شما'
  }, [])

  const {
    mutate: getingAllRealEstates,
    data: adCreatedDatas,
    isPending: isLoading,
  } = useMutation({
    mutationFn: fetchGetMyAds,
  })
  const deleteAllSavedHandler = async () => {
    const res = await deleteAllAdsCreated()
    if (res.status < 300) {
      ToastNotification(
        'success',
        'تمامی آگهی های ذخیره شده بامو فقیت حذف شد ',
        5000
      )
      queryClient.removeQueries({ queryKey: ['adCreated'] })
    }
  }

  const deleteSpecificAd = async (id: number) => {
    const res = await deleteSpecificAdMe(id)
    if (res.status < 300) {
      ToastNotification('success', ' آگهی مورد نظر با  موفقیت حذف شد ', 5000)
    }
  }

  useEffect(() => {
    newParams.set('page', savedPage)
    setSearchParams(newParams)

    const filteredParams: { page: string } = {
      page: savedPage,
    }
    getingAllRealEstates(filteredParams)
  }, [searchParams])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    localStorage.setItem('currentPage-myads', String(newPage))
    setSearchParams(newParams)

    setTimeout(() => {
      if (adCreatedDatas?.data?.data) {
        window.scrollTo({ top: 50, behavior: 'smooth' })
      }
    }, 200)
  }

  return (
    <>
      <CMSLayout title="آگهی من" panel={false}>
        <div className="w-full mt-4 flex items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base ">
          <GoTrash
            onClick={deleteAllSavedHandler}
            className=" cursor-pointer w-6 h-6"
          />
          پاک کردن همه آگهی‌ها
        </div>
        <div className="container">
          {isLoading && (
            <>
              <div className=" flex items-center justify-center h-50 ">
                <ThreeDot
                  variant="bounce"
                  color="#CB1B1B"
                  size="large"
                  textColor=""
                />
              </div>
            </>
          )}
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 mt-10">
            {adCreatedDatas?.data?.data.map((productInfo: Advertisement) => (
              <div
                key={uuidv4()}
                className="  w-full  h-auto  border border-boxHelp rounded-2xl"
              >
                <div className="relative">
                  <img
                    className="w-full rounded-t-xl  object-cover h-[110px]  sm:h-[170px] "
                    src={`https://saghfino.abolfazlhp.ir/storage/${productInfo?.images[0]?.path}`}
                    alt="ProductImg"
                    onError={(event) => {
                      ;(event.target as HTMLImageElement).src =
                        '/img/Photo Place.png'
                    }}
                  />
                  <div className="center w-16.25 h-5.5 lg:w-25 lg:h-9.5 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 right-3 font-shabnam lg:text-base">
                    <span className="text-white">
                      {' '}
                      {productInfo?.status ? 'تایید شد' : 'تایید نشد'}{' '}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-black-blur/60  w-10 h-10 rounded-full center">
                    <GoTrash
                      onClick={() => deleteSpecificAd(productInfo.id)}
                      className="cursor-pointer text-white w-4 h-4 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-2.5">
                  {/* <div className="w-full flex justify-end">
                    <FaRegEdit className="cursor-pointer text-gray-71 w-3 h-3 lg:w-6 lg:h-6" />
                  </div> */}
                  <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90">
                    <NavLink
                      to={`/detailsProduct/detailsProduct/${productInfo?.id}`}
                    >
                      {' '}
                      {productInfo.title}
                    </NavLink>
                  </div>
                  <div>
                    <span className="text-10 text-gray-1000 lg:text-base">
                      {productInfo.address}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 lg:gap-1  pb-3 text-10 font-shabnamBold lg:text-base text-Gray-35">
                    {productInfo.rent_price ? (
                      <div className=" flex flex-col gap-y-2 ">
                        <span>
                          {productInfo?.rent_price
                            ? `${productInfo?.mortgage_price?.toLocaleString(
                                'fa'
                              )}     میلیون تومان رهن`
                            : ' رهن توافقی'}{' '}
                        </span>
                        <span>
                          {productInfo?.rent_price
                            ? `${productInfo?.rent_price?.toLocaleString(
                                'fa'
                              )}       میلیون تومان اجاره`
                            : ' اجاره توافقی'}{' '}
                        </span>
                      </div>
                    ) : (
                      <span>
                        {productInfo?.rent_price
                          ? `${productInfo?.sell_price?.toLocaleString(
                              'fa'
                            )}       میلیون تومان فروش`
                          : ' فروش توافقی'}{' '}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex items-center justify-center mt-10 ">
            {/* صفحه‌بندی مخصوص داده‌های فیلتر شده */}
            {adCreatedDatas?.data?.data?.length ? (
              <div className="flex items-center justify-center mt-10">
                <Pagination
                  current_page={Number(
                    searchParams.get('page') ??
                      adCreatedDatas?.data?.current_page
                  )}
                  links={adCreatedDatas?.data?.links ?? []}
                  onPageChange={handlePageChange}
                />
              </div>
            ) : null}
          </div>
        </div>
      </CMSLayout>
      <div className="mt-26">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default MyAds
