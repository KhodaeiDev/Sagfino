import { RiSearch2Line } from 'react-icons/ri'

const HeaderContent: React.FC = () => {
  return (
    <div className=" mt-10 md:mt-25 lg:mt-0 center flex-col  text-white font-shabnamBold  gap-0.5  xl:gap-5">
      <h2 className="   text-base xl:text-54 lg:text-5xl md:text-3xl">
        سقفینو؛ سقفی برای همه
      </h2>
      <div className=" w-53.5  md:w-xl  lg:w-4xl">
        <h3 className=" text-xs xl:text-32 lg:text-3xl md:text-2xl text-center">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>
      <div className=" bg-white mt-5  w-75  xl:w-3xl  lg:w-2xl  md:w-xl text-black rounded-2xl flex flex-col  gap-1.5 py-1.5 md:py-3.5  px-5 md:px-7">
        <div className=" flex  justify-center items-center gap-20 md:gap-50 lg:gap-70 font-shabnamMedium text-lg  md:text-2xl  md:mb-1 ">
          <span>اجاره</span>
          <span>خرید</span>
        </div>
        <div className="border-b  border-Gray-35"></div>

        <div className=" w-full mb-0 md:m-1  ">
          <div className=" flex items-center gap-1.5 ">
            <RiSearch2Line className=" text-2xl md:text-3xl  text-Gray-35 " />
            <input
              className=" border-none outline-0 w-full   font-shabnam text-Gray-35   placeholder-Gray-35 "
              type="text"
              placeholder="شهر مورد نظر را جست‌وجو کنید"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
