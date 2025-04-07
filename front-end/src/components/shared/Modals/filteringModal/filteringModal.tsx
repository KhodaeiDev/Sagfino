import React, { memo, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import Logo from '../../UIComponents/logo/logo'
import SelectBox from '../../UIComponents/FormElements/selectBox/selectBox'
import { IoIosArrowDown } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router'

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

  const handleColumnClick = useCallback(
    (
      setActiveColumn: React.Dispatch<React.SetStateAction<number | null>>,
      index: number
    ) => {
      setActiveColumn(index)
    },
    []
  )

  return ReactDOM.createPortal(
    <div className="modals-parent active ">
      <div className="w-2xl overflow-y-auto h-[95vh] bg-white rounded-2xl px-20 py-8">
        <div className="  grid grid-cols-3 ">
          <div
            onClick={closeModalFiltering}
            className=" w-6 h-6 border-Gray-35 border center rounded-full cursor-pointer "
          >
            <IoMdClose />
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

export const FilteringModalMobail: React.FC<FilteringModal> = memo(
  ({ closeModalFiltering }) => {
    const [seeMore, setSeeMore] = useState<boolean>(false)
    const [activeBedroomColumn, setActiveBedroomColumn] = useState<
      number | null
    >(null)
    const [activeParkingColumn, setActiveParkingColumn] = useState<
      number | null
    >(null)
    const [activeStorageColumn, setActiveStorageColumn] = useState<
      number | null
    >(null)
    const [activeToiletColumn, setActiveToiletColumn] = useState<number | null>(
      null
    )
    const [activeElevatorColumn, setActiveElevatorColumn] = useState<
      number | null
    >(null)
    const [activeFloorColumn, setActiveFloorColumn] = useState<number | null>(
      null
    )

    const [options, setOptions] = useState<string[]>([' منطقه ', 'نوع ملک'])

    const handleColumnClick = (
      setActiveColumn: React.Dispatch<React.SetStateAction<number | null>>,
      index: number
    ) => {
      setActiveColumn(index)
    }

    const toggleSeeMore = () => {
      setSeeMore((seeMore) => !seeMore)
    }

    const handleSelect = useCallback((index: number, value: string) => {
      setOptions((prevOptions) => {
        const newOptions = [...prevOptions]
        newOptions[index] = value
        return newOptions
      })
    }, [])

    const selectBoxData = [
      {
        label: 'منطقه',
        items: ['منطقه 1', 'منطقه 2', 'منطقه 22', 'منطقه 16', 'منطقه 6'],
      },
      {
        label: 'نوع',
        items: ['مسکونی', 'تجاری', 'بازرگانی'],
      },
    ]

    return ReactDOM.createPortal(
      <div className="modals-parent active    ">
        <div className="w-full overflow-y-auto h-[100vh] bg-white lg:rounded-2xl px-4 py-4">
          {/* close */}
          <div className=" flex  justify-end ">
            <div
              onClick={closeModalFiltering}
              className=" w-6 h-6 border-Gray-35 border center rounded-full cursor-pointer "
            >
              <IoMdClose />
            </div>
          </div>
          {/* logo */}
          <NavLink to={'/'} className=" flex items-center justify-center mt-3">
            <Logo />
          </NavLink>
          {/* select box */}
          <div className=" flex items-center justify-between mt mt-8 ">
            {selectBoxData.map((data, index) => (
              <div className=" flex flex-col items-start gap-1.5   font-shabnam text-sm ">
                <label htmlFor="">{data.label}</label>
                <SelectBox
                  key={index}
                  selectedOption={options[index]}
                  onSelect={(option) => handleSelect(index, option)}
                  width="w-27"
                  responsiveWidth="w-27"
                  responsiveHeight="h-12"
                >
                  {data.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </SelectBox>
              </div>
            ))}
          </div>
          {/* price  */}
          <div className=" flex items-end justify-between mt-8 ">
            <div className=" flex  flex-col gap-1.5 text-sm ">
              <span>متراژ</span>
              <div className=" rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
                <div className=" rounded-tr-sm rounded-br-sm  center w-6.25 h-full border border-l bg-primary text-white">
                  از
                </div>
                <input
                  className=" placeholder:text-xs font-shabnam   w-full h-full "
                  type="text"
                  placeholder=" مثلا 1000.000   متر"
                />
              </div>
            </div>
            <div className="  rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
              <div className=" rounded-tr-sm rounded-br-sm center w-6.25 h-full border border-l bg-primary text-white">
                تا
              </div>
              <input
                className=" placeholder:text-xs font-shabnam   w-full h-full "
                type="text"
                placeholder=" مثلا 1000.000   متر"
              />
            </div>{' '}
          </div>
          {/* Meterage */}
          <div className=" flex items-end justify-between mt-8 ">
            <div className=" flex  flex-col gap-1.5 text-sm ">
              <span>قیمت</span>
              <div className=" rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
                <div className=" rounded-tr-sm rounded-br-sm  center w-6.25 h-full border border-l bg-primary text-white">
                  از
                </div>
                <input
                  className=" placeholder:text-xs font-shabnam   w-full h-full "
                  type="text"
                  placeholder=" مثلا 1000.000   تومان"
                />
              </div>
            </div>
            <div className="  rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
              <div className=" rounded-tr-sm rounded-br-sm center w-6.25 h-full border border-l bg-primary text-white">
                تا
              </div>
              <input
                className=" placeholder:text-xs font-shabnam   w-full h-full "
                type="text"
                placeholder=" مثلا 1000.000   تومان"
              />
            </div>{' '}
          </div>
          {/* see more  */}
          <div
            onClick={toggleSeeMore}
            className=" mt-10 mb-4 cursor-pointer flex gap-1 items-center justify-center text-primary font-shabnam text-10 "
          >
            <span>مشاهده بیشتر</span>{' '}
            <IoIosArrowDown
              className={`${seeMore ? ' rotate-180 ' : ' rotate-0'} `}
            />
          </div>
          <div
            className={`w-full overflow-hidden transition-all  duration-1000  ${
              seeMore ? ' max-h-screen  ' : '  max-h-0'
            } `}
          >
            <div className="mt-6">
              <h6 className="font-shabnamBold text-xs text-Gray-35">
                اتاق خواب
              </h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9 ">
                      {['هر تعداد', 'بدون اتاق', '1', '2', '3', '3+'].map(
                        (item, index) => (
                          <td
                            key={index}
                            onClick={() =>
                              handleColumnClick(setActiveBedroomColumn, index)
                            }
                            className={`cursor-pointer  text-center ${
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
              <h6 className="font-shabnamBold text-xs text-Gray-35">پارکینگ</h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l  *:w-9.5 *:h-9 ">
                      {['دارد', 'ندارد'].map((item, index) => (
                        <td
                          key={index}
                          onClick={() =>
                            handleColumnClick(setActiveParkingColumn, index)
                          }
                          className={`cursor-pointer  text-center ${
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
              <h6 className="font-shabnamBold text-xs text-Gray-35">انباری</h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9 ">
                      {['دارد', 'ندارد'].map((item, index) => (
                        <td
                          key={index}
                          onClick={() =>
                            handleColumnClick(setActiveStorageColumn, index)
                          }
                          className={`cursor-pointer  text-center ${
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
              <h6 className="font-shabnamBold text-xs text-Gray-35">
                نوع سرویس بهداشتی
              </h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9 ">
                      {['مهم نیست', 'ایرانی', 'فرنگی', 'هردو'].map(
                        (item, index) => (
                          <td
                            key={index}
                            onClick={() =>
                              handleColumnClick(setActiveToiletColumn, index)
                            }
                            className={`cursor-pointer text-center ${
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
              <h6 className="font-shabnamBold text-xs text-Gray-35">آسانسور</h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5  *:h-9 ">
                      {['مهم نیست', 'دارد', 'ندارد'].map((item, index) => (
                        <td
                          key={index}
                          onClick={() =>
                            handleColumnClick(setActiveElevatorColumn, index)
                          }
                          className={`cursor-pointer text-center ${
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
              <h6 className="font-shabnamBold text-xs text-Gray-35">طبقات</h6>
              <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9">
                      {['مهم نیست', 'همکف', '1', '2', '+3'].map(
                        (item, index) => (
                          <td
                            key={index}
                            onClick={() =>
                              handleColumnClick(setActiveFloorColumn, index)
                            }
                            className={`cursor-pointer  text-center ${
                              activeFloorColumn === index
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
          </div>

          <div className=" flex items-center justify-center gap-4 *:cursor-pointer *:w-38 *:h-12  mt-15 ">
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
)
export default FilteringModal
