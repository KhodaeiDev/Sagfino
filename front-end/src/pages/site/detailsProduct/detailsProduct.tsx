import { RiBookmarkLine } from 'react-icons/ri'
import { PiPencilRulerLight } from 'react-icons/pi'
import { BsLamp } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { PiCarLight } from 'react-icons/pi'
// import { PiHouseLineThin } from 'react-icons/pi'
import { TfiLayoutSliderAlt } from 'react-icons/tfi'
import { BsBadgeWc } from 'react-icons/bs'
// import { SlDislike } from 'react-icons/sl'
// import { SlLike } from 'react-icons/sl'
import {
  saveAd,
  unSaveAd,
} from '../../../services/axois/request/Advertisements/AdvertisementsRequest'
import NoProducts from '../../../components/shared/UIComponents/Layout/NoProducts/NoProducts'

import React, { useCallback, useEffect, useState } from 'react'
import ModalSlaider from '../../../components/shared/Modals/modalSlaider/modalSlaider'
import PersonalInformation from '../../../components/shared/Cards/personalInformationBox/Personalinformation'
// import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import { useParams } from 'react-router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProductInfo } from '../../../services/axois/request/Advertisements/AdvertisementsRequest'
import { ThreeDot } from 'react-loading-indicators'
import ToastNotification from '../../../services/toastify/toastify'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import { Advertisement } from '../../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
export type Image = {
  id: number
  ad_id: number
  path: string
  created_at: string
  updated_at: string
}

const DetailsProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [isSaved, setIsSaved] = useState<boolean>(false)

  const { productId } = useParams()
  const fetchProductInfo = useCallback(
    () => getProductInfo(Number(productId)),
    [productId]
  )

  const { isLoading, data: productInfos } = useQuery({
    queryKey: ['productInfo', productId],
    queryFn: fetchProductInfo,
    staleTime: 300000,
  })

  useEffect(() => {
    document.title = `جزیات آگهی `
  }, [productInfos])

  const adData = productInfos?.data
  const userInfos = productInfos?.data?.user

  const images = productInfos?.data?.images ?? []

  useEffect(() => {
    if (adData) {
      setIsSaved(adData.is_saved)
    }
  }, [adData])

  const openModal = useCallback((image: string) => {
    setCurrentImage(image)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setCurrentImage('')
  }, [])

  const saveMutation = useMutation({
    mutationFn: async (adId: number) => saveAd(adId),
    onSuccess: () => {
      setIsSaved(true)
      ToastNotification('success', ' آگهی شما با موفقیت ذخیره شد', 6000)
    },
    onError: (err) => console.error(err),
  })

  const unSaveMutation = useMutation({
    mutationFn: async (adId: number) => {
      unSaveAd(adId)
      ToastNotification('success', 'آگهی شما از لیست ذخیره‌ها حذف شد.', 6000)
    },
    onSuccess: () => setIsSaved(false),
  })
  const isLoadingSave = unSaveMutation.isPending || saveMutation.isPending

  const saveAdHandler = () => {
    if (isLoadingSave || !adData?.id) return

    const token = localStorage.getItem('userToken')

    if (token === 'null') {
      ToastNotification(
        'error',
        'برای ذخیره آگهی‌ها باید وارد حساب کاربری خود شوید.',
        6000
      )
      return
    }

    if (isSaved) {
      unSaveMutation.mutate(adData.id)
    } else {
      saveMutation.mutate(adData.id)
    }
  }
  if (isLoading) {
    return (
      <>
        <div className=" flex items-center justify-center h-50 ">
          <ThreeDot
            variant="bounce"
            color="#CB1B1B"
            size="large"
            text=""
            textColor=""
          />
        </div>
      </>
    )
  }

  return (
    <>
      {/* Main Image */}
      <div className="container mt-10 lg:mt-22">
        <div
          className="w-full max-h-50 md:max-h-90 lg:max-h-200 rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transform transition duration-300"
          onClick={() =>
            openModal(
              `https://saghfino.abolfazlhp.ir/storage/${images[0]?.path}`
            )
          }
        >
          <div>
            {images.length > 0 ? (
              <img
                className="w-full  h-full   aspect-video  "
                src={`https://saghfino.abolfazlhp.ir/storage/${images[0]?.path}`}
                alt="Main Image"
              />
            ) : (
              <p>تصویری برای نمایش موجود نیست</p>
            )}
          </div>
        </div>
      </div>
      {/* Images Grid */}
      <div className="container mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(1).map((src: Image) => (
            <div
              key={src.id}
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() =>
                openModal(`https://saghfino.abolfazlhp.ir/storage/${src.path}`)
              }
            >
              <img
                className="w-full h-40 lg:h-56 object-cover"
                src={`https://saghfino.abolfazlhp.ir/storage/${src.path}`}
                alt={`Image`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Details Section */}
      <div className="container mt-12 mb-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Right Section */}
          <div className="lg:col-span-7 order-last xl:order-first">
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-lg text-gray-90">
                {adData?.title}
              </span>
              <button disabled={isLoadingSave}>
                <RiBookmarkLine
                  onClick={saveAdHandler}
                  className={` !w-7 !h-7 flex items-center justify-center ${
                    isSaved ? 'text-primary' : 'text-gray-35'
                  } ${
                    isLoadingSave
                      ? ' opacity-50 !w-4 !h-4 !cursor-not-allowed'
                      : '!cursor-pointer'
                  }`}
                />
              </button>
            </div>
            <h3 className="text-gray-21 text-base lg:text-2xl font-bold mt-2 lg:mt-4 mb-7">
              {adData?.address}
            </h3>

            {/* Property Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-y-1.5 bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <PiPencilRulerLight className="rotate-180 w-5 h-5" />
                  <span>متراژ</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  {adData?.area}متر
                </p>
              </div>

              <div className="flex flex-col items-center gap-y-1.5 bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <BsLamp className="w-5 h-5" />
                  <span>اتاق</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  {adData?.rooms}خواب
                </p>
              </div>

              <div className="flex flex-col items-center gap-y-1.5 bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <FaRegBuilding className="w-5 h-5" />
                  <span>طبقه</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  {adData?.floor} از {adData?.number_of_floors}
                </p>
              </div>
            </div>

            {/* Rent and Sale Info */}
            <div className="mt-8 flex flex-col gap-4">
              {adData?.mortgage_price ? (
                <div>
                  <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                    <span className="text-sm lg:text-lg font-bold">ودیعه</span>
                    <span className="text-sm lg:text-base font-medium">
                      {adData?.mortgage_price ? (
                        <>
                          {adData?.mortgage_price?.toLocaleString()}{' '}
                          <span className=" font-normal text-xs ">
                            میلیون تومان
                          </span>
                        </>
                      ) : (
                        'توافقی'
                      )}
                    </span>
                  </div>
                  <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                    <span className="text-sm lg:text-lg font-bold">
                      اجاره ماهیانه
                    </span>
                    <span className="text-sm lg:text-base font-medium">
                      {adData?.rent_price ? (
                        <>
                          {adData?.rent_price.toLocaleString()}{' '}
                          <span className="font-normal text-xs">
                            میلیون تومان
                          </span>
                        </>
                      ) : (
                        'توافقی'
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                  <span className="text-sm lg:text-lg font-bold">فروش </span>
                  <span className="text-sm lg:text-base font-medium">
                    {adData?.mortgage_price ? (
                      <>
                        {adData?.sell_price?.toLocaleString()}{' '}
                        <span className=" font-normal text-xs ">
                          میلیون تومان
                        </span>
                      </>
                    ) : (
                      'توافقی'
                    )}
                  </span>
                </div>
              )}

              <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm lg:text-lg font-bold">
                  {' '}
                  {adData?.created_at} در {adData?.city}
                </span>
                {/* <span className="text-sm lg:text-base">شناسه آگهی : 2344</span> */}
              </div>
            </div>
            {/* Facilities */}
            <div>
              {/* tilte */}
              <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
                امکانت
              </h3>
              {/* content */}
              <div className="grid   h-45 overflow-auto grid-cols-2">
                {/* Row 1 */}
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <PiCarLight className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>پارکینگ :</span>
                  <span>{adData?.parking ? 'دارد' : 'ندارد'}</span>
                </div>
                {/* Row 3 */}
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <TfiLayoutSliderAlt className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>آسانسور :</span>
                  <span>{adData?.elevator ? 'دارد' : 'ندارد'}</span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center gap-2.5 text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <BsBadgeWc className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>نوع سرویس ب :</span>
                  <span>
                    {adData.type_of_wc === 'wc'
                      ? 'ایرانی'
                      : adData?.type_of_wc === 'both'
                      ? 'هردو'
                      : adData?.type_of_wc === 'farangi'
                      ? 'فرنگی'
                      : 'ایرانی'}
                  </span>
                </div>
              </div>
            </div>
            {/* description */}
            <div>
              <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
                توضیحات
              </h3>{' '}
              <div className=" flex flex-col  gap-y-2 mt-3 font-bold ">
                {adData?.description}
              </div>
            </div>
            {/* loction*/}
            <div>
              <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
                موقعیت
              </h3>{' '}
              <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap  mt-3 ">
                <span> آدرس :</span>
                <span> {adData?.address}</span>
              </div>
              <div className=" w-fit flex items-center gap-x-4  mt-10 ">
                <div className=" flex flex-col lg:flex-row items-center gap-1  text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  border-l  border-gray-90   pl-5  ">
                  <span> زمان ثبت آگهی :</span>
                  <span className=" font-shabnamBold ">
                    {' '}
                    {adData?.created_at}
                  </span>
                </div>
                {/* <div className="  flex flex-col lg:flex-row items-center gap-1 text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  border-l  border-gray-90   pl-5  ">
                  <span> تعداد مشاهده آگهی :</span>
                  <span className=" font-shabnamBold "> 22</span>
                </div> */}
                <div className=" flex flex-col lg:flex-row items-center gap-1  text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  ">
                  <span> تعداد ذخیره آگهی :</span>
                  <span className=" font-shabnamBold ">
                    {' '}
                    {adData?.saved_by_users_count}
                  </span>
                </div>
              </div>
            </div>
            {/* Feedback */}
            {/* <div className=" flex items-center gap-x-10  text-gray-1000 mt-6 text-10 lg:text-base ">
              <span> باز خورد شما در این آگهی چیست ؟</span>
              <div className=" flex gap-x-6   ">
                <SlDislike className=" w-4 h-4 lg:w-6 lg:h-6 cursor-pointer " />
                <SlLike className=" w-4 h-4 lg:w-6 lg:h-6 cursor-pointer " />
              </div>
            </div> */}
          </div>
          {/* Left Section */}
          <div className="lg:col-span-5  flex justify-center xl:justify-end order-first xl:order-last  mt-5  xl:mt-28 ">
            <PersonalInformation userInfos={userInfos} />
          </div>
        </div>
        {/* releted products */}
        <div className=" mt-16 ">
          <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
            آگهی مشابه
          </h3>{' '}
          {adData?.similar_ads.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {adData.similar_ads.map((productInfo: Advertisement) => (
                <ProductBox key={productInfo.id} productInfo={productInfo} />
              ))}
            </div>
          ) : (
            <NoProducts />
          )}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <ModalSlaider
          images={images}
          currentImage={currentImage}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default DetailsProduct
