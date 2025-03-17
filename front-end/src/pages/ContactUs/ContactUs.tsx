import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import { FiPhone } from 'react-icons/fi'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const ContactUs: React.FC = () => {
  document.title = 'سقفینو-ارتباط با ما'
  return (
    <>
      <NavBar />
      <NavBarMobail />
      <div className="container mt-16">
        {/* main box */}
        <div className=" px-10  pb-10 pt-3  xl:px-31 xl:pb-21 xl:pt-8   border border-gray-D9  rounded-xl w-full h-auto ">
          <h4 className=" font-shabnamBold text-xs lg:text-2xl text-Gray-35 ">
            داستان سقفینو
          </h4>
          {/* title */}
          <div className=" flex flex-col gap-y-2 items-center justify-center mt-6 xl:mt-13.5 ">
            <h2 className=" text-primary font-shabnamMedium text-base lg:text-4xl ">
              تا پیدا کردن بهترین سقف در کنار شماییم{' '}
            </h2>
            <span className=" text-gray-71 font-shabnam text-base lg:text-2xl  ">
              با ما در تماس باشید{' '}
            </span>
          </div>
          {/* btn */}
          <div className=" flex flex-col justify-center items-center mt-5  gap-y-2 ">
            <span className=" text-base text-gray-71 font-shabnam ">
              پشتیبانی ۲۴ ساعته
            </span>
            <div className=" w-48 h-8 lg:w-sm lg:h-12 cursor-pointer gap-x-2  bg-primary  text-white center rounded-lg  font-shabnamMedium text-base ">
              ۰۲۱-۴۱۰۶۷۰۰۰
              <FiPhone />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 ">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default ContactUs
