import { RiBookmarkLine } from 'react-icons/ri'
import { PiPencilRulerLight } from 'react-icons/pi'
import { BsLamp } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { PiCarLight } from 'react-icons/pi'
import { PiHouseLineThin } from 'react-icons/pi'
import { TfiLayoutSliderAlt } from 'react-icons/tfi'
import { BsBadgeWc } from 'react-icons/bs'
import { SlDislike } from 'react-icons/sl'
import { SlLike } from 'react-icons/sl'

import React, { useCallback, useState } from 'react'
import ModalSlaider from '../../../components/shared/Modals/modalSlaider/modalSlaider'
import PersonalInformation from '../../../components/shared/Cards/personalInformationBox/Personalinformation'
// import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getProductInfo } from '../../../services/axois/request/Advertisements/AdvertisementsRequest'
import { ThreeDot } from 'react-loading-indicators'
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
  const { productId } = useParams()

  const { isLoading, data: productInfos } = useQuery({
    queryKey: ['productInfo', productId],
    queryFn: () => getProductInfo(Number(productId)),
    enabled: !!productId,
  })
  console.log(productInfos?.data?.images[0])

  document.title = 'سقفینو - جزئیات محصول '

  const images = productInfos?.data?.images ?? []

  const openModal = useCallback((image: string) => {
    setCurrentImage(image)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setCurrentImage('')
  }, [])

  const adData = productInfos?.data

  console.log(adData)

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
              <RiBookmarkLine className="w-5 h-5 text-gray-35 cursor-pointer" />
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
                      <span className="font-normal text-xs">میلیون تومان</span>
                    </>
                  ) : (
                    'توافقی'
                  )}
                </span>
              </div>

              <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm lg:text-lg font-bold">
                  {' '}
                  {adData?.updated_at} در {adData?.city}
                </span>
                <span className="text-sm lg:text-base">شناسه آگهی : 2344</span>
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
              <div className=" flex items-center gap-x-4  mt-10 ">
                <div className=" flex flex-col lg:flex-row items-center gap-1  text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  border-l  border-gray-90   pl-5  ">
                  <span> زمان ثبت آگهی :</span>
                  <span className=" font-shabnamBold ">
                    {' '}
                    {adData?.updated_at}
                  </span>
                </div>
                <div className="  flex flex-col lg:flex-row items-center gap-1 text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  border-l  border-gray-90   pl-5  ">
                  <span> تعداد مشاهده آگهی :</span>
                  <span className=" font-shabnamBold "> 22</span>
                </div>
                <div className=" flex flex-col lg:flex-row items-center gap-1  text-10 text-gray-21  lg:text-lg   flex-wrap  mt-3  ">
                  <span> تعداد ذخیره آگهی :</span>
                  <span className=" font-shabnamBold "> 6</span>
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
            <PersonalInformation />
          </div>
        </div>
        {/* releted products */}
        <div className=" mt-16 ">
          <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
            آگهی مشابه
          </h3>{' '}
          {/* <div className=" grid  grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
            <ProductBox isLoading={false} />
            <ProductBox isLoading={false} />
            <ProductBox isLoading={false} />
          </div> */}
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
