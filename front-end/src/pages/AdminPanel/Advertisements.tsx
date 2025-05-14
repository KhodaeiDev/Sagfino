import React, { useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'

const data = [
  {
    id: 1,
    userName: 'آروین قادری',
    title: 'آپارتمان 80 متری در مرکز شهر',
    description: 'آپارتمان بازسازی‌شده با دسترسی عالی به امکانات شهری',
    area: '80 متر',
    rentPrice: '4 میلیون ',
    depositPrice: '50 میلیون ',
    salePrice: '2 میلیارد ',
    status: 'تایید نشد',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/2/3',
  },
  {
    id: 2,
    userName: 'علی حسینی',
    title: 'مغازه تجاری 50 متری',
    description: 'مناسب برای کسب و کار با موقعیت عالی در مرکز خرید',
    area: '50 متر',
    rentPrice: '10 میلیون ',
    depositPrice: '100 میلیون ',
    salePrice: '3 میلیارد ',
    status: 'در حال انتظار',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/3/15',
  },
  {
    id: 3,
    userName: 'سارا کاظمی',
    title: 'ویلا 300 متری با استخر',
    description: 'ویلا بزرگ با فضای سرسبز، استخر و ویوی عالی',
    area: '300 متر',
    rentPrice: '30 میلیون ',
    depositPrice: '500 میلیون ',
    salePrice: '15 میلیارد ',
    status: 'تایید شد',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
  {
    id: 4,
    userName: 'سارا کاظمی',
    title: 'ویلا 300 متری با استخر',
    description: 'ویلا بزرگ با فضای سرسبز، استخر و ویوی عالی',
    area: '300 متر',
    rentPrice: '30 میلیون ',
    depositPrice: '500 میلیون ',
    salePrice: '15 میلیارد ',
    status: 'تایید شد',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
]

const itemsPerPage = 3

const Advertisements: React.FC = () => {
  document.title = 'پنل مدیریت - آگهی‌های ثبت‌شده'
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'فعال':
        return 'bg-green-500 rounded-lg  py-1 px-1 text-[10px] text-white'
      case 'تایید شد':
        return 'bg-blue-500 rounded-lg py-1 px-1 text-[10px] text-white'
      case 'تایید نشد':
        return 'bg-red-500  rounded-lg py-1 px-1 text-[10px] text-white'
      case 'در حال انتظار':
        return 'bg-yellow-500  rounded-lg py-1 px-1 text-[10px] text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <>
      <CMSLayout title="آگهی‌های ثبت‌ شده" panel={true}>
        <div className="p-2 lg:p-6 overflow-x-auto">
          <div className="w-full">
            <table className="table-auto border-collapse min-w-full border border-primary-tint-6 bg-white text-center shadow-lg rounded-lg">
              <thead>
                <tr className="bg-primary-tint-6 text-white text-xs sm:text-xs ">
                  <th className="border border-primary-tint-6 px-1 py-2">
                    شناسه آگهی
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    نام کاربر
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    عنوان
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    توضیحات
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    متراژ
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    قیمت اجاره
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    قیمت رهن
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    قیمت فروش
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    وضعیت
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    <div>ویرایش</div>
                  </th>
                  <th className="border border-primary-tint-6 px-1 py-2">
                    <div>حذف</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-200 text-xs "
                  >
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.id}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.userName}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.title}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.description.slice(0,12)}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.area}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.rentPrice}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.depositPrice}
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      {item.salePrice}
                    </td>
                    <td
                      className={`border border-primary-tint-6 px-1  py-1  rounded `}
                    >
                      <div className={`${getStatusClass(item.status)}`}>
                        {item.status}
                      </div>
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      <button className=" cursor-pointer  bg-blue-500 text-white px-2 py-1 rounded">
                        ویرایش
                      </button>
                    </td>
                    <td className="border border-primary-tint-6 px-1 py-2">
                      <button className=" cursor-pointer  bg-red-500 text-white px-2 py-1 rounded">
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            <button
              className={`px-4 py-2 ${
                currentPage === 1
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'cursor-pointer bg-primary-tint-6 hover:bg-primary'
              } text-white rounded-md`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              قبلی
            </button>
            <span className="px-4 py-2">{`صفحه ${currentPage} از ${totalPages}`}</span>
            <button
              className={`px-4 py-2 ${
                currentPage === totalPages
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'cursor-pointer bg-primary-tint-6 hover:bg-primary'
              } text-white rounded-md`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              بعدی
            </button>
          </div>
        </div>
      </CMSLayout>
    </>
  )
}

export default Advertisements
