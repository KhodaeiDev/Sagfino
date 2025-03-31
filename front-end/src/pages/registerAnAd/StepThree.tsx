import React from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import { Step } from '../../components/AdRegistration/ProgressBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'active' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepThreeAdRE: React.FC = () => {
  document.title = 'مرحله ی سوم-ثبت آگهی'

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container  ">
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
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg "
                      htmlFor=""
                    >
                      متراژ(متر مربع)
                    </label>
                    <div className=" p-2  text-base  flex items-center w-72.5 h-12  border shadow-lg   border-blue-400 shadow-blue-400/50  rounded-lg mt-2 ">
                      <input
                        placeholder="مساحت ملک خود را بنوسید"
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
                      اتاق
                    </label>
                    <div className=" p-2  text-base  flex items-center w-72.5 h-12  border shadow-lg   border-blue-400 shadow-blue-400/50  rounded-lg mt-2 ">
                      <input
                        placeholder="تعداد اتاق ها را بنوسید"
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
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
                      طبقه
                    </label>
                    <div className=" p-2 text-base  border-blue-400 shadow-blue-400/50 shadow-lg   flex items-center  w-72.5 h-12  border  rounded-lg mt-2 ">
                      <input
                        placeholder=" طبقه ملک خود را بنوسید"
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
                      تعداد طبقات
                    </label>
                    <div className=" p-2  text-base  flex items-center w-72.5 h-12  border shadow-lg   border-blue-400 shadow-blue-400/50  rounded-lg mt-2 ">
                      <input
                        placeholder="طبقه ملک خود را بنوسید"
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
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
                  link="/registerAnAd/StepTwo"
                />
                <Btn title="ادامه " link="/registerAnAd/StepFour" />
              </div>
            </div>{' '}
          </AdRegistrationContainer>
        </div>
        {/* // Footer */}
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepThreeAdRE
