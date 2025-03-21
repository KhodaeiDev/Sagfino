import React from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
// import EmptyTemplate from '../../components/cms/EmptyTemplate'
import { GoTrash } from 'react-icons/go'
import ProductBox from '../../components/shared/Cards/productBox/productBox'
const SavedAd: React.FC = () => {
  document.title = 'سقفینو- آگهی ذخیره شده '
  return (
    <>
      <CMSLayout title="آگهی ذخیره شده ">
        {/* <EmptyTemplate
          title="هنوز آگهی‌ای ذخیره نکردید!"
          des="صفحه املاک اجاره‌ای سقفینو را ببینید و از میان آن‌ها آگهی‌های دلخواه را ذخیره کنید"
          img='/img/adsaved.png'
          btnTitle='املاک اجاره ی'
          link='../Rent/Rent'
        /> */}
        <div className="w-full mt-4 flex **:cursor-pointer items-center justify-start pr-6.5 gap-x-2 text-gray-1000 text-base ">
          <GoTrash className=" w-6 h-6" />
          پاک کردن همیه آگهی های
        </div>
        <div className="container">
          <div className="flex flex-wrap  justify-center sm:justify-start gap-2 md:gap-4  mt-10 ">
            <ProductBox  isSaved={true} />
            <ProductBox  isSaved={true} />
            <ProductBox  isSaved={true} />
          </div>
        </div>
      </CMSLayout>
      <div></div>
    </>
  )
}

export default SavedAd
