import React, { useCallback, useContext, useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { CgProfile } from 'react-icons/cg'
import { LuImagePlus } from 'react-icons/lu'
// import { AiOutlineUser } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  persianValidator,
  requiredValidator,
} from '../../validators/rules'
import { createRealEstate } from '../../services/axois/request/cms/cms'
import { AxiosResponse } from 'axios'
import UseForm from '../../Hooks/useForm'
import { FormType } from '../../Hooks/useformType'
import { AuthContext } from '../../context/auth/authContext'
import ToastNotification from '../../services/toastify/toastify'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { IoLocationSharp } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'
import {
  getingCities,
  getingProvinces,
} from '../../services/axois/request/Advertisements/AdvertisementsRequest'
interface City {
  id: number
  name: string
}
interface Province {
  id: number
  name: string
}
import { BsHouseAdd } from 'react-icons/bs'

const dataURLtoFile = (dataurl: string, filename: string): File => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)?.[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime || 'image/jpeg' })
}

const RealEstateRegistration: React.FC = () => {
  const [formType] = useState<FormType>('edit-information')
  const [formState, onInputHandler, dispatch] = UseForm(formType)
  const [, setInitialName] = useState('')
  const [, setInitialLastName] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hasNewImage, setHasNewImage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'سقفینو-ثبت املاک مستغلات'
  }, [])

  const auth = useContext(AuthContext)
  console.log(auth)
  useEffect(() => {
    setInitialName(formState.inputs.name?.value || '')
    setInitialLastName(formState.inputs.lastName?.value || '')

    const savedImage = localStorage.getItem('selectedRealEstateImage')
    if (savedImage) {
      setSelectedImage(savedImage)
      setHasNewImage(true)
    }
  }, [])

  const handleFocus = () => {
    if (!isFocused) setIsFocused(true)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        ToastNotification(
          'error',
          'حجم تصویر باید کمتر از ۲ مگابایت باشد',
          5000
        )
        return
      }
      if (!file.type.startsWith('image/')) {
        ToastNotification('error', 'فقط فرمت‌های تصویر مجاز هستند', 5000)
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Image = reader.result as string
        setSelectedImage(base64Image)
        setHasNewImage(true)
        localStorage.setItem('selectedRealEstateImage', base64Image)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    setHasNewImage(false)
    localStorage.removeItem('selectedRealEstateImage')
  }

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleSubmit = async () => {
    const name = formState.inputs.name_RealEstate_cms?.value ?? ''
    const tagline = formState.inputs.tagline_cms?.value ?? ''
    const address = formState.inputs.Address_RealEstate_cms?.value ?? ''
    const province = selectedProvince?.id
    const city = selectedCity !== 'شهر خود را انتخاب کنید' ? selectedCity : ''

    if (!name || !tagline || !address || !province || !city || !selectedImage) {
      return ToastNotification('error', 'لطفاً همهٔ فیلدها را کامل کنید', 5000)
    }

    let logoFile: File | undefined
    if (hasNewImage && selectedImage) {
      logoFile = dataURLtoFile(selectedImage, 'realestate-logo.jpg')
    }

    const formData = new FormData()
    if (hasNewImage && selectedImage?.startsWith('data:image')) {
      logoFile = dataURLtoFile(selectedImage, 'realestate-logo.jpg')
      formData.append('image', logoFile)
    }
    formData.append('name', name)
    formData.append('tagline', tagline)
    formData.append('address', address)
    formData.append('province_id', String(province))
    formData.append('city', city)

    const rawToken = localStorage.getItem('userToken') ?? ''
    const token = rawToken.replace(/^"|"$/g, '').replace(/\\/g, '')
    if (!token) {
      auth.logout()
      return ToastNotification(
        'error',
        'توکن یافت نشد، لطفاً دوباره وارد شوید',
        5000
      )
    }

    try {
      setIsSubmitting(true)
      const res = await createRealEstate(formData, token)
      console.log('سرور پاسخ داد:', res.data)
      ToastNotification('success', 'ملک با موفقیت ایجاد شد!', 5000)
    } catch (err) {
      console.error('خطا در ایجاد ملک:', err)
      ToastNotification('error', 'خطا در ایجاد ملک، دوباره تلاش کنید', 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const { data: provincesData, isLoading } = useQuery({
    queryKey: ['Provinces'],
    queryFn: getingProvinces,
    staleTime: 5000,
    refetchOnMount: false,
  })

  const provinces: Province[] = Array.isArray(provincesData?.data)
    ? provincesData.data
    : []

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  )
  const [selectedCity, setSelectedCity] = useState<string>(
    'شهر خود را انتخاب کنید'
  )

  const { data: citiesData, isLoading: isLoadingCities } = useQuery({
    queryKey: ['Cities', selectedProvince?.id],
    queryFn: async (): Promise<AxiosResponse> => {
      if (!selectedProvince?.id)
        return Promise.resolve({ data: [] } as AxiosResponse)
      return await getingCities(selectedProvince.id)
    },
    staleTime: 5000,
    refetchOnMount: false,
    enabled: !!selectedProvince,
  })

  const cities: City[] = Array.isArray(citiesData?.data) ? citiesData.data : []

  const handleProvinceSelect = (name: string, id: number) => {
    const province = provinces.find((p) => p.id === id)
    setSelectedProvince(province ? { ...province, name } : null)
    localStorage.setItem('province', name)
    setSelectedCity('شهر خود را انتخاب کنید')
  }

  const handleCitySelect = (name: string) => {
    setSelectedCity(name)

    localStorage.setItem('city', name)
  }
  useEffect(() => {
    if (selectedCity !== 'شهر خود را انتخاب کنید') {
      localStorage.setItem(
        'Address_RealEstate_cms_value',
        formState?.inputs?.Address_RealEstate_cms.value
      )
    }
  }, [])

  useEffect(() => {
    const savedProvinceName = localStorage.getItem('province')
    const savedCityName = localStorage.getItem('city')
    if (savedProvinceName) {
      const foundProvince = provinces.find((p) => p.name === savedProvinceName)
      if (foundProvince) setSelectedProvince(foundProvince)
    }
    if (savedCityName) setSelectedCity(savedCityName)
  }, [provinces])

  const disabled =
    !formState.inputs?.name_RealEstate_cms?.isValid ||
    !formState.inputs?.tagline_cms?.isValid ||
    !formState.inputs?.Address_RealEstate_cms?.isValid ||
    !selectedImage

  return (
    <CMSLayout title=" ایجاد ویرایش ملک مستغلات" panel={false}>
      <div className="container">
        <div className="text-gray-700 text-xs md:text-sm font-shabnam mt-1 mr-2 ">
          <strong className=" text-primary  font-shabnamMedium ">توجه:</strong>
          «اول اطلاعات ملک رو ثبت کن، نگران{' '}
          <strong className="text-primary  ">ویرایش</strong> نباش! بعد از ثبت،
          هر وقت خواستی می‌تونی همین‌جا همه چیز رو{' '}
          <strong className="text-primary  ">ویرایش</strong> کنی.»
        </div>
      </div>
      <div className="px-4 md:px-18 lg:px-24 pt-3">
        {/* تصویر پروفایل */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-25.5 h-25.5 border border-gray-AD rounded-lg center relative">
            {selectedImage ? (
              <>
                <img
                  src={selectedImage}
                  alt="تصویر آپلود‌شده"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(event) => {
                    ;(event.target as HTMLImageElement).src =
                      '/img/Photo Place.png'
                  }}
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 left-2 cursor-pointer bg-primary text-white rounded-full p-1"
                >
                  <FaTrash className="w-2 h-2" />
                </button>
              </>
            ) : (
              <>
                <CgProfile className="w-17 h-7/12 text-gray-71" />
                <div className="absolute right-5 bottom-3 w-7.5 h-7.5 rounded-full center bg-gray-ED">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <LuImagePlus className="text-gray-AD w-5 h-5" />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* فرم اطلاعات */}
        <div className="flex flex-col w-full mt-4 gap-5">
          <Input
            id="name_RealEstate_cms"
            type="text"
            placeholder="نام املاک را وارد کنید"
            element="text"
            className=" w-full h-full py-3  !outline-0   md:py-5 pr-10  rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
            validations={[
              requiredValidator(),
              minValidator(3),
              maxValidator(25),
              persianValidator(),
            ]}
            onInputHandler={handleInputChange}
            onFocus={handleFocus}
            errorMessage={formState.inputs.name_RealEstate_cms?.errorMessage}
            isFocused={isFocused}
            validationMessageSuccess="نام املاک شده معتبر است"
            validationMessageError="نام املاک شده معتبر نیست"
            icon={
              <BsHouseAdd className="absolute w-3.5 h-3.5 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            }
          />

          <Input
            id="tagline_cms"
            type="text"
            placeholder="شعار  خود را وارد کنید"
            element="text"
            className=" w-full h-full py-3  !outline-0   md:py-5 pr-10  rounded-xl  border !border-gray-AD bg-transparent  placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
            validations={[
              requiredValidator(),
              minValidator(3),
              maxValidator(60),
              persianValidator(),
            ]}
            onInputHandler={handleInputChange}
            onFocus={handleFocus}
            errorMessage={formState.inputs.tagline_cms?.errorMessage}
            isFocused={isFocused}
            validationMessageSuccess="شعار  وارد شده معتبر است"
            validationMessageError=" شعار وارد شده معتبر نیست"
            icon={
              <BsHouseAdd className="absolute w-3.5 h-3.5 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            }
          />
          <div className="flex flex-col">
            <div>
              <div>
                <Input
                  id="Address_RealEstate_cms"
                  type="text"
                  placeholder=" آدرس  خود را وارد کنید "
                  element="text"
                  className=" w-full h-full   !outline-0 pr-10 lg:pr-8   py-3  text-sm  lg:text-base  border !border-gray-AD bg-transparent  placeholder:text-gray-1000 flex items-center    rounded-lg mt-2 "
                  validations={[
                    requiredValidator(),
                    minValidator(15),
                    maxValidator(250),
                  ]}
                  onInputHandler={handleInputChange}
                  onFocus={handleFocus}
                  errorMessage={formState.inputs.name?.errorMessage}
                  isFocused={isFocused}
                  validationMessageSuccess={` آدرس  وارد شده معتبر است`}
                  validationMessageError={`   آدرس   وارد شده معتبر نیست`}
                  icon={
                    <IoLocationSharp className="absolute w-6 h-6 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  }
                />
              </div>
            </div>
            {/* انتخاب استان */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-9 mt-5">
              <div className="flex flex-col items-start gap-1.5 font-shabnam text-sm">
                <label className="text-sm lg:text-lg font-shabnamBold">
                  استان
                </label>
                <SelectBox
                  options={
                    isLoading
                      ? [{ id: 0, name: 'در حال بارگذاری...' }]
                      : provinces.map((p) => ({ id: p.id, name: p.name }))
                  }
                  selectedOption={
                    selectedProvince
                      ? selectedProvince.name
                      : 'لطفاً استان خود را انتخاب کنید'
                  }
                  onSelect={handleProvinceSelect}
                  width="w-full"
                  responsiveWidth="w-full"
                  responsiveHeight="h-12"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5 font-shabnam   tsxt-[10px] md:text-sm">
                <label className="text-sm lg:text-lg font-shabnamBold">
                  شهر
                </label>
                <SelectBox
                  options={
                    isLoadingCities
                      ? [{ id: 0, name: 'در حال بارگذاری...' }]
                      : cities.length
                      ? cities
                      : [{ id: 0, name: 'لطفاً استان خود را انتخاب کنید' }]
                  }
                  selectedOption={selectedCity}
                  onSelect={handleCitySelect}
                  width="w-full"
                  responsiveWidth="w-full"
                  responsiveHeight="h-12"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end mt-11.5 gap-x-4">
            <button
              onClick={handleSubmit}
              disabled={disabled || isSubmitting}
              className={`bg-primary border rounded-lg px-3 lg:px-15 py-2 text-white font-shabnam ${
                disabled || isSubmitting
                  ? 'opacity-40 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              {isSubmitting
                ? 'در حال ذخیره...'
                : disabled
                ? 'لطفاً اطلاعات را کامل کنید'
                : 'ذخیره اطلاعات'}
            </button>
          </div>
        </div>
      </div>
    </CMSLayout>
  )
}

export default RealEstateRegistration
