const BoxHelp: React.FC = () => {
  return (
    <>
      <div className="   bg-boxHelp  border border-boxHelp  rounded-2xl  p-6 lg:p-8">
        <div className=" flex flex-col gap-2.5">
          <img
            className=" mix-blend-darken"
            src="../../../public/svg/illustration 2.svg"
            alt="svg"
          />
          <h1 className=" font-shabnamBold text-center  text-sm md:text-lg  lg:text-xl  text-Gray-35 ">
            مالک هستید؟
          </h1>
          <span className=" font-shabnam text-sm  text-center  text-gray-1000">
            آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای
            هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت
            رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.
          </span>
        </div>
        <div className=" bg-primary center cursor-pointer  w-full h-8 mt-6   lg:h-6.25 rounded-lg font-shabnamMedium text-xs lg:text-sm text-white">
          ثبت آگهی
        </div>
      </div>
    </>
  )
}

export default BoxHelp
