import React, { useState, useEffect } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { GoTrash } from 'react-icons/go'
import ProductBox from '../../components/shared/Cards/productBox/productBox'
import CustomSkeletonLoader from '../../components/shared/UIComponents/Feedback/SkeletonLoader/SkeletonLoader'

const SavedAd: React.FC = () => {
  document.title = 'سقفینو- آگهی ذخیره شده '
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CMSLayout title="آگهی ذخیره شده " panel={false}>
        <div className="w-full mt-4 flex items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base">
          <GoTrash className="w-6 h-6" />
          پاک کردن همه آگهی‌ها
        </div>
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-2 md:gap-4 mt-10">
            {isLoading ? (
              [...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-35 md:w-70 h-81.5 border border-boxHelp rounded-xl overflow-hidden"
                >
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
                    ]}
                  />
                </div>
              ))
            ) : (
              <>
                <ProductBox key={1} isSaved={true} />
                <ProductBox key={2} isSaved={true} />
                <ProductBox key={3} isSaved={true} />
                <ProductBox key={1} isSaved={true} />
                <ProductBox key={2} isSaved={true} />
                <ProductBox key={3} isSaved={true} />
              </>
            )}
          </div>
        </div>
      </CMSLayout>
    </>
  )
}

export default SavedAd
