import React, { useState } from 'react'
import CMSLayout from '../../components/cms/CMSLayout'

const data = [
  {
    id: 1,
    name: 'آروین',
    lastName: 'قادری',
    activity: 'املاکی',
    phone: '09308064108',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/2/3',
  },
  {
    id: 2,
    name: 'علی',
    lastName: 'حسینی',
    activity: 'برنامه‌نویس',
    phone: '09123456789',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/3/15',
  },
  {
    id: 3,
    name: 'سارا',
    lastName: 'کاظمی',
    activity: 'طراح گرافیک',
    phone: '09234567890',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
  {
    id: 4,
    name: 'سارا',
    lastName: 'کاظمی',
    activity: 'طراح گرافیک',
    phone: '09234567890',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
  {
    id: 5,
    name: 'سارا',
    lastName: 'کاظمی',
    activity: 'طراح گرافیک',
    phone: '09234567890',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
  {
    id: 6,
    name: 'سارا',
    lastName: 'کاظمی',
    activity: 'طراح گرافیک',
    phone: '09234567890',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
  {
    id: 7,
    name: 'سارا',
    lastName: 'کاظمی',
    activity: 'طراح گرافیک',
    phone: '09234567890',
    image: '/public/img/Rectangle 52.jpg',
    joinDate: '1404/5/20',
  },
]

const itemsPerPage = 3

const Users: React.FC = () => {
  document.title = 'سقفینو- پنل مدیریت-کاربران'
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  

  return (
    <>
      <CMSLayout title=" کاربران" panel={true}>
        <div className="p-2 lg:p-6 overflow-x-auto">
          <div className="w-full">
            <table className="table-auto border-collapse min-w-full border border-primary-tint-6 bg-white text-center shadow-lg rounded-lg">
              <thead>
                <tr className="bg-primary-tint-6 text-white text-xs sm:text-sm md:text-base">
                  <th className="border border-primary-tint-6 px-4 py-2">
                    شناسه کاربر
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    نام
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    نام خانوادگی
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    نوع فعالیت
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    شماره تلفن
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    تصویر
                  </th>
                  <th className="border border-primary-tint-6 px-4 py-2">
                    تاریخ عضویت
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-200 text-xs sm:text-sm md:text-base"
                  >
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.id}
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.name}
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.lastName}
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.activity}
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.phone}
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          className="w-full h-full object-cover aspect-square rounded-full"
                          src={item.image}
                          alt="تصویر"
                        />
                      </div>
                    </td>
                    <td className="border border-primary-tint-6 px-4 py-2">
                      {item.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              className={`px-4 py-2 ${
                currentPage === 1 ? '  cursor-not-allowed   ' : '  cursor-pointer'
              }  bg-primary-tint-6 text-white rounded-md hover:bg-primary disabled:bg-gray-400`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              قبلی
            </button>
            <span className="px-4 py-2">{`صفحه ${currentPage} از ${totalPages}`}</span>
            <button
              className={`px-4 py-2 ${
                currentPage === totalPages
                  ? '  cursor-not-allowed '
                  : ' cursor-pointer'
              }  bg-primary-tint-6 text-white rounded-md hover:bg-primary disabled:bg-gray-400`}
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

export default Users