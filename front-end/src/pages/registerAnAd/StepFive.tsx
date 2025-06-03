import React, { useEffect } from 'react'
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
  { id: 3, status: 'completed' },
  { id: 4, status: 'completed' },
  { id: 5, status: 'active' },
  { id: 6, status: 'pending' },
]

const StepFiveAdRE: React.FC = () => {
  useEffect(() => {
    document.title = 'مرحله ی پنج-ثبت آگهی'
  }, [])

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container ">
          <AdRegistrationContainer>
            <ProgressBar steps={steps} />
            <div className="flex flex-col">
              <SectionHeaderAdRe title="توضیحات اضافه خود را در این قسمت بنویسید" />
              {/* Notebook-style inputs */}
              <div className="border border-gray-300 p-4  rounded-lg mt-16 bg-white w-full">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-center mb-6  font-shabnam "
                  >
                    <span className="w-8 text-gray-500 text-right mr-2">
                      {i + 1}
                    </span>
                    <input
                      type="text"
                      className="flex-grow border-b border-dashed border-gray-400 outline-none focus:border-blue-500"
                      placeholder="اینجا بنویسید..."
                    />
                  </div>
                ))}
              </div>
              <div className=" flex   items-center justify-center  gap-x-3 mt-10 lg:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepFour"
                  disabled={false}
                />
                <Btn
                  disabled={false}
                  title="ادامه"
                  link="/registerAnAd/StepSix"
                />
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

export default StepFiveAdRE
