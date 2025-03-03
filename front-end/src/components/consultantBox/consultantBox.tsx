import { useState, useEffect } from 'react'
import CustomSkeletonLoader, {
  Section,
  ImageSection,
} from '../loadingSpinner/Spinner'

const ConsultantBox = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const width = 600
  const height = 750

  const imageSection: ImageSection = {
    xOffset: 0,
    yOffset: 0,
    width: "100%", // عرض مشخص
    height: 300,
  }

  const textSections: Section[] = [
    { xOffset: 0, yOffset: 250, width: 600, height: 30 },
    { xOffset: 0, yOffset: 350, width: 1000, height: 30 },
    { xOffset: 0, yOffset: 450, width: 1000, height: 30 },
    { xOffset: 0, yOffset: 550, width: 1000, height: 30 },
    { xOffset: 0, yOffset: 650, width: 1000, height: 30 },
 
  ]

  return (
    <>
      <div className=" h-81 text-center flex flex-col gap-3.5 py-4 px-5 lg:px-17 lg:pt-4 lg:pb-6 rounded-2xl border border-gray-71">
        {isLoading ? (
          <CustomSkeletonLoader
            width={width}
            height={height}
            imageSection={imageSection}
            textSections={textSections}
          />
        ) : (
          <>
            <div className="w-full h-20.25 lg:w-full lg:h-35 rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="../../../public/img/Ellipse 6.png"
                alt="Consultant Image"
              />
            </div>
            <h6 className="text-base lg:text-xl font-shabnamMedium lg:font-shabnamBold">
              ماندانا تبریزی
            </h6>
            <span className="font-shabnam text-xs text-gray-71 lg:text-lg">
              املاک ولیعصر
            </span>
            <span className="text-sm font-shabnam lg:text-lg text-gray-71">
              امتیاز ۴ از ۵
            </span>
            <div className="cursor-pointer w-full h-8 lg:w-full lg:h-10 border text-primary center border-primary font-shabnamMedium text-sm rounded-lg">
              نمایش پروفایل
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ConsultantBox
