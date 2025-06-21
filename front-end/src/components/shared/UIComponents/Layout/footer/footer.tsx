import SectionHeader from '../../sectionHeader/sectionHeader'
import { NavLink } from 'react-router'
import { FaPhoneVolume } from 'react-icons/fa6'
import { TbBrandInstagramFilled } from 'react-icons/tb'
import { FaTelegram } from 'react-icons/fa'
import Logo from '../../logo/logo'

const Footer: React.FC = () => {
  return (
    <>
      <div className=" bg-boxHelp  hidden lg:flex flex-col ">
        <div className="container ">
          <div className="px-8  pt-12">
            <SectionHeader
              title={'سقفینو؛ سقفی ایده‌آل برای زندگی'}
              dec={''}
              center={true}
              btnTitle={''}
              btnHref={''}
            />
            {/* <div className=" grid grid-cols-4 gap-20 pb-4  mt-10.5 ">
              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm">بازارهای املاک و مستغلات</h5>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam mt-0.5'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>

              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> بیشترین جستوجو </h5>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam mt-0.5'}
                  to={''}
                >
                  اپارتمان نزدیک متر
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  خانه نزدیک به خیابان اصلی
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  اپارتمان تک واحد
                </NavLink>
                <NavLink
                  className={'text-xs  text-gray-71 font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>

              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> پر امتیاز ترین مشاورین املاک </h5>
                <NavLink
                  className={'  text-xs  text-gray-71 font-shabnam mt-0.5'}
                  to={''}
                >
                  علی کریمی
                </NavLink>
                <NavLink
                  className={' text-xs text-gray-71  font-shabnam'}
                  to={''}
                >
                  مهران خدایی
                </NavLink>
                <NavLink
                  className={'   !text-xs text-gray-71  font-shabnam'}
                  to={''}
                >
                  آروین قادری
                </NavLink>
              </div>
            </div> */}
            <div className="grid grid-cols-4 gap-20 pt-6 pb-4 ">
              {/* logo */}
              <div className=" flex flex-col gap-2">
                <NavLink to={'/'}>
                  <Logo />
                </NavLink>
                <h6 className=" text-base font-shabnam text-Gray-35 mt-4">
                  تجربه لذت خانه‌دار شدن سریع و آسان
                </h6>
                <span className=" font-shabnam text-xs text-Gray-35">
                  سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو
                  کنید. ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن،
                  با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.
                </span>
              </div>
              {/* menu */}
              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> خدمات </h5>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/Rent/Rent'}
                >
                  اجاره
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/Shopping/shopping'}
                >
                  خرید
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/Realestates/Realestates'}
                >
                  املاک و مستغلات
                </NavLink>
              </div>
              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> اطلاعات </h5>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/ContactUs/ContactUs'}
                >
                  تماس با ما
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/AboutUs/AboutUs'}
                >
                  داستان سقفینو
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/FAQ/FAQ'}
                >
                  پرسش های پرتکرار
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'/PrivacyPolicy/PrivacyPolicy'}
                >
                  حریم شخصی شما
                </NavLink>
              </div>
              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> حساب کاربری </h5>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'profail'}
                >
                  پروفایل من
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'profail'}
                >
                  ملک نشان شده
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-xs text-gray-71  mt-0.5 hover:text-primary   ${
                      isActive ? 'text-primary ' : ' '
                    }`
                  }
                  to={'profail'}
                >
                  آگهی من
                </NavLink>
              </div>
              <div className=" flex flex-col gap-2.5 font-shabnam">
                <h5 className=" text-sm"> با ما در ارتباط باشید </h5>
                <div className=" flex items-center gap-1 text-xs mt-0.5">
                  <FaPhoneVolume className=" text-primary" />
                  <span className=" font-shabnam  text-base text-gray-71 ">
                    تلفن
                  </span>
                </div>
                <div className=" flex items-center gap-1 text-xs">
                  <TbBrandInstagramFilled className=" text-primary" />
                  <span className=" font-shabnam  text-base text-gray-71 ">
                    اینستاگرام
                  </span>
                </div>
                <div className=" flex items-center gap-1 text-xs">
                  <FaTelegram className=" text-primary" />
                  <span className=" font-shabnam  text-base text-gray-71 ">
                    تلگرام
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-12  bg-gray-ED relative center mt-30">
          <span className=" text-xs font-shabnam  text-gray-500">
            {' '}
            حقوق این سایت متعلق به سقفینو است
          </span>
          <img
            className="w-auto h-auto absolute   -top-30"
            src="/img/illustarion 2 1.png "
            alt="img"
          />
        </div>
      </div>
    </>
  )
}

const FooterMobail: React.FC = () => {
  return (
    <>
      <div className=" !bg-boxHelp  lg:hidden">
        <div className="container ">
          <div className=" flex flex-col pt-15   items-start gap-y-1">
            <NavLink to={'/'}>
              <Logo />
            </NavLink>
            <h5 className=" mt-2.5  font-shabnamMedium   text-base text-gray-21">
              سقفینو؛ سقفی برای یک زندگی ایده‌آل
            </h5>
            <span className=" font-shabnam  text-xs text-Gray-35">
              تجربه لذت خانه‌دار شدن آنی و آسان
            </span>
          </div>
          <div className=" flex items-center  mt-6 gap-x-10 md:gap-x-50 ">
            <div className=" flex flex-col gap-2">
              <span className="  font-shabnamMedium text-xs  text-gray-21 ">
                بازارهای املاک و مستغلات
              </span>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                تهران
              </NavLink>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                اصفهان
              </NavLink>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                مشهد
              </NavLink>
            </div>
            <div className=" flex flex-col gap-2">
              <span className="  font-shabnamMedium text-xs  text-gray-21 ">
                بیشترین جست‌وجوها{' '}
              </span>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                اپارتمان نزدیک مترو
              </NavLink>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                آپارتمان تک واحد
              </NavLink>
              <NavLink className={' text-10 font-shabnam text-Gray-35'} to={''}>
                خانه نزدیک به خیابان اصلی
              </NavLink>
            </div>
          </div>
          <div className=" mt-4">
            <span className=" text-10 text-gray-71 font-shabnam mt-8">
              سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
              ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
              املاک معتمد و متخصص شهرتان در ارتباط باشید.
            </span>
          </div>
          <div className=" flex items-center  gap-6  md:gap-12  mt-4">
            <div className=" flex flex-col gap-2.5 font-shabnam">
              <h5 className=" text-xs"> خدمات </h5>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/Rent/Rent'}
              >
                اجاره
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/Shopping/shopping'}
              >
                خرید
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/Realestates/Realestates'}
              >
                املاک و مستغلات
              </NavLink>
            </div>
            <div className=" flex flex-col gap-2.5 font-shabnam">
              <h5 className=" text-xs"> با ما در ارتباط باشید </h5>
              <div className=" flex items-center gap-1 text-xs ">
                <FaPhoneVolume className=" text-primary" />
                <span className=" font-shabnam   text-10 text-gray-71 ">
                  تلفن
                </span>
              </div>
              <div className=" flex items-center gap-1 text-xs">
                <TbBrandInstagramFilled className=" text-primary" />
                <span className=" font-shabnam   text-10 text-gray-71 ">
                  اینستاگرام
                </span>
              </div>
              <div className=" flex items-center gap-1 text-xs">
                <FaTelegram className=" text-primary" />
                <span className=" font-shabnam   text-10 text-gray-71 ">
                  تلگرام
                </span>
              </div>
            </div>
            <div className=" flex flex-col gap-2.5 font-shabnam">
              <h5 className=" text-xs"> اطلاعات </h5>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/ContactUs/ContactUs'}
              >
                تماس با ما
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/AboutUs/AboutUs'}
              >
                داستان سقفینو
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-10 text-gray-71  mt-0.5 hover:text-primary   ${
                    isActive ? 'text-primary ' : ' '
                  }`
                }
                to={'/FAQ/FAQ'}
              >
                پرسش های پرتکرار
              </NavLink>
            </div>
          </div>
          <div className=" w-full h-12  center mt-10">
            <span className=" text-xs font-shabnam  text-gray-500"></span>
            <img
              className="w-auto h-auto "
              src="/img/illustarion 2 1.png "
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { Footer, FooterMobail }
