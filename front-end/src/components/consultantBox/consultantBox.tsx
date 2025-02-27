const ConsultantBox = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-3.5 py-4 px-5 lg:px-17 lg:pt-4 lg:pb-6 rounded-2xl border border-gray-71 ">
        <div className=" w-full h-20.25 lg:w-full lg:h-35  rounded-full overflow-hidden">
          <img
            className=" w-full h-full"
            src="../../../public/img/Ellipse 6.png"
            alt="img"
          />
        </div>
        <h6 className="  text-base lg:text-xl font-shabnamMedium lg:font-shabnamBold ">
          ماندانا تبریزی
        </h6>
        <span className=" font-shabnam text-xs text-gray-71 lg:text-lg">
          املاک ولیعصر
        </span>
        <span className=" text-sm font-shabnam lg:text-lg text-gray-71">
          امتیاز ۴ از ۵
        </span>
        <div className="  cursor-pointer w-full h-8 lg:w-full lg:h-10 border text-primary center border-primary font-shabnamMedium text-sm  rounded-lg">
          نمایش پروفایل
        </div>
      </div>
    </>
  )
}

export default ConsultantBox
