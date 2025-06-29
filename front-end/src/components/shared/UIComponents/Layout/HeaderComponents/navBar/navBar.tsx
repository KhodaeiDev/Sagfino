import Logo from '../../../logo/logo'
import { NavLink } from 'react-router'
import { useContext, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowBack } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { LuHousePlus } from 'react-icons/lu'
import { PiNewspaperClipping } from 'react-icons/pi'
import { IoIosPeople } from 'react-icons/io'
import { CiHome } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { useScrollFixed } from '../../../../../../Hooks/shared/shared'
import { AuthContext } from '../../../../../../context/auth/authContext'
import { IoIosArrowDown } from 'react-icons/io'

interface MenueMobailProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar: React.FC = () => {
  const isFixed = useScrollFixed(300)
  const auth = useContext(AuthContext)
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="container pt-10 relative">
        <div
          className={`hidden lg:flex h-25 md:h-28.75 bg-gray-f9 px-8 py-6.5 items-center justify-between text-base xl:text-xl rounded-2xl transition-shadow duration-1000 ${
            isFixed
              ? 'fixed top-0 left-0 w-full bg-white shadow-primary-tint-6  shadow-lg   z-50 rounded-none'
              : ''
          }`}
        >
          <div className="flex items-center gap-2 lg:gap-11">
            <NavLink to={'/'}>
              <Logo />
            </NavLink>
            <ul className="flex items-center justify-between gap-3 xl:gap-6 text-gray-1000">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `hover:text-primary hover:custom-underline-hover ${
                      isActive ? 'text-primary custom-underline' : ''
                    }`
                  }
                >
                  خانه
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/Rent/Rent'}
                  className={({ isActive }) =>
                    `hover:text-primary hover:custom-underline-hover ${
                      isActive ? 'text-primary custom-underline' : ''
                    }`
                  }
                >
                  اجاره | خرید
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/Realestates/Realestates'}
                  className={({ isActive }) =>
                    `hover:text-primary hover:custom-underline-hover ${
                      isActive ? 'text-primary custom-underline' : ''
                    }`
                  }
                >
                  املاک و مستغلات
                </NavLink>
              </li>
              <NavLink
                to={'/AboutUs/AboutUs'}
                className={({ isActive }) =>
                  `hover:text-primary hover:custom-underline-hover ${
                    isActive ? 'text-primary custom-underline' : ''
                  }`
                }
              >
                درباره ما
              </NavLink>
              <li>
                <NavLink
                  to={'/ContactUs/ContactUs'}
                  className={({ isActive }) =>
                    `hover:text-primary hover:custom-underline ${
                      isActive ? 'text-primary custom-underline' : ''
                    }`
                  }
                >
                  ارتباط با ما
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-9">
            <div className="relative   group  transition-all duration-500 text-gray-1000  h-7 ">
              <div className="hover:text-primary hover:custom-underline">
                {auth.userInfo ? (
                  <div className=" cursor-pointer  flex items-center gap-x-1.5 ">
                    <IoIosArrowDown
                      className={` text-xl transition-all duration-300   rotate-0   group-hover:rotate-180  `}
                    />
                    <span>
                      {auth?.userInfo.firstName} {auth.userInfo.lastName}
                    </span>
                  </div>
                ) : (
                  <NavLink to={'/auth/StepThree'}>ورود | ثبت نام</NavLink>
                )}
              </div>

              {auth.userInfo && (
                <div
                  className={`absolute top-8 p-3 -left-2 transition-all duration-500    opacity-0  group-hover:opacity-100 group-hover:visible   
                        invisible
                 flex   flex-col gap-y-2 items-center w-50 bg-white shadow-lg rounded-lg py-2`}
                >
                  <NavLink
                    to="/cms/EditInformation"
                    className={({ isActive }) =>
                      `block w-full px-4 py-2 transition-all duration-300 hover:bg-primary hover:text-white rounded-lg ${
                        isActive ? 'hover:bg-primary hover:text-white' : ''
                      }`
                    }
                  >
                    پنل کاربری
                  </NavLink>
                  {auth.userInfo.role == 'admin' ? (
                    <NavLink
                      to="/AdminPanel/users"
                      className={({ isActive }) =>
                        `block w-full px-4 py-2 transition-all duration-300 hover:bg-primary hover:text-white rounded-lg ${
                          isActive ? ' bg-primary text-white ' : ''
                        }`
                      }
                    >
                      پنل مدیریت
                    </NavLink>
                  ) : (
                    ''
                  )}
                  <span
                    onClick={auth.logout}
                    className="block w-full  cursor-pointer transition-all duration-500   px-4 py-2 text-red-500 hover:bg-primary hover:text-white rounded-lg"
                  >
                    خروج
                  </span>
                </div>
              )}
            </div>

            <NavLink
              to={'/registerAnAd/StepOneAdRE'}
              className={`group text-sm w-20 h-10 xl:w-25.5 transition duration-500 xl:h-12 border-solid border-1 border-primary rounded-lg text-primary flex items-center justify-center 
  hover:bg-primary hover:text-white hover:shadow-lg `}
            >
              <span className="group-hover:text-white transition duration-500">
                ثبت آگهی
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

const NavBarMobail: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isFixed = useScrollFixed(168)

  return (
    <>
      <div className=" container ">
        <div
          className={` flex lg:hidden h-25 md:h-28.75 bg-white px-8 py-6.5 items-center justify-between text-base xl:text-xl rounded-2xl  transition-shadow
             duration-1000   ${
               isFixed
                 ? 'fixed top-0 left-0 w-full bg-white shadow-primary-tint-6  shadow-lg   z-50 rounded-none'
                 : ''
             }`}
        >
          <button
            className={` hamburger ${isOpen ? 'open' : ''} lg:!hidden `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
          <NavLink
            to={'/registerAnAd/StepOneAdRE'}
            className={`group text-sm w-20 h-10 xl:w-25.5 transition duration-500 xl:h-12 border-solid border-1 border-primary rounded-lg text-primary flex items-center justify-center 
  hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 hover:-translate-y-1`}
          >
            <span className="group-hover:text-white transition duration-500">
              ثبت آگهی
            </span>
          </NavLink>
        </div>
      </div>
      <MenueMobail isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

const MenueMobail: React.FC<MenueMobailProps> = ({ isOpen, setIsOpen }) => {
  const auth = useContext(AuthContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div
        className={` fixed top-0 left-0 w-full h-full z-10000  overflow-y-scroll bg-white transform transition duration-1000 ease-in-out ${
          isOpen ? ' translate-x-0' : '-translate-x-full'
        } lg:hidden shadow-md`}
      >
        <div className=" flex justify-end p-4">
          <div
            onClick={() => setIsOpen(false)}
            className=" w-6 h-6 center  rounded-2xl cursor-pointer border border-gray-1000  text-lg"
          >
            <IoMdClose />
          </div>
        </div>
        <div className="relative w-full">
          {/* دکمه نمایش منو */}
          <div
            className={`font-shabnamMedium flex flex-col  items-start transition-all duration-500 ${
              isMobileMenuOpen ? ' h-25 ' : ' !h-15'
            }   h-20 p-4 bg-gray-100 gap-1 mt-5 cursor-pointer`}
          >
            <div className=" flex items-center gap-x-2 pb-0.5 ">
              <CgProfile className="text-2xl" />
              {auth.userInfo ? (
                <span
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className=" flex items-center gap-1.5"
                >
                  {auth.userInfo.firstName} {auth.userInfo.lastName}
                  <IoIosArrowDown
                    className={` ${
                      isMobileMenuOpen ? ' rotate-180' : ' rotate-0'
                    } transition-all duration-500 `}
                  />
                </span>
              ) : (
                <NavLink to={'/auth/StepThree'}>ورود | ثبت نام</NavLink>
              )}
            </div>

            {/* منوی شناور */}
            {auth.userInfo && (
              <div
                className={` flex flex-col gap-y-2 transition-all duration-500 text-xs ${
                  isMobileMenuOpen
                    ? ' visible opacity-100'
                    : '  invisible  opacity-0'
                }`}
              >
                <NavLink
                  to="/cms/EditInformation"
                  className="block pr-8  hover:bg-gray-200 rounded-lg text-gray-900"
                >
                  پنل کاربری
                </NavLink>
                <span
                  onClick={auth.logout}
                  className=" text-right  pr-8  text-red-500 hover:bg-gray-200 rounded-lg"
                >
                  خروج
                </span>
              </div>
            )}
          </div>
        </div>
        <ul className="font-shabnam  flex flex-col items-start gap-3 text-gray-1000 *:w-full    p-4 ">
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full hover:text-primary  hover:custom-underline ${
                  isActive ? 'text-primary custom-underline' : ''
                }`
              }
            >
              <div className=" flex gap-2 mt-5">
                <CiHome className="text-2xl" />
                خانه
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Rent/Rent'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full hover:text-primary  hover:custom-underline ${
                  isActive ? 'text-primary custom-underline' : ''
                }`
              }
            >
              <div className=" flex   gap-2  mt-5">
                <FaHouse className="text-2xl" />
                اجاره | خرید
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to={'/Realestates/Realestates'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full  hover:text-primary  hover:custom-underline ${
                  isActive ? 'text-primary custom-underline' : ''
                }`
              }
            >
              <div className=" flex  gap-2  mt-5">
                <LuHousePlus className="text-2xl" />
                املاک و مستغلات
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/AboutUs/AboutUs'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full hover:text-primary  hover:custom-underline  ${
                  isActive ? 'text-primary custom-underline' : ''
                }`
              }
            >
              <div className=" flex   gap-2  mt-5">
                <IoIosPeople className="text-2xl" />
                درباره ما
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/ContactUs/ContactUs'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full hover:text-primary  hover:custom-underline  ${
                  isActive
                    ? 'text-primary custom-underline'
                    : '  hover:text-primary hover:custom-underline'
                }`
              }
            >
              <div className=" flex   gap-2  mt-5">
                <PiNewspaperClipping className="text-2xl" />
                ارتباط با ما
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export { NavBar, NavBarMobail }
