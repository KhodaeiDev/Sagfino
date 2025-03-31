import React from 'react'
import { NavLink } from 'react-router'

const FAQ: React.FC = () => {
  document.title = 'سقفینو-پرسش‌های پرتکرار'
  return (
    <>
      <div className="container mt-16">
        <div className="px-10 pb-10 pt-3 xl:px-31 xl:pb-21 xl:pt-8 border border-gray-D9 rounded-xl w-full h-auto">
          <h4 className="font-shabnamBold text-xs lg:text-2xl text-Gray-35">
            پرسش‌های پرتکرار
          </h4>
          <div className="flex flex-col gap-y-6 mt-8">
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                چگونه می‌توانم ملک خود را ثبت کنم؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                برای ثبت ملک خود کافیست از قسمت ثبت آگهی اقدام کرده و فرم‌های
                مربوطه را پر کنید. پس از تایید کارشناسان، آگهی شما منتشر خواهد
                شد.
              </p>
            </div>
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                آیا مشاورین املاک تایید شده هستند؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                بله، تمامی مشاورین املاک ثبت شده در وبسایت احراز هویت شده‌اند تا
                اطمینان حاصل شود که معاملات به صورت امن و مطمئن انجام شوند.
              </p>
            </div>
            <div className="border-b border-gray-D9 pb-4">
              <h5 className="text-primary font-shabnamBold text-base lg:text-xl">
                چگونه می‌توانم با پشتیبانی تماس بگیرم؟
              </h5>
              <p className="text-gray-71 font-shabnam text-sm lg:text-base mt-2">
                برای تماس با پشتیبانی می‌توانید از قسمت{' '}
                <NavLink to={'/ContactUs/ContactUs'} className="text-primary">
                  تماس با ما
                </NavLink>{' '}
                استفاده کنید یا با شماره‌های درج شده در سایت تماس بگیرید.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default FAQ
