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

    console.log(estateInfo)

    return (
      <>
        <NavLink
          to={`/RealEstateDetails/RealEstateDetails/${estateInfo.id}`}
          onClick={() => openModal && openModal()}
          className=" h-auto  cursor-pointer border border-boxHelp  rounded-lg flex flex-col shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] items-center  "
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
              ]}
            />
          ) : (
            <>
              <div className=" w-full mb-2">
                <img
                  className="w-full h-full object-cover rounded-t-lg "
                  src={`https://saghfino.abolfazlhp.ir/storage/${estateInfo?.image}`}
                  alt="Logo"
                  onError={(event) => {
                    ;(event.target as HTMLImageElement).src =
                      '/img/Photo Place.png'
                  }}
                />
              </div>
              <div className="flex items-center gap-1 justify-between   my-2 ">
                <h6 className="font-shabnamBold text-base lg:text-2xl text-gray-21 ">
                  {estateInfo.name}
                </h6>
                <div className="center w-3 h-3 lg:w-4 lg:h-4 bg-blue-tick text-white rounded-full">
                  <IoIosCheckmark />
                </div>
              </div>
              <div className="text-gray-71 text-center flex flex-col gap-y-3 font-shabnam text-xs  mb-6 ">
                <span>
                  میزان رضایتمندی: 5 از{' '}
                  {estateInfo.rate === null ? 0 : estateInfo.rate}
                </span>
                {/* <span>آگهی‌های فعال: بیش از ۲۰۰۰</span> */}
                {/* <span className="font-shabnamMedium"> 
                  مشاهده نظرات کاربران (۱۲ نظر)
                </span> */}
                <span> آدرس : {estateInfo.address}</span>
              </div>
            </>
          )}
        </NavLink>
      </>
    )
  }
)
export default EstateBox
