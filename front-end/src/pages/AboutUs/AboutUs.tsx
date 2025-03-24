import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const AboutUs: React.FC = () => {
  document.title = 'سقفینو-درباره ما'
  return (
    <>
      <NavBar></NavBar>
      <NavBarMobail></NavBarMobail>
      {/* content */}
      <div className="container mt-16">
        <div className=" px-10  pb-10 pt-3  xl:px-31 xl:pb-21 xl:pt-8   border border-gray-D9  rounded-xl w-full h-auto ">
          <h4 className=" font-shabnamBold text-xs lg:text-2xl text-Gray-35 ">
            داستان سقفینو
          </h4>
          <div className=" flex flex-col gap-y-2.5  xl:gap-y-5 items-center justify-center mt-6 xl:mt-13.5 ">
            <h2 className=" text-primary font-shabnamMedium text-base lg:text-5xl ">
              ما باور داریم هر شخصی، سقفی دارد
            </h2>
            <span className=" text-gray-71 font-shabnam text-base lg:text-2xl  ">
              تا پیدا کردن سقف دلخواه کنار شماییم
            </span>
          </div>
          <div className="flex flex-col-reverse xl:flex-row items-center justify-between w-full   mt-10 ">
            <div className=" mt-5 xl:mt-0 w-full xl:w-1/2 flex items-center justify-between  font-shabnam text-xs lg:text-base text-Gray-35   ">
              <span className="    ">
                توسعه اینترنت، روش‌های معاملات و خرید ما را به کلی دگرگون کرده
                است. منافع موجود در این شکل معاملات؛ آسانی و سرعت بیشتر، سبب شده
                تا مردم به‌سمت تجربه آن و ایجاد تغییر در الگوهای متداول انجام
                معامله ترغیب شوند. در حالیکه مشغله‌های روزانه فرصت لذت بردن از
                اوقات فراغت را کاهش داده، صرف زمان‌های طولانی برای انجام سفرهای
                درون شهری و رسیدگی به امورات روزانه معنای خود را از دست داده
                است. در این بین برخی هنوز به‌واسطه مجازی بودن فضا اعتماد کافی
                برای اقدام به معاملات از طریق این روش‌ها را ندارند. وب‌سایت
                سقفینو به صورت تخصصی در زمینه اجاره، خرید و فروش ملک در کشور
                فعالیت دارد. این وب‌سایت همواره تلاش می‌کند اطلاعات دقیق و
                به‌روز از مناطق مختلف را راستی‌آزمایی کرده و سپس در اختیار شما
                قرار
              </span>
              <span>
                دهد تا با خیالی راحت خرید اقدام به انجام معاملات کنید. وب‌سایت
                سقفینو همچنین با داشتن مجموعه بزرگی از املاک تایید‌شده و مشاورین
                املاکی که توسط املاک احراز هویت شده‌اند توانسته مجموعه کاملی از
                اطلاعات جامع در زمینه ملک در اکثر نقاط کشور را داشته باشد.
                همچنین ما با جذب مشاوران متخصص توانسته‌ایم امکان دادن مشاوره
                تخصصی به شما برای انتخاب بهتر و امن‌تر را فراهم آوریم. در سقفینو
                همیشه خانه‌ای منتظر شماست چه به‌دنبال پیدا کردن یک خانه دلنشین
                هستید، یا مدیر آژانس املاک و یا یک مشاور مستقل هستید، ما همیشه
                کنار شماییم.
              </span>
            </div>
            <div className="aboutUs-img  w-full  xl:w-1/3 h-145 "></div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className=" mt-15">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default AboutUs
