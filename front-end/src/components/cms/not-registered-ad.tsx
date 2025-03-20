import React from 'react'
import Btn from '../AdRegistration/btn'

const NotRegisteredAd: React.FC = () => {
  return (
    <>
      <div className="px-28.5 pb-11  ">
        <div className=" center ">
          <img src="/img/pana.png" alt="img" />
        </div>
        <div className="center  flex-col text-center gap-y-5 mt-4 ">
          <h5 className=" text-gray-1000  font-shabnamBold text-xl lg:text-2xl ">
            هنوز آگهی‌ای ثبت نکردید!
          </h5>
          <span className=" text-gray-71 font-shabnam text-sm lg:text-xl ">
            با ثبت رایگان آگهی هر جا که هستید به‌سرعت ملک‌تان را معامله کنید
          </span>
          <Btn link="/registerAnAd/StepOneAdRE" title="ثبت آگهی" />
        </div>
      </div>
    </>
  )
}

export default NotRegisteredAd
