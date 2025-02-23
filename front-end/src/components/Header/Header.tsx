import Logo from '../logo/logo'
import { NavLink } from 'react-router'

const Header: React.FC = () => {
  return (
    <>
      <div className="container  pt-10">
        <div className="  w-auto h-28.75 bg-white  px-8 py-6.5 flex items-center justify-between text-xl   rounded-2xl ">
          <div className="  flex items-center  gap-11 ">
            <NavLink to={'/'}>
              <Logo width="32.75" height="16" fontSize="base" />
            </NavLink>
            <ul className=" font-shabnam flex items-center justify-between gap-6 text-gray-1000   ">
              <li>
                <NavLink
                  to={'/rent'}
                  className={({ isActive }) =>
                    isActive ? 'text-primary custom-underline   active' : ''
                  }
                >
                  اجاره
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/shopping'}
                  className={({ isActive }) =>
                    isActive ? 'text-primary custom-underline   active' : ''
                  }
                >
                  خرید
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/estate'}
                  className={({ isActive }) =>
                    isActive ? 'text-primary custom-underline   active' : ''
                  }
                >
                  املاک و مستغلات
                </NavLink>
              </li>
              <NavLink
                to={'/consultants'}
                className={({ isActive }) =>
                  isActive ? 'text-primary custom-underline   active' : ''
                }
              >
                مشاورین املاک
              </NavLink>
              <li>
                <NavLink
                  to={'/news'}
                  className={({ isActive }) =>
                    isActive ? 'text-primary custom-underline   active' : ''
                  }
                >
                  اخبار روز
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-between gap-9  h-[63px">
            <div className=" text-gray-1000 ">
              <NavLink to={'/news'} > ورود | ثبت نام</NavLink>
            </div>
            <div className=" text-sm  w-25.5 h-12 border-solid border-1 bored border-primary rounded-lg  text-primary  flex items-center justify-center">
              <NavLink to={'/registerAnAd'}> ثبت آگهی</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
