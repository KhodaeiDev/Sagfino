import { NavLink } from 'react-router'

const NoProducts = () => {
  return (
    <>
      <div className="container">
        <div className=" mt-5 pb-12 pt-18 lg:pb-14 lg:pt-23 border border-gray-D9 rounded-2xl flex flex-col items-center justify-center">
          <img
            className=" lg:w-125  lg:h-85  w-75 h-51.5 "
            src="/img/Figma to Lottie ✨.png"
            alt="img"
          />
          <div className=" flex flex-col gap-y-1 mt-5 mb-5 text-center ">
            <h3 className=" text-gray-21 font-shabnamMedium text-base lg:text-2xl  ">
              ملک با مشخصات مورد نظر پیدا نشد!
            </h3>
            <span className=" text-Gray-35 font-shabnam  lg:text-sm text-xl  ">
              در صفحه اصلی املاک مشابهی منتظر شما هستند
            </span>
          </div>
          <NavLink
            to={'/'}
            className=" cursor-pointer center w-39 h-8  lg:w-sm lg:h-10 rounded-lg bg-primary text-white  font-shabnamMedium  text-xs lg:text-sm "
          >
            بازگشت صحفه اصلی{' '}
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default NoProducts
