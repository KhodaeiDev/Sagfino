import { RiBookmarkLine } from 'react-icons/ri'
import { NavLink } from 'react-router'
import React, { useState, useEffect } from 'react'
import CustomSkeletonLoader from '../../UIComponents/Feedback/SkeletonLoader/SkeletonLoader'

type ProductBoxProps = {
  isSaved: boolean
}

const ProductBox: React.FC<ProductBoxProps> = ({ isSaved }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="  border w-full  h-auto lg:h-75  border-boxHelp rounded-xl">
      {isLoading ? (
        <div className="flex   justify-center items-center ">
          <CustomSkeletonLoader
            imageSection={{ yOffset: '0%', height: '50%' }}
            textSections={[
              {
                xOffset: '85%',
                yOffset: '55%',
                width: '10%',
                height: '7%',
              },
              {
                xOffset: '5%',
                yOffset: '68%',
                width: '60%',
                height: '4%',
              },
              {
                xOffset: '5%',
                yOffset: '81%',
                width: '60%',
                height: '4%',
              },
              {
                xOffset: '5%',
                yOffset: '94%',
                width: '60%',
                height: '4%',
              },
              {
                xOffset: '5%',
                yOffset: '107%',
                width: '60%',
                height: '4%',
              },
            ]}
          />
        </div>
      ) : (
        <>
          <NavLink
            className={'relative'}
            to={'/detailsProduct/detailsProduct/1'}
          >
            <img
              className="w-full rounded-t-xl"
              src="../../../public/img/pexels-john-tekeridis-1428348.png"
              alt="Your Alt Text"
              onError={(event) => {
                ;(event.target as HTMLImageElement).src = '/img/Photo Place.png'
              }}
            />
            <div className="center w-16.25 h-5.5 lg:w-25 lg:h-9.5 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 left-3 font-shabnam lg:text-base">
              <span className="text-white">۲ ساعت پیش</span>
            </div>
          </NavLink>
          <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-6.25">
            <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90">
              <NavLink to={''}>رهن و اجاره آپارتمان تهران</NavLink>
              <RiBookmarkLine
                className={`cursor-pointer w-3 h-3 lg:w-6 lg:h-6 ${
                  isSaved ? ' text-primary' : 'text-gray-90'
                } `}
              />
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
  )
}

export default ProductBox
