import React, { memo, useContext } from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../shared/UIComponents/Layout/HeaderComponents/navBar/navBar'

import { CgProfile } from 'react-icons/cg'
import { BiEdit } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { RiBookmarkLine } from 'react-icons/ri'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import { NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../../context/auth/authContext'

type CMSLayoutProps = {
  title: string
  children: React.ReactNode
  panel: boolean
}

const CMSLayout: React.FC<CMSLayoutProps> = memo(
  ({ title, children, panel }) => {
    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const logOutHandler = () => {
      auth.logout()
      navigate('/')
    }
    return (
      <>
        <NavBar />
        <NavBarMobail />
        <div className="container mt-20">
          {/* layot */}
          <div className=" w-full flex flex-col lg:flex-row  gap-x-6 ">
            {/* right */}
            <div className=" w-full lg:w-1/4    pb-10 h-full  flex flex-col  gap-y-2 items-center justify-center">
              {/* profile */}
              <div className="w-full h-26.25 border border-gray-D9 py-6 pr-6  rounded-xl ">
                <div className=" flex  items-center gap-x-2 text-gray-71  ">
                  <CgProfile className=" w-10 h-10 " />
                  <div className=" flex flex-col items-center  ">
                    <h4 className=" text-Gray-35 text-lg font-shabnam ">
                      {auth.userInfo?.firstName} {auth.userInfo?.lastName}
                    </h4>
                    <span className=" text-base font-shabnam ">
                      {' '}
                      {auth.userInfo?.role === 'user'
                        ? 'کاربر عادی'
                        : auth.userInfo?.role === 'admin'
                        ? 'آدمین'
                        : auth.userInfo?.role === 'real_estate_agent'
                        ? 'املاکی'
                        : ''}
                    </span>
                  </div>
                </div>
              </div>
              {/* navBar */}
              <div className="w-full h-auto border border-gray-D9 rounded-xl  px-6 pt-4 pb-9 ">
                <ul className="flex **:flex **:items-center **:gap-x-2 flex-col  gap-y-10 **:text-gray-71  font-shabnam text-sm    ">
                  {!panel && (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary  rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                        to={'/cms/EditInformation'}
                      >
                        <BiEdit className="w-5 h-5" />
                        <span> ویرایش اطلاعات</span>
                      </NavLink>
                    </li>
                  )}
                  {panel && (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary  rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                        to={'/AdminPanel/users'}
                      >
                        <CgProfile className="w-5 h-5" />
                        <span> کاربران </span>
                      </NavLink>
                    </li>
                  )}
                  {panel && (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary  rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                        to={'/AdminPanel/advertisements'}
                      >
                        <AiOutlineCheckCircle className="w-5 h-5" />
                        <span> آگهی هایی ثبت شده </span>
                      </NavLink>
                    </li>
                  )}

                  {!panel && (
                    <li>
                      <NavLink
                        to={'/registerAnAd/StepOneAdRE'}
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                      >
                        <IoAddCircleOutline className=" w-5 h-5 " />
                        <span> ثبت آگهی جدید</span>
                      </NavLink>
                    </li>
                  )}
                  {!panel && (
                    <li>
                      <NavLink
                        to={'/cms/MyAds'}
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                      >
                        <MdOutlineReceiptLong className=" w-5 h-5 " />
                        <span> آگهی من</span>
                      </NavLink>
                    </li>
                  )}
                  {!panel && (
                    <li>
                      <NavLink
                        to={'/cms/SavedAd'}
                        className={({ isActive }) =>
                          isActive
                            ? `border-primary rounded-xs border-r-6 pr-3 **:!text-Gray-35 `
                            : ''
                        }
                      >
                        <RiBookmarkLine className=" w-5 h-5 " />
                        <span> آگهی ذخیره شده</span>
                      </NavLink>
                    </li>
                  )}

                  <li
                    className=" cursor-pointer text-lg"
                    onClick={() => logOutHandler()}
                  >
                    <HiOutlineLogout className=" w-5 h-5  !stroke-primary  " />
                    <span className=" !text-primary  "> خروج</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* left */}
            <div className=" w-full lg:w-3/4 h-auto  border border-gray-D9  rounded-xl py-8 ">
              <div className=" flex flex-col ">
                <div className=" pr-6 ">
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
)
export default CMSLayout
