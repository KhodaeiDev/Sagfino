import React from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import { FaFolderOpen } from 'react-icons/fa'

import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'


const RegisterErrorAdRE: React.FC = () => {
  document.title = 'سقفینو-خطای ثبت نام '

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container ">
          <AdRegistrationContainer>
            <div className="flex flex-col">
              <SectionHeaderAdRe
                title="مشکلی در ثبت آگهی شما به‌وجود آمده!"
                center={true}
              />
              {/* Notebook-style inputs */}
              <div className=" flex flex-col  gap-y-10   items-center justify-center  gap-x-3 mt-10 lg:mt-15 ">
                <Btn
                  title="بازگشت به صحفه ی آگهی"
                  link="/registerAnAd/StepOneAdRE"
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                />
                <div>
                  <FaFolderOpen className=" w-45 h-45  lg:w-lg lg:h-100 text-primary-tint-6 " />
                </div>
              </div>
            </div>
          </AdRegistrationContainer>
        </div>
        {/* // Footer */}
        <Footer />
        <FooterMobail />
      </div>{' '}
    </>
  )
}
export default RegisterErrorAdRE
