import Logo from '../../../logo/logo'
import { NavLink } from 'react-router'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowBack } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { IoKeyOutline } from 'react-icons/io5'
import { LuHousePlus } from 'react-icons/lu'
import { PiNewspaperClipping } from 'react-icons/pi'
import { IoIosPeople } from 'react-icons/io'
import { CiHome } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { useScrollFixed } from '../../../../../../Hooks/shared/shared'

interface MenueMobailProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar: React.FC = () => {
  const isFixed = useScrollFixed(168)

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
                  اجاره
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shopping/shopping'}
                  className={({ isActive }) =>
                    `hover:text-primary hover:custom-underline-hover ${
                      isActive ? 'text-primary custom-underline' : ''
                    }`
                  }
                >
                  خرید
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
            <div className="text-gray-1000">
              <NavLink
                to={'/auth/StepThree'}
                className={({ isActive }) =>
                  `hover:text-primary hover:custom-underline ${
                    isActive ? 'text-primary custom-underline' : ''
                  }`
                }
              >
                ورود | ثبت نام
              </NavLink>
            </div>
            <div className="text-sm w-20 h-10 xl:w-25.5 xl:h-12 border-solid border-1 border-primary rounded-lg text-primary flex items-center justify-center">
              <NavLink to={'/registerAnAd/StepOneAdRE'}> ثبت آگهی</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const MenueMobail: React.FC<MenueMobailProps> = ({ isOpen, setIsOpen }) => {
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
        <NavLink
          to={'/auth/StepThree'}
          className="text-xs  text-gray-1000 font-shabnamMedium "
        >
          <div className="  font-shabnamMedium flex items-center h-20 p-4  bg-Gray-1  gap-1  mt-5">
            <CgProfile className="text-2xl" />
            ورود یا ثبت نام
          </div>
        </NavLink>
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
                اجاره خانه
              </div>
              <IoIosArrowBack className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Shopping/shopping'}
              className={({ isActive }) =>
                `flex items-center justify-between w-full hover:text-primary  hover:custom-underline  ${
                  isActive ? 'text-primary custom-underline' : ''
                }`
              }
            >
              <div className=" flex   gap-2  mt-5">
                <IoKeyOutline className="text-2xl" />
                خرید خانه{' '}
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
          <div className="text-sm w-20 h-10 xl:w-25.5 xl:h-12 border-solid border-1 border-primary rounded-lg text-primary flex items-center justify-center">
            <NavLink to={'/registerAnAd/StepOneAdRE'}> ثبت آگهی</NavLink>
          </div>
        </div>
      </div>
      <MenueMobail isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export { NavBar, NavBarMobail }
