import React from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import EmptyTemplate from '../../components/cms/EmptyTemplate'

const SavedAd: React.FC = () => {
  return (
    <>
      <CMSLayout title="آگهی ذخیره شده ">
        <EmptyTemplate
          title="هنوز آگهی‌ای ذخیره نکردید!"
          des="صفحه املاک اجاره‌ای سقفینو را ببینید و از میان آن‌ها آگهی‌های دلخواه را ذخیره کنید"
          img='/img/adsaved.png'
          btnTitle='املاک اجاره ی'
          link='../Rent/Rent'
        />
      </CMSLayout>
      <div></div>
    </>
  )
}

export default SavedAd
