import { IoIosCheckmark } from 'react-icons/io'
import { useState, useEffect } from 'react'
import CustomSkeletonLoader, {
  Section,
  ImageSection,
} from '../../UIComponents/Feedback/loadingSpinner/Spinner'

interface RealEstateModalProps {
  openModal: () => void
}

const BoxEstate: React.FC<RealEstateModalProps> = ({ openModal }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const width = 900
  const height = 990

  const imageSection: ImageSection = {
    xOffset: 0,
    yOffset: 0,
    width: '100%',
    height: 450,
  }

  const textSections: Section[] = [
    { xOffset: 140, yOffset: 510, width: 620, height: 30 },
    { xOffset: 90, yOffset: 580, width: 730, height: 30 },
    { xOffset: 85, yOffset: 650, width: 730, height: 30 },
    { xOffset: 85, yOffset: 720, width: 730, height: 30 },
    { xOffset: 85, yOffset: 790, width: 730, height: 30 },
  ]

  return (
    <>
      <div
        onClick={openModal}
        className=" xs:h-80 sm:h-70 md:h-74  lg:h-80 cursor-pointer border border-boxHelp rounded-2xl flex flex-col shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] items-center px-5 xl:px-12 py-4 xl:py-8"
      >
        {isLoading ? (
          <CustomSkeletonLoader
            width={width}
            height={height}
            imageSection={imageSection}
            textSections={textSections}
          />
        ) : (
          <>
            <div className="w-23.25 h-16.5 mb-2">
              <img
                className="w-full h-full"
                src="../../../public/img/Real Estate Logo 1.png"
                alt="Real Estate Logo"
              />
            </div>
            <div className="flex items-center gap-1 justify-between">
              <h6 className="font-shabnamBold text-xs lg:text-xl text-gray-21">
                مشاور املاک سبز
              </h6>
              <div className="center w-3 h-3 lg:w-4 lg:h-4 bg-blue-tick text-white rounded-full">
                <IoIosCheckmark />
              </div>
            </div>
            <div className="text-gray-71 text-center flex flex-col gap-y-3 font-shabnam text-xs">
              <span className="text-Gray-35 font-shabnamMedium text-lg">
                تهران، پاسداران
              </span>
              <span>میزان رضایتمندی: ۴ از ۵</span>
              <span>آگهی‌های فعال: بیش از ۲۰۰۰</span>
              <span className="font-shabnamMedium">
                مشاهده نظرات کاربران (۱۲ نظر)
              </span>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default BoxEstate
