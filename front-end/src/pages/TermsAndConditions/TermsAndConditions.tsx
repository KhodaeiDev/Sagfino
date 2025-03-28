import React from 'react'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <NavBar />
      <NavBarMobail />
      <div className="container my-10 ">
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-bold text-primary text-center my-4">
              قوانین و مقررات سقفینو
            </h1>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg my-4">
              <h2 className="text-lg font-semibold text-blue-800">
                برای املاکی‌ها
              </h2>
              <ul className="list-disc list-inside text-blue-700">
                <li>آگهی‌ها باید دقیق و واقعی باشند.</li>
                <li>توضیحات کامل و بدون اغراق در مورد ملک ارائه شود.</li>
                <li>تصاویر باید از کیفیت مناسبی برخوردار باشند.</li>
              </ul>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg my-4">
              <h2 className="text-lg font-semibold text-green-800">
                برای افراد عادی
              </h2>
              <ul className="list-disc list-inside text-green-700">
                <li>اطلاعات صحیح و دقیق خود را در آگهی وارد کنید.</li>
                <li>
                  از ارسال آگهی‌های تکراری یا مغایر با قوانین جلوگیری کنید.
                </li>
                <li>مسئولیت صحت اطلاعات وارد شده با کاربر است.</li>
              </ul>
            </div>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-lg my-4">
              <h2 className="text-lg font-semibold text-gray-800">
                مسئولیت سقفینو
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>سقفینو به عنوان واسطه‌ای بین کاربران فعالیت می‌کند.</li>
                <li>صحت اطلاعات آگهی‌ها بر عهده کاربران است.</li>
                <li>سقفینو حق تغییر قوانین را در هر زمان دارد.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMobail />
    </>
  )
}

export default TermsAndConditions
