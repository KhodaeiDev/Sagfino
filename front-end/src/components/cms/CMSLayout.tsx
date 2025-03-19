import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../shared/UIComponents/Layout/HeaderComponents/navBar/navBar'

import { CgProfile } from 'react-icons/cg'
import { BiEdit } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { RiBookmarkLine } from 'react-icons/ri'
import { HiOutlineLogout } from 'react-icons/hi'
import { NavLink } from 'react-router'

type CMSLayoutProps = {
  title: string
  children: React.ReactNode
}

const CMSLayout: React.FC<CMSLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NavBar />
      <NavBarMobail />
      <div className="container mt-20">
        {/* layot */}
        <div className=" w-full flex  gap-x-6 ">
          {/* right */}
          <div className="w-1/4  hidden  pb-10 h-auto  lg:flex flex-col  gap-y-2 items-center justify-center">
            {/* profile */}
            <div className="w-full h-26.25 border border-gray-D9 py-6 pr-6  rounded-xl ">
              <div className=" flex  items-center gap-x-2 text-gray-71  ">
                <CgProfile className=" w-10 h-10 " />
                <div className=" flex flex-col items-center  ">
                  <h4 className=" text-Gray-35 text-lg font-shabnam ">
                    نام کاربر
                  </h4>
                  <span className=" text-base font-shabnam ">نوع فعالیت</span>
                </div>
              </div>
            </div>
            {/* navBar */}
            <div className="w-full h-full border border-gray-D9 rounded-xl  px-6 pt-4 ">
              <ul className="flex *:flex *:items-center *:gap-x-2 flex-col  gap-y-5 **:text-gray-71  font-shabnam text-sm    ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                      : ''
                  }
                  to={'/cms/EditInformation'}
                >
                  <BiEdit className="w-5 h-5" />
                  <span> ویرایش اطلاعات</span>
                </NavLink>

                <NavLink
                  to={'/cms/RegisterNewAd'}
                  className={({ isActive }) =>
                    isActive
                      ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                      : ''
                  }
                >
                  <IoAddCircleOutline className=" w-5 h-5 " />
                  <span> ثبت آگهی جدید</span>
                </NavLink>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                      : ''
                  }
                >
                  <MdOutlineReceiptLong className=" w-5 h-5 " />
                  <span> آگهی من</span>
                </NavLink>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                      : ''
                  }
                >
                  <RiBookmarkLine className=" w-5 h-5 " />
                  <span> آگهی ذخیره شده</span>
                </NavLink>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                      : ''
                  }
                >
                  <HiOutlineLogout className=" w-5 h-5 " />
                  <span> خروج</span>
                </NavLink>
              </ul>
            </div>
          </div>
          {/* left */}
          <div className=" w-full lg:w-3/4 h-auto  border border-gray-D9  rounded-xl py-8 ">
            <div className=" flex flex-col ">
              <div className=' pr-6 '>
                <h3 className=" text-2xl font-shabnamBold ">{title}</h3>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CMSLayout
