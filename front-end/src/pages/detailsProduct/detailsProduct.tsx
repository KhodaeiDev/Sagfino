import { NavBar, NavBarMobail } from '../../components/navBar/navBar'
import { RiBookmarkLine } from 'react-icons/ri'
import { PiPencilRulerLight } from 'react-icons/pi'
import { BsLamp } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { PiCarLight } from 'react-icons/pi'
import { PiHouseLineThin } from 'react-icons/pi'
import { TfiLayoutSliderAlt } from 'react-icons/tfi'
import { BsBadgeWc } from 'react-icons/bs'

import React, { useState } from 'react'
import ModalSlaider from '../../components/modalSlaider/modalSlaider'
import PersonalInformation from '../../components/personalInformationBox/Personalinformation'

const DetailsProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
  ]

  const openModal = (image: string) => {
    setCurrentImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImage('')
  }

  return (
    <>
      {/* NavBar */}
      <div className="hidden lg:flex">
        <NavBar />
      </div>
      <div className="flex lg:hidden">
        <NavBarMobail />
      </div>

      {/* Main Image */}
      <div className="container mt-10 lg:mt-22">
        <div
          className="w-full h-50 md:h-90 lg:h-110 rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transform transition duration-300"
          onClick={() => openModal(images[0])}
        >
          <img
            className="w-full h-full object-cover"
            src={images[0]}
            alt="Main Image"
          />
        </div>
      </div>

      {/* Images Grid */}
      <div className="container mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(1).map((src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => openModal(src)}
            >
              <img
                className="w-full h-40 lg:h-56 object-cover"
                src={src}
                alt={`Image ${index + 2}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="container mt-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Right Section */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-lg text-gray-90">
                رهن و اجاره آپارتمان تهران
              </span>
              <RiBookmarkLine className="w-5 h-5 text-gray-35 cursor-pointer" />
            </div>
            <h3 className="text-gray-21 text-base lg:text-2xl font-bold mt-2 lg:mt-4 mb-7">
              ۲۰۰ متر، محدوه ونک، بلوار دانش
            </h3>

            {/* Property Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <PiPencilRulerLight className="rotate-180 w-5 h-5" />
                  <span>متراژ</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  115متر
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <BsLamp className="w-5 h-5" />
                  <span>اتاق</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  2خواب
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-f9 rounded-lg lg:rounded-2xl p-4">
                <div className="flex items-center gap-x-2 text-sm lg:text-lg font-bold text-gray-35">
                  <FaRegBuilding className="w-5 h-5" />
                  <span>طبقه</span>
                </div>
                <p className="text-gray-35 text-base lg:text-xl font-bold">
                  3 از 4
                </p>
              </div>
            </div>

            {/* Rent and Sale Info */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm lg:text-lg font-bold">ودیعه</span>
                <span className="text-sm lg:text-base font-medium">
                  ۶۰۰ میلیون تومان
                </span>
              </div>

              <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm lg:text-lg font-bold">
                  اجاره ماهیانه
                </span>
                <span className="text-sm lg:text-base font-medium">
                  30 میلیون تومان
                </span>
              </div>

              <div className="border border-gray-E1 rounded-md lg:rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm lg:text-base">ساعت پیش طهران</span>
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
                  <span>1</span>
                </div>
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <PiCarLight className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>پارکینگ :</span>
                  <span>1</span>
                </div>
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <PiCarLight className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>پارکینگ :</span>
                  <span>1</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <PiHouseLineThin className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>انباری :</span>
                  <span>دارد</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <TfiLayoutSliderAlt className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>آسانسور :</span>
                  <span>دارد</span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center gap-2.5 text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <BsBadgeWc className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span>نوع سرویس ب :</span>
                  <span>فرنگی</span>
                </div>
              </div>
            </div>
            {/* description */}
            <div className=" ">
              <h3 className=" font-shabnamBold text-xl  text-gray-21 mt-14 ">
                توضیحات
              </h3>{' '}
              <div className=" flex flex-col  gap-y-2 mt-3 ">
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <span> سن بنا :</span>
                  <span>نوساز</span>
                </div>
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <span> موقعیت جغرافیای :</span>
                  <span>شمالی</span>
                </div>
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <span> سایر امکانات: </span>
                  <span> کمد دیواری پکیج </span>
                </div>
                <div className="flex items-center gap-2.5  text-xs text-gray-21  lg:text-xl   flex-wrap ">
                  <span> زمان بازید 7 تا 11 شب </span>
                </div>
              </div>
            </div>
          </div>
          {/* Left Section */}
          <div className="lg:col-span-6  flex justify-center lg:justify-end order-first lg:order-last  lg:mt-28 ">
            <PersonalInformation />
          </div>
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
