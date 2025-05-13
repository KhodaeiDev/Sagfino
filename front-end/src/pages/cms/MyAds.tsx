import React, { useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { NavLink } from 'react-router'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import { GoTrash } from 'react-icons/go'
import CustomSkeletonLoader from '../../components/shared/UIComponents/Feedback/SkeletonLoader/SkeletonLoader'
import { FaRegEdit } from 'react-icons/fa'

const MyAds: React.FC = () => {
  document.title = 'سقفینو-آگهی های شما'
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CMSLayout title="آگهی من" panel={false}>
        <div className="w-full mt-4 flex items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base ">
          <GoTrash className=" w-6 h-6" />
          پاک کردن همه آگهی‌ها
        </div>
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 mt-10">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="  w-full  h-auto lg:h-87 border border-boxHelp rounded-2xl"
              >
                {isLoading ? (
                  <CustomSkeletonLoader
                    imageSection={{ yOffset: '0%', height: '50%' }}
                    textSections={[
                      {
                        xOffset: '5%',
                        yOffset: '55%',
                        width: '10%',
                        height: '7%',
                      },
                      {
                        xOffset: '5%',
                        yOffset: '68%',
                        width: '90%',
                        height: '4%',
                      },
                      {
                        xOffset: '5%',
                        yOffset: '81%',
                        width: '90%',
                        height: '4%',
                      },
                      {
                        xOffset: '5%',
                        yOffset: '94%',
                        width: '90%',
                        height: '4%',
                      },
                    ]}
                  />
                ) : (
                  <>
                    <a href="#" className="relative  ">
                      <img
                        className="w-full h-auto rounded-t-2xl "
                        src="/img/pexels-naim-benjelloun-2029731 1.png"
                        alt="Product"
                      />
                      <div className="center w-16.25 h-5.5 lg:w-25 lg:h-9.5 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 right-3 font-shabnam lg:text-base">
                        <span className="text-white"> تایید شد </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <GoTrash className="cursor-pointer text-white w-4 h-4 lg:w-6 lg:h-6" />
                      </div>
                    </a>
                    <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-2.5">
                      <div className="w-full flex justify-end">
                        <FaRegEdit className="cursor-pointer text-gray-71 w-3 h-3 lg:w-6 lg:h-6" />
                      </div>
                      <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90">
                        <NavLink to="">رهن و اجاره آپارتمان تهران</NavLink>
                      </div>
                      <div>
                        <span className="text-10 text-gray-1000 lg:text-base">
                          ۸۰ متر، محدوده پاسدارن،
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5 lg:gap-1 text-10 font-shabnamBold lg:text-base text-gray-35">
                        <span>۶۰۰ میلیون تومان رهن</span>
                        <span>۳۱ میلیون تومان اجاره</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
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
