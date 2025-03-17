import React, { useState } from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import Btn from '../../components/AdRegistration/btn'
import { Step } from '../../components/AdRegistration/ProgressBar'
import { Footer, FooterMobail } from '../../components/shared/UIComponents/Layout/footer/footer'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'active' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepFourAdRE: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    ' لطفا شهر مورد نظر خود را انتخاب کنید'
  )

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

  document.title = 'مرحله ی چهارم-ثبت آگهی'

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container ">
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
                      پارکینگ
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        responsiveWidth="w-70.5"
                        responsiveHeight="h-12"
                      >
                        <li>دارد</li>
                        <li> ندارد</li>
                      </SelectBox>
                    </div>
                  </div>
                  <div>
                    <label
                      className="  font-shabnamBold text-sm lg:text-lg "
                      htmlFor=""
                    >
                      نوع سرویس بهداشتی
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        responsiveWidth="w-70.5"
                        responsiveHeight="h-12"
                      >
                        <li>ایرانی</li>
                        <li> فرنگی</li>
                        <li> هردو</li>
                      </SelectBox>
                    </div>
                  </div>
                </div>
                {/* input */}
                <div className=" flex flex-col xl:flex-row items-center gap-4 justify-between mt-5 xl:mt-30 ">
                  {/* custom input */}
                  <div>
                    <label
                      className="  font-shabnamBold text-sm lg:text-lg "
                      htmlFor=""
                    >
                      انباری
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        responsiveWidth="w-70.5"
                        responsiveHeight="h-12"
                      >
                        <li>دارد</li>
                        <li>ندارد</li>
                      </SelectBox>
                    </div>
                  </div>
                  <div>
                    <label
                      className="  font-shabnamBold text-sm lg:text-lg "
                      htmlFor=""
                    >
                      آسانسور
                    </label>
                    <div className=" mt-2 ">
                      <SelectBox
                        onSelect={handleSelect}
                        selectedOption={selectedOption}
                        responsiveWidth="w-70.5"
                        responsiveHeight="h-12"
                      >
                        <li>دارد</li>
                        <li> ندارد</li>
                      </SelectBox>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex   items-center justify-center  gap-x-3 mt-10 lg:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepThreeAdRE"
                />
                <Btn title="ادامه " link="/registerAnAd/StepFiveAdRE" />
              </div>
            </div>
          </AdRegistrationContainer>
        </div>
        {/* // Footer */}
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepFourAdRE
