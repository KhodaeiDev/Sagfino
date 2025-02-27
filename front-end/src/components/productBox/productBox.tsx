import { RiBookmarkLine } from 'react-icons/ri'
import { NavLink } from 'react-router'
export default function ProductBox() {
  return (
    <div className=" border border-boxHelp rounded-xl">
      <NavLink className={' relative'} to={''}>
        <img
          className=" w-full rounded-t-xl"
          src="../../../public/img/pexels-john-tekeridis-1428348.png"
          alt=""
        />
        <div className=" center w-16.25 h-5.5 lg:w-25 lg:h-9.5  rounded-xs lg:rounded-sm  bg-black-blur/40  text-10   absolute top-3 left-3 font-shabnam  lg:text-base ">
          <span className=" text-white "> ۲ ساعت پیش</span>
        </div>
      </NavLink>
      <div className=" flex flex-col gap-2.5 p-2.5 lg:px-3.5 lg:pt2.5 lg:pb-6.25">
        <div className="flex items-center justify-between font-shabnam text-10 lg:text-base text-gray-90 ">
          <NavLink to={''}>رهن و اجاره آپارتمان تهران</NavLink>
          <RiBookmarkLine className=" cursor-pointer w-3 h-3 lg:w-6 lg:h-6 " />
        </div>
        <div>
          <span className="text-10  text-gray-1000 lg:text-base ">
            ۸۰ ...متر، محدوده پاسدارن، {' '}
          </span>
        </div>
        <div className=" flex flex-col gap-0.5 lg:gap-1   text-10 font-shabnamBold  lg:text-base text-Gray-35 ">
          <span>۶۰۰ میلیون تومان رهن</span>
          <span>۳۱ میلیون تومان اجاره</span>
        </div>
      </div>
    </div>
  )
}
