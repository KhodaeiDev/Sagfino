import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import { NavLink } from 'react-router'

const NotFound: React.FC = () => {
  document.title = 'صحفه مورد نظر یافت نشد'

  return (
    <>
      <NavBar />
      <NavBarMobail />
      <div className=" mb-10 ">
        <div className="container mt-16">
          <div className=" px-10  pb-10 pt-3  xl:px-31 xl:pb-21 xl:pt-8 center flex-col gap-y-6   border border-gray-D9  rounded-xl w-full h-auto ">
            {/* img */}
            <img src="/img/404.png" alt="404" />
            {/* content */}
            <div className=" center flex-col text-center  gap-y-6 ">
              {/* title */}
              <h4 className=" font-shabnamBold text-xl text-gray-21 lg:text-2xl ">
                صفحه‌ مورد نظر یافت نشد!
              </h4>
              {/* des */}
              <span className="font-shabnam lg:text-xl text-sm  text-Gray-35">
                املاک به‌سرعت در حال خرید و فروش و اجاره‌اند، از صفحه اصلی گزینه
                مورد نظر را جست‌وجو کنید.
              </span>
              {/* btn */}
              <NavLink
                to={'/'}
                className=" w-48 h-8 lg:w-sm lg:h-12 cursor-pointer gap-x-2  bg-primary  text-white center rounded-lg  font-shabnamMedium text-base "
              >
                بازگشت به صحفه اصلی
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMobail />
    </>
  )
}

export default NotFound
