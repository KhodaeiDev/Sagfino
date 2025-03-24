import React from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const PrivacyPolicy: React.FC = () => {
  document.title = 'سقفینو-حریم شخصی شما'
  return (
    <>
      <NavBar />
      <NavBarMobail />
      {/* محتوا */}
      <div className="container mt-16">
        <div className="px-10 pb-10 pt-3 xl:px-31 xl:pb-21 xl:pt-8 border border-gray-D9 rounded-xl w-full h-auto">
          <h4 className="font-shabnamBold text-xs lg:text-2xl text-Gray-35">
            حریم شخصی شما
          </h4>
          <div className="flex flex-col gap-y-6 mt-8">
            {/* بخش اول */}
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                اطلاعات شخصی شما چگونه جمع‌آوری می‌شود؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                ما اطلاعات شما را از طریق ثبت‌نام در سایت، تکمیل فرم‌ها یا
                استفاده از خدماتی که ارائه می‌دهیم جمع‌آوری می‌کنیم. اطلاعاتی
                مانند نام، ایمیل و شماره تماس تنها برای ارائه خدمات بهتر مورد
                استفاده قرار می‌گیرد.
              </p>
            </div>
            {/* بخش دوم */}
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                امنیت اطلاعات شما چگونه تضمین می‌شود؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                اطلاعات شما با استفاده از فناوری‌های پیشرفته و پروتکل‌های امن
                رمزنگاری محافظت می‌شود. ما تلاش می‌کنیم تا از دسترسی غیرمجاز به
                اطلاعات شما جلوگیری کنیم.
              </p>
            </div>
            {/* بخش سوم */}
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                آیا اطلاعات شما با اشخاص ثالث به اشتراک گذاشته می‌شود؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                ما هرگز اطلاعات شخصی شما را بدون رضایت شما با اشخاص ثالث به
                اشتراک نمی‌گذاریم، مگر در موارد قانونی یا جهت ارائه خدماتی که
                شما درخواست کرده‌اید.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* فوتر */}
      <div className="mt-15">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default PrivacyPolicy
