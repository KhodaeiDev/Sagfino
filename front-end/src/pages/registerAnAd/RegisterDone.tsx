import React from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import { TiTick } from 'react-icons/ti'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const RegisterDoneAdRE: React.FC = () => {
  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container ">
          <AdRegistrationContainer>
            <div className="flex flex-col">
              <SectionHeaderAdRe
                title="آگهی شما با موفقیت ثبت شد"
                center={true}
              />
              {/* Notebook-style inputs */}

              <div className=" center flex-col  w-full mt-10 ">
                <img
                  src="/img/Group 56.png"
                  className=" relative w-sm h-55 lg:w-lg lg:h-70 "
                  alt="img"
                />
                <div className="  absolute  center text-white w-20 h-20   lg:w-43.5 lg:h-43.5 bg-green-600 rounded-full ">
                  <TiTick className=" w-30 h-30 " />
                </div>
              </div>

              <div className=" flex   items-center justify-center  gap-x-3 mt-10 lg:mt-25 ">
                <Btn title="انتقال به صحفه اصلی " link="/" />
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

export default RegisterDoneAdRE
