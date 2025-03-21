import React, { useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { NavLink } from 'react-router'
// import NotRegisteredAd from '../../components/cms/not-registered-ad'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import { GoTrash } from 'react-icons/go'
import { ImageSection } from '../../components/shared/UIComponents/Feedback/loadingSpinner/Spinner'
import { Section } from '../../components/shared/UIComponents/Feedback/loadingSpinner/Spinner'
import CustomSkeletonLoader from '../../components/shared/UIComponents/Feedback/loadingSpinner/Spinner'
import { FaRegEdit } from 'react-icons/fa'

const MyAds: React.FC = () => {
  document.title = 'سقفینو-آگهی های شما'
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const width = 600
  const height = 800

  const imageSection: ImageSection = {
    xOffset: 0,
    yOffset: 10,
    width: '100%',
    height: 300,
  }

  const textSections: Section[] = [
    { xOffset: 150, yOffset: 330, width: 430, height: 25 },
    { xOffset: 80, yOffset: 380, width: 500, height: 25 },
    { xOffset: 130, yOffset: 430, width: 450, height: 25 },
    { xOffset: 175, yOffset: 480, width: 400, height: 25 },
  ]

  return (
    <>
      <CMSLayout title="آگهی من">
        {/* <NotRegisteredAd /> */}
        <div className="w-full mt-4 flex **:cursor-pointer items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base ">
          <GoTrash className=" w-6 h-6" />
          پاک کردن همیه آگهی های
        </div>
        <div className="container">
          <div className="flex flex-wrap  justify-center sm:justify-start gap-2 md:gap-4  mt-10   ">
            {/* product-box */}
            <div className=" w-35 md:w-70 h-auto border border-boxHelp rounded-2xl">
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <CustomSkeletonLoader
                    width={width}
                    height={height}
                    imageSection={imageSection}
                    textSections={textSections}
                  />
                </div>
              ) : (
                <>
                  <div className={'relative'}>
                    <img
                      className="w-full rounded-t-2xl"
                      src="../../../public/img/pexels-naim-benjelloun-2029731 1.png"
                      alt=""
                    />
                    <div className="center w-16.25 h-5.5 lg:w-25 lg:h-9.5 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 right-3 font-shabnam lg:text-base">
                      <span className="text-white"> تایید شد </span>
                    </div>
                    <div className=" absolute top-3 left-3">
                      <GoTrash className=" cursor-pointer text-white w-4 h-4  lg:w-6 lg:h-6  " />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-2.5">
                    <div className=" w-full flex  justify-end">
                      <FaRegEdit className="cursor-pointer text-gray-71 w-3 h-3 lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90">
                      <NavLink to={''}>رهن و اجاره آپارتمان تهران</NavLink>
                    </div>
                    <div>
                      <span className="text-10 text-gray-1000 lg:text-base">
                        ۸۰ ...متر، محدوده پاسدارن،
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 lg:gap-1 text-10 font-shabnamBold lg:text-base text-Gray-35">
                      <span>۶۰۰ میلیون تومان رهن</span>
                      <span>۳۱ میلیون تومان اجاره</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className=" w-35 md:w-70 h-auto border border-boxHelp rounded-2xl">
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <CustomSkeletonLoader
                    width={width}
                    height={height}
                    imageSection={imageSection}
                    textSections={textSections}
                  />
                </div>
              ) : (
                <>
                  <NavLink
                    className={'relative'}
                    to={'/detailsProduct/detailsProduct/1'}
                  >
                    <img
                      className="w-full rounded-t-2xl"
                      src="../../../public/img/pexels-naim-benjelloun-2029731 1.png"
                      alt=""
                    />
                    <div className="center w-16.25 h-5.5 lg:w-25 lg:h-9.5 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 right-3 font-shabnam lg:text-base">
                      <span className="text-white"> تایید شد </span>
                    </div>
                    <div className=" absolute top-3 left-3">
                      <GoTrash className=" text-white w-4 h-4  lg:w-6 lg:h-6  " />
                    </div>
                  </NavLink>
                  <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-2.5">
                    <div className=" w-full flex  justify-end">
                      <FaRegEdit className="cursor-pointer text-gray-71 w-3 h-3 lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90">
                      <NavLink to={''}>رهن و اجاره آپارتمان تهران</NavLink>
                    </div>
                    <div>
                      <span className="text-10 text-gray-1000 lg:text-base">
                        ۸۰ ...متر، محدوده پاسدارن،
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 lg:gap-1 text-10 font-shabnamBold lg:text-base text-Gray-35">
                      <span>۶۰۰ میلیون تومان رهن</span>
                      <span>۳۱ میلیون تومان اجاره</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </CMSLayout>
      <div className=" mt-26 ">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}
export default MyAds
