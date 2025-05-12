import React, { useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { CgProfile } from 'react-icons/cg'
import { LuImagePlus } from 'react-icons/lu'
import { FiUser } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { PiEnvelopeThin } from 'react-icons/pi'
import { GoKey } from 'react-icons/go'

import { FaTrash } from 'react-icons/fa'
import Btn from '../../components/AdRegistration/btn'

const EditInformation: React.FC = () => {
  document.title = 'سقفینو-ویرایش اطلاعات'

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

  return (
    <>
      <CMSLayout title="ویرایش اطلاعات">
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

              <div className=" py-5 pr-3 text-base  gap-x-3  border-gray-AD flex items-center  w-full h-16  border  rounded-lg mt-2 ">
                <FiUser className=" w-5 h-5  text-gray-1000 " />
                <input
                  placeholder="نام و نام خانوادگی خودرا وارد کنید "
                  className=" w-full placeholder:text-sm placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                  type="text"
                />
              </div>

              <div className=" py-5 pr-3 text-base  gap-x-3  border-gray-AD   flex items-center w-full h-16  border  rounded-lg mt-2 ">
                <FiPhone className=" w-5 h-5  text-gray-1000 " />

                <input
                  placeholder="تلفن همراه خود را وارد کنید "
                  className=" w-full placeholder:text-sm placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                  type="text"
                />
              </div>
            </div>
            <div className=" flex flex-col xl:flex-row items-center gap-5     mt-3  ">
              {/* custom input */}

              <div className=" py-5 pr-3 text-base  gap-x-3  border-gray-AD   flex items-center  w-full h-16  border  rounded-lg mt-2 ">
                <PiEnvelopeThin className=" w-5 h-5  text-gray-1000 " />
                <input
                  placeholder="ایمیل خود را وارد کنید "
                  className=" w-full placeholder:text-sm placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                  type="text"
                />
              </div>

              <div className=" py-5 pr-3 text-base  gap-x-3  border-gray-AD   flex items-center  w-full h-16  border  rounded-lg mt-2 ">
                <GoKey className=" w-5 h-5  text-gray-1000 " />
                <input
                  placeholder="پسورد خود را وارد کنید "
                  className=" w-full placeholder:text-sm placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end  mt-11.5 gap-x-4 ">
            <Btn
              title=" انصراف"
              bgColor="bg-transparent"
              textColor="text-primary"
            ></Btn>
            <Btn title="ذخیره اطلاعات"></Btn>
          </div>
        </div>
      </CMSLayout>
    </>
  )
}

export default EditInformation
