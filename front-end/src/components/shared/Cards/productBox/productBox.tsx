import { RiBookmarkLine } from 'react-icons/ri'
import { NavLink } from 'react-router'
import React, { useState, useEffect, memo } from 'react'
import CustomSkeletonLoader from '../../UIComponents/Feedback/SkeletonLoader/SkeletonLoader'
import { Advertisement } from '../../UIComponents/Layout/HeaderComponents/headerContent/headerContent'
type ProductBoxProps = {
  isSaved: boolean
  productInfo: Advertisement
}

const ProductBox: React.FC<ProductBoxProps> = memo(
  ({ isSaved, productInfo }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isSaveAd, setIsSaveAd] = useState<boolean>(false)

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2000)
      return () => clearTimeout(timer)
    }, [])

    const SaveAdHandler = () => {
      setIsSaveAd((prev) => !prev)
    }

    useEffect(() => {
      setIsSaveAd(isSaved)
    }, [isSaved])

    return (
      <div
        className={` border w-full  h-auto 
        border-boxHelp rounded-xl`}
      >
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
                  yOffset: '65%',
                  width: '60%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '75%',
                  width: '60%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '85%',
                  width: '60%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '95%',
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
                src={``}
                alt="Your Alt Text"
                onError={(event) => {
                  ;(event.target as HTMLImageElement).src =
                    '/img/Photo Place.png'
                }}
              />
              <div className="center  py-2 px-2 rounded-xs lg:rounded-sm bg-black-blur/40 text-10 absolute top-3 left-3 font-shabnam lg:text-base">
                <span className="text-white">{productInfo?.created_at} </span>
              </div>
            </NavLink>
            <div className="flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-6.25">
              <div className="flex items-center  gap-x-[2px] justify-between font-shabnam text-10 lg:text-base text-gray-90">
                <NavLink to={''}> {productInfo?.title.slice(0, 25)}</NavLink>
                <RiBookmarkLine
                  onClick={SaveAdHandler}
                  className={`cursor-pointer w-3 h-3 lg:w-6 lg:h-6  transition-all duration-500 ${
                    isSaveAd ? ' text-primary' : 'text-gray-90'
                  } `}
                />
              </div>
              <div>
                <span className="text-10 text-gray-1000 lg:text-base">
                  {productInfo?.address.slice(0, 25)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1 text-10 font-shabnamBold lg:text-base text-Gray-35">
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
            </div>
          </>
        )}
      </div>
    )
  }
)
export default ProductBox
