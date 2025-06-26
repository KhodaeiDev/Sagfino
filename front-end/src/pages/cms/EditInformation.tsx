import React, { useCallback, useEffect, useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { CgProfile } from 'react-icons/cg'
import { LuImagePlus } from 'react-icons/lu'

import { AiOutlineUser } from 'react-icons/ai'

import { FaTrash } from 'react-icons/fa'
import Btn from '../../components/AdRegistration/btn'
import { FormType } from '../../Hooks/useformType'
import UseForm from '../../Hooks/useForm'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  persianValidator,
  requiredValidator,
} from '../../validators/rules'

const EditInformation: React.FC = () => {
  useEffect(() => {
    document.title = 'سقفینو-ویرایش اطلاعات'
  }, [])

  const [formType] = useState<FormType>('edit-information')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
  }

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )

  return (
    <>
      <CMSLayout title="ویرایش اطلاعات" panel={false}>
        {/* Header */}
        <div className=" px-4 md:px-18 lg:px-24 pt-3 ">
          {/* profile */}
          <div className=" w-full flex justify-center lg:justify-start   ">
            <div className="w-25.5 h-25.5 border border-gray-AD rounded-lg center relative">
              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    alt="تصویر آپلود‌شده"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2  left-2 cursor-pointer bg-primary text-white rounded-full p-1"
                  >
                    <FaTrash className="w-2 h-2" />
                  </button>
                </>
              ) : (
                <>
                  <CgProfile className="w-17 h-7/12 text-gray-71" />
                  <div className="absolute  right-5 bottom-3 w-7.5 h-7.5 rounded-full center bg-gray-ED">
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

          {/* form */}
          <div className="flex flex-col  w-full ">
            {/* input */}
            <div className=" flex flex-col xl:flex-row items-center gap-5   mt-4  ">
              {/* custom input */}

              <div className="w-full  h-full">
                <Input
                  id="name"
                  type="text"
                  placeholder=" نام خود را وارد کنید "
                  element="text"
                  className=" w-full h-full py-3  !outline-0   md:py-5  pr-10 rounded-xl  border !border-gray-AD bg-transparent bo placeholder:text-gray-1000 text-xs md:text-base font-shabnamMedium"
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
                  validationMessageSuccess={` نام وارد شده معتبر است`}
                  validationMessageError={`  نام وارد شده معتبر نیست`}
                  icon={
                    <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  }
                />
              </div>
              {/*last name  */}
              <div className=" w-full  h-full">
                <Input
                  id="lastName"
                  type="text"
                  placeholder="نام خانوادگی  خود را وارد کنید "
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
                  validationMessageSuccess={`نام  خانوادگی  وارد شده معتبر است`}
                  validationMessageError={` نام  خانوادگی  وارد شده معتبر نیست`}
                  icon={
                    <AiOutlineUser className="absolute w-3.5 h-3.5 md:w-5 md:h-5  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  }
                />
              </div>
            </div>
            <div className=" flex flex-col xl:flex-row items-center gap-5     mt-3  ">
              {/* custom input */}
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end  mt-11.5 gap-x-4 ">
            <Btn title="ذخیره اطلاعات"></Btn>
          </div>
        </div>
      </CMSLayout>
    </>
  )
}

export default EditInformation
