import React, { useState } from 'react'
import ReactDOM from 'react-dom'

type FilteringModal = {
  closeModalFiltering: () => void
}

const FilteringModal: React.FC<FilteringModal> = ({ closeModalFiltering }) => {
  const [activeBedroomColumn, setActiveBedroomColumn] = useState<number | null>(
    null
  )
  const [activeParkingColumn, setActiveParkingColumn] = useState<number | null>(
    null
  )
  const [activeStorageColumn, setActiveStorageColumn] = useState<number | null>(
    null
  )
  const [activeToiletColumn, setActiveToiletColumn] = useState<number | null>(
    null
  )
  const [activeElevatorColumn, setActiveElevatorColumn] = useState<
    number | null
  >(null)
  const [activeFloorColumn, setActiveFloorColumn] = useState<number | null>(
    null
  )

  const handleColumnClick = (
    setActiveColumn: React.Dispatch<React.SetStateAction<number | null>>,
    index: number
  ) => {
    setActiveColumn(index)
  }

  return ReactDOM.createPortal(
    <div className="modals-parent active ">
      <div className="w-2xl overflow-y-auto h-[95vh] bg-white rounded-2xl px-20 py-8">
        <div className="  grid grid-cols-3 ">
          <div
            onClick={closeModalFiltering}
            className=" w-6 h-6 border-Gray-35 border center rounded-full cursor-pointer "
          >
            <div>x</div>
          </div>
          <div className=" text-center font-shabnamBold text-2xl text-Gray-35">
            <h5>فیلترها</h5>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">اتاق خواب</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['هر تعداد', 'بدون اتاق', '1', '2', '3', '3+'].map(
                    (item, index) => (
                      <td
                        key={index}
                        onClick={() =>
                          handleColumnClick(setActiveBedroomColumn, index)
                        }
                        className={`cursor-pointer ${
                          activeBedroomColumn === index
                            ? 'bg-primary text-white'
                            : ''
                        }`}
                      >
                        {item}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">پارکینگ</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['دارد', 'ندارد'].map((item, index) => (
                    <td
                      key={index}
                      onClick={() =>
                        handleColumnClick(setActiveParkingColumn, index)
                      }
                      className={`cursor-pointer ${
                        activeParkingColumn === index
                          ? 'bg-primary text-white'
                          : ''
                      }`}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">انباری</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['دارد', 'ندارد'].map((item, index) => (
                    <td
                      key={index}
                      onClick={() =>
                        handleColumnClick(setActiveStorageColumn, index)
                      }
                      className={`cursor-pointer ${
                        activeStorageColumn === index
                          ? 'bg-primary text-white'
                          : ''
                      }`}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">
            نوع سرویس بهداشتی
          </h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['مهم نیست', 'ایرانی', 'فرنگی', 'هردو'].map(
                    (item, index) => (
                      <td
                        key={index}
                        onClick={() =>
                          handleColumnClick(setActiveToiletColumn, index)
                        }
                        className={`cursor-pointer ${
                          activeToiletColumn === index
                            ? 'bg-primary text-white'
                            : ''
                        }`}
                      >
                        {item}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">آسانسور</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['مهم نیست', 'دارد', 'ندارد'].map((item, index) => (
                    <td
                      key={index}
                      onClick={() =>
                        handleColumnClick(setActiveElevatorColumn, index)
                      }
                      className={`cursor-pointer ${
                        activeElevatorColumn === index
                          ? 'bg-primary text-white'
                          : ''
                      }`}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-shabnamBold text-base text-Gray-35">طبقات</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['مهم نیست', 'همکف', '1', '2', '+3'].map((item, index) => (
                    <td
                      key={index}
                      onClick={() =>
                        handleColumnClick(setActiveFloorColumn, index)
                      }
                      className={`cursor-pointer ${
                        activeFloorColumn === index
                          ? 'bg-primary text-white'
                          : ''
                      }`}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-4 *:cursor-pointer *:w-38 *:h-12  mt-10 ">
          <div className="center text-primary border border-primary rounded-lg ">
            حذف فیلتر
          </div>
          <div className="center text-white border  bg-primary rounded-xl  ">
            جستوجو
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modals-parent') as Element
  )
}

export default FilteringModal
