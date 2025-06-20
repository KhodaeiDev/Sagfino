import { IoIosCheckmark } from 'react-icons/io'
import { useState, useEffect, memo } from 'react'
import CustomSkeletonLoader from '../../UIComponents/Feedback/SkeletonLoader/SkeletonLoader'
import { NavLink } from 'react-router'
import { RealEstateType } from '../../../../pages/site/Realestates/Realestates'

type RealEstateModalProps = {
  openModal?: () => void
  estateInfo: RealEstateType 
}
const EstateBox: React.FC<RealEstateModalProps> = memo(
  ({ openModal, estateInfo }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2000)
      return () => clearTimeout(timer)
    }, [])

    

    return (
      <>
        <NavLink
          to={`/RealEstateDetails/RealEstateDetails/${estateInfo.id}`}
          onClick={() => openModal && openModal()}
          className=" h-auto  cursor-pointer border border-boxHelp rounded-2xl flex flex-col shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] items-center px-5 xl:px-12 py-4 xl:py-8"
        >
          {isLoading ? (
            <CustomSkeletonLoader
              imageSection={{ yOffset: '0%', height: '40%' }}
              textSections={[
                {
                  xOffset: '5%',
                  yOffset: '50%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '60%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '70%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '80%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '90%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '100%',
                  width: '90%',
                  height: '4%',
                },
                {
                  xOffset: '5%',
                  yOffset: '110%',
                  width: '90%',
                  height: '4%',
                },
              ]}
            />
          ) : (
            <>
              <div className="w-23.25 h-16.5 mb-2">
                <img
                  className="w-full h-full object-cover"
                  src={`https://saghfino.abolfazlhp.ir/storage/${estateInfo?.image}`}
                  alt="Logo"
                />
              </div>
              <div className="flex items-center gap-1 justify-between">
                <h6 className="font-shabnamBold text-xs lg:text-xl text-gray-21">
                  {estateInfo.name}
                </h6>
                <div className="center w-3 h-3 lg:w-4 lg:h-4 bg-blue-tick text-white rounded-full">
                  <IoIosCheckmark />
                </div>
              </div>
              <div className="text-gray-71 text-center flex flex-col gap-y-3 font-shabnam text-xs">
                <span className="text-Gray-35 font-shabnamMedium text-lg">
                  {estateInfo.address}
                </span>
                <span>
                  میزان رضایتمندی: {estateInfo.rate_count} از{' '}
                  {estateInfo?.rate_sum}
                </span>
                {/* <span>آگهی‌های فعال: بیش از ۲۰۰۰</span> */}
                {/* <span className="font-shabnamMedium">
                  مشاهده نظرات کاربران (۱۲ نظر)
                </span> */}
              </div>
            </>
          )}
        </NavLink>
      </>
    )
  }
)
export default EstateBox
