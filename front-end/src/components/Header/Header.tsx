import Logo from '../logo/logo'

const Header: React.FC = () => {
  return (
    <>
      <div className="container  pt-10">
        <div className="  w-auto h-28.75 bg-white  px-8 py-6.5 flex items-center justify-between text-xl   rounded-2xl ">
          <div className="  flex items-center justify-between  gap-11 ">
            <Logo width="32.75" height="15.75" fontSize="lg" />
            <ul className=" font-shabnam flex items-center justify-between gap-6 text-gray-1000   ">
              <li>اجاره</li>
              <li>خرید </li>
              <li>املاک و مستغلات</li>
              <li>مشاورین املاک</li>
              <li>اخبار روز</li>
            </ul>
          </div>
          <div className=" flex items-center justify-between gap-9 ">
            <div className=" text-gray-1000 ">ورود|ثبت نام</div>
            <div className=" text-sm  w-25.5 h-12 border-solid border-1 bored border-primary rounded-lg  text-primary  flex items-center justify-center">
              ثبت آگهی
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
