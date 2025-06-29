import React, { useCallback, useEffect, useState, useRef } from 'react'
import { FaRegImage } from 'react-icons/fa'
import { GoTrash } from 'react-icons/go'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar, { Step } from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import { useAdvertisement } from '../../context/AdRegistration/useAdvertisement'
import { createAdvertisementReq } from '../../services/axois/request/Advertisements/AdvertisementsRequest'
import ToastNotification from '../../services/toastify/toastify'
import { useMutation } from '@tanstack/react-query'
import { AdvertisementData } from '../../context/AdRegistration/AdRegistration'
import { useNavigate } from 'react-router'

const keysToRemove = [
  'NumberFloors-value',
  'Rent-value',
  'Room-value',
  'Sale-value',
  'address-value',
  'city',
  'description-value',
  'elevator',
  'parking',
  'property_type',
  'province',
  'registeredPhone',
  'title-value',
  'transaction_type',
  'type_of_wc',
  'uploadedImages',
  'Address-value',
  'Area-value',
  'Floor-value',
]

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'completed' },
  { id: 5, status: 'completed' },
  { id: 6, status: 'active' },
]

const StepSixAdRE: React.FC = () => {
  const navigate = useNavigate()
  const [uploadedImages, setUploadedImages] = useState<
    { id: string; src: string; file: File | null }[]
  >(
    Array(6)
      .fill(null)
      .map(() => ({ id: crypto.randomUUID(), src: '', file: null }))
  )

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const { advertisementData, setAdvertisementData } = useAdvertisement()
  const isMounted = useRef(false)

  useEffect(() => {
    document.title = 'مرحله‌ی شش - ثبت آگهی'
  }, [])

  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages))
  }, [uploadedImages])

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    setTimeout(() => {
      const storedImages = JSON.parse(
        localStorage.getItem('uploadedImages') || '[]'
      )

      setUploadedImages(storedImages)

      setAdvertisementData((prev) => ({
        ...prev,
        images: storedImages
          .map((img: { src: string }) => {
            if (!img.src || !img.src.startsWith('image/')) return null

            try {
              const byteCharacters = atob(img.src.split(',')[1])
              const byteNumbers = Array.from(byteCharacters, (char) =>
                char.charCodeAt(0)
              )
              const byteArray = new Uint8Array(byteNumbers)
              return new File([byteArray], 'image.jpeg', { type: 'image/jpeg' })
            } catch (error) {
              console.error('Error decoding Base64:', error)
              return null
            }
          })
          .filter((file: File | null): file is File => file !== null),
      }))
    }, 0)
  }, [])

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const file = event.target.files?.[0]
      console.log('Selected file:', file)

      if (!file || !file.type.startsWith('image/')) {
        console.warn('Unsupported file or not an image.')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        ToastNotification('error', 'حجم عکس باید کمتر از 5 مگابایت باشد', 5000)
        return
      }


      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        setUploadedImages((prev) => {
          const updatedImages = prev.map((img) =>
            img.id === id ? { ...img, src: reader.result as string, file } : img
          )

          localStorage.setItem('uploadedImages', JSON.stringify(updatedImages))

          setAdvertisementData((prev) => ({
            ...prev,
            images: updatedImages
              .map((img) => img.file)
              .filter((file): file is File => file !== null),
          }))

          return updatedImages
        })
      }
    },
    [setAdvertisementData]
  )

  const handleImageRemove = useCallback((id: string) => {
    setUploadedImages((prev) => {
      const updatedImages = prev.map((img) =>
        img.id === id ? { ...img, src: '', file: null } : img
      )

      localStorage.setItem('uploadedImages', JSON.stringify(updatedImages))

      setAdvertisementData((prev) => ({
        ...prev,
        images: updatedImages
          .map((img) => img.file)
          .filter((file): file is File => file !== null),
      }))

      return updatedImages
    })
  }, [])

  const mutation = useMutation({
    mutationFn: (data: AdvertisementData) => createAdvertisementReq(data),
    onSuccess: () => {
      setIsSubmitDisabled(true)
      keysToRemove.forEach((key) => localStorage.removeItem(key))
      ToastNotification('success', 'آگهی با موفقیت ثبت شد', 5000)
      navigate('/registerAnAd/RegisterDone')
    },
    onError: (err) => {
      keysToRemove.forEach((key) => localStorage.removeItem(key))
      ToastNotification(
        'error',
        `آگهی ثبت نشد لطفا با دقت فرم آگهی را پر کنید  ${err}`,
        10000
      )
      navigate('/registerAnAd/RegisterError')
    },
  })

  const handleSubmit = () => {
    mutation.mutate(advertisementData)
  }

  useEffect(() => {
    const isFormValid =
      advertisementData.title &&
      advertisementData.description &&
      advertisementData.address &&
      advertisementData.city &&
      advertisementData.transaction_type &&
      advertisementData.property_type &&
      advertisementData.images.length > 0

    setIsSubmitDisabled(!isFormValid)
  }, [advertisementData])

  return (
    <div className="bg-AdRegistration bg-gray-ED min-h-screen">
      <div className="container">
        <AdRegistrationContainer>
          <ProgressBar steps={steps} />
          <div className="flex flex-col">
            <SectionHeaderAdRe
              title="تصاویر خود را آپلود کنید"
              des="اضافه کردن عکس و ویدئو باعث افزایش بازدید آگهی شما می‌شود."
              subdes="فرمت عکس‌ها باید webp، jpg، jpeg یا png باشد."
            />
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-4">
                {uploadedImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative rounded-lg h-40 flex justify-center items-center border-2 border-dotted border-gray-400 hover:border-primary"
                  >
                    {image.src ? (
                      <>
                        <img
                          src={image.src}
                          alt="Uploaded"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          onClick={() => handleImageRemove(image.id)}
                          className="absolute top-2 left-2 bg-black/50 p-2 rounded-sm text-white hover:bg-opacity-70"
                        >
                          <GoTrash className="text-lg w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <label
                        htmlFor={`upload-${image.id}`}
                        className="flex flex-col items-center justify-center text-gray-500 w-full h-full cursor-pointer"
                      >
                        <FaRegImage className="text-4xl mb-2 cursor-pointer text-gray-400" />
                        <span className="text-sm">آپلود عکس</span>
                        <input
                          type="file"
                          id={`upload-${image.id}`}
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, image.id)}
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
                link="/registerAnAd/StepFive"
                disabled={false}
              />
              <button
                className="transition-all duration-300 bg-primary border border-primary rounded-lg px-3 lg:px-15 py-2 text-white font-shabnam disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
                onClick={handleSubmit}
                disabled={isSubmitDisabled || mutation.isPending}
              >
                {mutation.isPending
                  ? 'در حال ارسال...'
                  : isSubmitDisabled
                  ? 'اطلاعات مورد نیاز را وارد کنید'
                  : 'ثبت آگهی'}
              </button>
            </div>
          </div>
        </AdRegistrationContainer>
      </div>
      <Footer />
      <FooterMobail />
    </div>
  )
}

export default StepSixAdRE
