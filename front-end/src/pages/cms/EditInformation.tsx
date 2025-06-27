import React, { useCallback, useContext, useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { CgProfile } from 'react-icons/cg'
import { LuImagePlus } from 'react-icons/lu'
import { AiOutlineUser } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  persianValidator,
  requiredValidator,
} from '../../validators/rules'
import { updateUserProfile } from '../../services/axois/request/cms/cms'
import UseForm from '../../Hooks/useForm'
import { FormType } from '../../Hooks/useformType'
import { AuthContext } from '../../context/auth/authContext'

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

const EditInformation: React.FC = () => {
  const [formType] = useState<FormType>('edit-information')
  const [formState, onInputHandler, dispatch] = UseForm(formType)
  const [, setInitialName] = useState('')
  const [, setInitialLastName] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hasNewImage, setHasNewImage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'سقفینو-ویرایش اطلاعات'
  }, [])

  const auth = useContext(AuthContext)
  console.log(auth)
  useEffect(() => {
    setInitialName(formState.inputs.name?.value || '')
    setInitialLastName(formState.inputs.lastName?.value || '')

    if (auth.userInfo?.image) {
      setSelectedImage(
        `https://saghfino.abolfazlhp.ir/storage/${auth.userInfo.image}`
      )
    }
  }, [
    formState.inputs.name?.value,
    formState.inputs.lastName?.value,
    auth.userInfo?.image,
  ])

  const handleFocus = () => {
    if (!isFocused) setIsFocused(true)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
        setHasNewImage(true)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    setHasNewImage(false)
  }

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  const handleSubmit = async () => {
    const currentName = formState.inputs.name?.value || ''
    const currentLastName = formState.inputs.lastName?.value || ''
    const imageFile =
      selectedImage && hasNewImage
        ? dataURLtoFile(selectedImage, 'profile.jpg')
        : undefined

    if (!currentName || !currentLastName || (!imageFile && !selectedImage)) {
      console.log('❗ لطفاً تمام فیلدها را کامل کنید.')
      return
    }

    const token = localStorage.getItem('userToken')
    if (!token) {
      console.error('❌ توکن یافت نشد')
      return
    }

    const body = {
      first_name: currentName,
      last_name: currentLastName,
      image: imageFile,
    }

    try {
      setIsSubmitting(true)
      const res = await updateUserProfile(body, token)

      const updatedUser = res.data?.user

      if (updatedUser && auth.login && auth.userInfo) {
        auth.login(
          {
            ...auth.userInfo,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            image: updatedUser.image,
          },
          token
        )
      }

      console.log('✅ اطلاعات با موفقیت ذخیره شد:', res.data)
    } catch (err) {
      console.error('❌ خطا در ذخیره اطلاعات:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const disabled =
    !formState.isFormValid ||
    !formState.inputs.name?.value ||
    !formState.inputs.lastName?.value ||
    (!hasNewImage && !selectedImage)

  return (
    <CMSLayout title="ویرایش اطلاعات" panel={false}>
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
            id="name"
            type="text"
            placeholder="نام خود را وارد کنید"
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
            errorMessage={formState.inputs.name?.errorMessage}
            isFocused={isFocused}
            validationMessageSuccess="نام وارد شده معتبر است"
            validationMessageError="نام وارد شده معتبر نیست"
            icon={
              <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            }
          />

          <Input
            id="lastName"
            type="text"
            placeholder="نام خانوادگی خود را وارد کنید"
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
            errorMessage={formState.inputs.lastName?.errorMessage}
            isFocused={isFocused}
            validationMessageSuccess="نام خانوادگی وارد شده معتبر است"
            validationMessageError="نام خانوادگی وارد شده معتبر نیست"
            icon={
              <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            }
          />
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
    </CMSLayout>
  )
}

export default EditInformation
