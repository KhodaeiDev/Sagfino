import { IoIosCheckmark } from 'react-icons/io'

const BoxEstate = () => {
  return (
    <>
      <div className=" border border-boxHelp rounded-2xl flex flex-col shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]    items-center px-5 xl:px-12 py-4  xl:py-8 ">
        <div className="w-23.25 h-16.5    mb-2">
          <img
            className="w-full h-full "
            src="../../../public/img/Real Estate Logo 1.png"
            alt="img"
          />
        </div>
        <div className=" flex items-center gap-1 justify-between">
          <h6 className=" font-shabnamBold text-xs lg:text-xl text-gray-21">
            مشاور املاک سبز
          </h6>
          <div className=" center w-3 h-3  lg:w-4 lg:h-4 bg-blue-tick text-white rounded-full gap-x-5">
            <IoIosCheckmark />
          </div>
        </div>
        <div className="  text-gray-71 text-center  flex flex-col gap-y-3 font-shabnam text-xs">
          <span className=" text-Gray-35 font-shabnamMedium text-lg">
            تهران، پاسداران
          </span>
          <span>میزان رضایتمندی: ۴ از ۵</span>
          <span>آگهی‌های فعال: بیش از ۲۰۰۰</span>
          <span className=" font-shabnamMedium ">
            مشاهده نظرات کاربران (۱۲ نظر)
          </span>
        </div>
      </div>
    </>
  )
}

export default BoxEstate
