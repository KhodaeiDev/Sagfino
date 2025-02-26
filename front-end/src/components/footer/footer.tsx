import SectionHeader from '../sectionHeader/sectionHeader'
import { NavLink } from 'react-router'
import { FaPhoneVolume } from 'react-icons/fa6'
import { TbBrandInstagramFilled } from 'react-icons/tb'
import { FaTelegram } from 'react-icons/fa'
import Logo from '../logo/logo'

const Footer = () => {
  return (
    <>
      <div className=" bg-boxHelp  ">
        <div className="container ">
          <div className="px-8  pt-12">
            <SectionHeader
              title={'سقفینو؛ سقفی ایده‌آل برای زندگی'}
              dec={''}
              center={true}
              btnTitle={''}
              btnHref={''}
            />
            <div className=" grid grid-cols-4 gap-20 pb-4  mt-10.5 border-b border-Gray-35">
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
                <h5 className=" text-sm">بازارهای املاک و </h5>
                <NavLink
                  className={'  text-xs  text-gray-71 font-shabnam mt-0.5'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={' text-xs text-gray-71  font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={'   !text-xs text-gray-71  font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink
                  className={'  !text-xs text-gray-71  font-shabnam'}
                  to={''}
                >
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>

              <div className=" flex flex-col gap-1.5 font-shabnam">
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
            <div className="grid grid-cols-4 gap-20 pt-6 pb-4 ">
              {/* logo */}
              <div className=" flex flex-col gap-2">
                <Logo />
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
              <div className=" flex flex-col gap-1.5 font-shabnam">
                <h5 className=" text-sm"> خدمات </h5>
                <NavLink className={'text-xs text-gray-71  mt-0.5'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>
              <div className=" flex flex-col gap-1.5 font-shabnam">
                <h5 className=" text-sm"> خدمات </h5>
                <NavLink className={'text-xs text-gray-71 mt-0.5'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>
              <div className=" flex flex-col gap-1.5 font-shabnam">
                <h5 className=" text-sm"> خدمات </h5>
                <NavLink className={'text-xs text-gray-71 mt-0.5'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
                <NavLink className={'text-xs text-gray-71'} to={''}>
                  بازار املاک و مستغلات تهران
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-12  bg-gray-ED relative center mt-30">
          <span  className=' text-xs font-shabnam  text-gray-500'> حقوق این سایت متعلق به سقفینو است</span>
          <img
            className="w-auto h-auto absolute   -top-30"
            src="../../../public/img/illustarion 2 1.png "
            alt="img"
          />
        </div>
      </div>
    </>
  )
}

export default Footer
