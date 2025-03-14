import React, { useEffect, useState } from 'react'
import { FaRegImage } from 'react-icons/fa'
import { GoTrash } from 'react-icons/go'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar, { Step } from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'completed' },
  { id: 5, status: 'completed' },
  { id: 6, status: 'active' },
]

const StepSixAdRE: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  )

  useEffect(() => {
    document.title = 'مرحله ی پنج-ثبت آگهی'
  }, [])

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    const allowedFormats = [
      'image/webp',
      'image/jpeg',
      'image/png',
      'image/jpg',
    ]
    if (!allowedFormats.includes(file.type)) {
      alert('فقط فرمت‌های webp، jpg، jpeg یا png پشتیبانی می‌شوند.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setUploadedImages((prev) => {
        const updatedImages = [...prev]
        updatedImages[index] = reader.result as string
        return updatedImages
      })
    }
    reader.readAsDataURL(file)
  }

  const handleImageRemove = (index: number) => {
    setUploadedImages((prev) => {
      const updatedImages = [...prev]
      updatedImages[index] = null
      return updatedImages
    })
  }

  return (
    <div className="bg-AdRegistration bg-gray-ED min-h-screen">
      <div className="container py-14 md:py-20">
        <AdRegistrationContainer>
          <ProgressBar steps={steps} />
          <div className="flex flex-col">
            <SectionHeaderAdRe
              title="تصاویر خود را آپلود کنید"
              des="اضافه کردم عکس و ویدئو باعث افزایش بازدید آگهی شما می‌شود."
              subdes="فرمت عکس‌ها باید webp، jpg، jpeg یا png باشد. "
            />
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {uploadedImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg h-40 flex justify-center items-center ${
                      image
                        ? ''
                        : 'border-2 border-dotted border-gray-400 hover:border-primary'
                    }`}
                  >
                    {image ? (
                      <>
                        <img
                          src={image}
                          alt="Uploaded"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          onClick={() => handleImageRemove(index)}
                          className="cursor-pointer absolute top-2 left-2 bg-black/50 p-2 rounded-sm text-white hover:bg-opacity-70"
                        >
                          <GoTrash className="text-lg w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <label
                        htmlFor={`upload-${index}`}
                        className="flex flex-col items-center justify-center text-gray-500"
                      >
                        <FaRegImage className="text-4xl mb-2 cursor-pointer text-gray-400" />
                        <span className="text-sm">آپلود عکس</span>
                        <input
                          type="file"
                          id={`upload-${index}`}
                          className="hidden"
                          accept=".webp,.jpg,.jpeg,.png"
                          onChange={(e) => handleImageUpload(e, index)}
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3 mt-7 lg:mt-12">
              <Btn
                title="قبلی"
                bgColor="bg-transparent"
                textColor="text-primary"
                borderColor="border-primary"
                link="/registerAnAd/StepFiveAdRE"
              />
              <Btn title="ادامه" />
            </div>
          </div>
        </AdRegistrationContainer>
      </div>
    </div>
  )
}

export default StepSixAdRE
