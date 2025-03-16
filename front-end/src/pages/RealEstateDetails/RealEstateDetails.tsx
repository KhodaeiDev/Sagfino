import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import { TiTick } from 'react-icons/ti'
import { CiLocationOn } from 'react-icons/ci'
import { TbHomeEco } from 'react-icons/tb'
import PersonalInformation from '../../components/shared/Cards/personalInformationBox/Personalinformation'

const RealEstateDetails: React.FC = () => {
  return (
    <>
      <NavBarMobail />
      {/* Header */}
      <div className=" relative RealEstateDetails">
        {/* Navbar */}
        <NavBar />
        {/* logo */}
        <div className="container">
          <div className=" absolute  -bottom-10 lg:-bottom-35 center w-24 h-24  lg:w-xs lg:h-80 rounded-full  bg-gray-f9 ">
            <img
              className=" w-12.5 h-12.5 lg:w-40 lg:h-40 "
              src="/img/Real Estate Logo 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* EstateDetails  */}
      <div className="container mt-15 lg:mt-50 mb-100 ">
        <div className="flex items-start  justify-between flex-col-reverse lg:flex-row  ">
          {/*  EstateDetails   right */}
          <div className=" w-full text-center lg:text-right  mb-50 flex flex-col justify-center lg:justify-between gap-y-5  mt-15 ">
            <div className=" flex items-center justify-center lg:justify-start  gap-x-2 ">
              <h2 className=" text-sm md:text-4xl font-shabnamBold text-Gray-35  ">
                املاک توسی
              </h2>
              <div className=" center justify-center lg:justify-between  w-4 h-4  md:w-10 md:h-10 rounded-full bg-blue-tick  ">
                <TiTick className=" text-white w-3 h-3 md:w-7.5 md:h-7.5  " />
              </div>
            </div>
            <span className=" font-shabnam  text-10 lg:text-lg  text-gray-1000 ">
              میزان رضایتمندی کاربران: ۴/۹ از ۵
            </span>
            <h3 className=" font-shabnamBold text-Gray-35  text-xs md:text-3xl ">
              تخصص ما یافتن خانه دلخواه شماست.
            </h3>
            <div className=" text-gray-1000 flex items-center  justify-center lg:justify-start  gap-x-2 font-shabnamBold text-xs lg:text-2xl ">
              <CiLocationOn></CiLocationOn>
              تهران، نیاوران، سه راه یاسر
            </div>
            <div className=" text-gray-1000 flex items-center  justify-center lg:justify-start gap-x-2 font-shabnamBold text-xs lg:text-2xl ">
              <TbHomeEco></TbHomeEco>
              تهران، نیاوران، سه راه یاسر
            </div>
            <div className=" flex items-center  justify-center lg:justify-between  ">
              <div className=" border center w-46.5  justify-center lg:justify-between  h-12 border-primary  text-primary rounded-lg cursor-pointer ">
                تماس با ما
              </div>
            </div>
          </div>

          <div className=" w-full flex items-center justify-center  lg:justify-end  mt-5 lg:mt-0 ">
            <PersonalInformation></PersonalInformation>
          </div>
        </div>
      </div>
    </>
  )
}

export default RealEstateDetails
