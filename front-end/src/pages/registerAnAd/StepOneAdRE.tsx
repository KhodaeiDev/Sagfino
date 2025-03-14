import React, { useState } from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import Btn from '../../components/AdRegistration/btn'
import { Step } from '../../components/AdRegistration/ProgressBar'

const steps: Step[] = [
  { id: 1, status: 'active' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepOneAdRE: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    ' لطفا شهر مورد نظر خود را انتخاب کنید'
  )

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

  document.title = 'مرحله ی اول-ثبت آگهی'

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container py-14 md:py-20">
          <AdRegistrationContainer>
            <div className="flex flex-col w-full">
              <ProgressBar steps={steps} />
              {/* form */}
              <div className="flex flex-col">
                <SectionHeaderAdRe title="لطفا موارد زیر را تکمیل کنید" />
                {/* select box */}
                <div className=" flex flex-col xl:flex-row items-center gap-4 justify-between mt-10 ">
                  <div>
                    <label
                      htmlFor=" "
                      className="  text-sm lg:text-lg font-shabnamBold "
                    >
                      شهر
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        width="w-70.5"
                        height="h-12"
                      >
                        <li>جدیدترین</li>
                        <li>قدیمی ترین</li>
                        <li>ارزان ترین</li>
                        <li>گران ترین</li>
                      </SelectBox>
                    </div>
                  </div>
                  <div>
                    <label
                      className="  font-shabnamBold text-sm lg:text-lg "
                      htmlFor=""
                    >
                      منطقه
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        width="w-70.5"
                        height="h-12"
                      >
                        <li>جدیدترین</li>
                        <li>قدیمی ترین</li>
                        <li>ارزان ترین</li>
                        <li>گران ترین</li>
                      </SelectBox>
                    </div>
                  </div>
                </div>
                {/* input */}
                <div className=" flex flex-col xl:flex-row items-center gap-4 justify-between mt-5 xl:mt-30 ">
                  {/* custom input */}
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg"
                      htmlFor=""
                    >
                      خیابان اصلی
                    </label>
                    <div className=" p-2 text-base  border-blue-400 shadow-blue-400/50 shadow-lg   flex items-center  w-72.5 h-12  border  rounded-lg mt-2 ">
                      <input
                        placeholder="آدرس خود را وارد کنید"
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg "
                      htmlFor=""
                    >
                      خیابان اصلی/کوچه
                    </label>
                    <div className=" p-2  text-base  flex items-center w-72.5 h-12  border shadow-lg   border-blue-400 shadow-blue-400/50  rounded-lg mt-2 ">
                      <input
                        placeholder="آدرس خود را وارد کنید"
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex   items-center justify-center  gap-x-3 mt-10 lg:mt-25 ">
                {/* <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                /> */}
                <Btn title="ادامه " link="/registerAnAd/StepTwoAdRE" />
              </div>
            </div>
          </AdRegistrationContainer>
        </div>
      </div>
    </>
  )
}

export default StepOneAdRE
