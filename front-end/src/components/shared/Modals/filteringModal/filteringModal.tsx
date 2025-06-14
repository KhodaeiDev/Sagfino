import React, { memo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Logo from '../../UIComponents/logo/logo'
import { IoIosArrowDown } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { NavLink, useSearchParams } from 'react-router'

type FilteringModal = {
  closeModalFiltering: () => void
}

const FilteringModal: React.FC<FilteringModal> = ({ closeModalFiltering }) => {
  const [activeParking, setActiveParking] = useState<string | null>(null)
  const [activeToilet, setActiveToilet] = useState<string | null>(null)
  const [activeElevator, setActiveElevator] = useState<string | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const handleColumnClick = (
    setActiveColumn: React.Dispatch<React.SetStateAction<string | null>>,
    value: string,
    filterName: string
  ) => {
    setActiveColumn(value)
    localStorage.setItem(filterName, value)
  }
  useEffect(() => {
    setActiveParking(localStorage.getItem('hasParking') || null)
    setActiveToilet(localStorage.getItem('typeOfWc') || null)
    setActiveElevator(localStorage.getItem('hasElevator') || null)
  }, [])

  const filterSearchHandle = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('hasParking', String(activeParking))
    newParams.set('typeOfWc', String(activeToilet))
    newParams.set('hasElevator', String(activeElevator))
    closeModalFiltering()
    setSearchParams(newParams)
  }

  const removeFilters = () => {
    setActiveParking('')
    setActiveElevator('')
    setActiveToilet('')
    localStorage.removeItem('hasParking')
    localStorage.removeItem('typeOfWc')
    localStorage.removeItem('hasElevator')
  }
  const isFilterComplete = activeParking && activeToilet && activeElevator
  const buttonText = isFilterComplete ? 'جستجو' : ' فیلترها را کامل کنید'

  return ReactDOM.createPortal(
    <div className="modals-parent active ">
      <div className="w-2xl overflow-y-auto h-[95vh] bg-white rounded-2xl  px-5 md:px-20 py-8">
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
          <h6 className="font-shabnamBold text-base text-Gray-35">پارکینگ</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['دارد', 'ندارد'].map((item) => (
                    <td
                      key={item}
                      onClick={() =>
                        handleColumnClick(setActiveParking, item, `hasParking`)
                      }
                      className={`cursor-pointer text-center ${
                        activeParking === item ? 'bg-primary text-white' : ''
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
                  {['ایرانی', 'فرنگی', 'هردو'].map((item) => (
                    <td
                      key={item}
                      onClick={() =>
                        handleColumnClick(setActiveToilet, item, `typeOfWc`)
                      }
                      className={`cursor-pointer text-center ${
                        activeToilet === item ? 'bg-primary text-white' : ''
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
          <h6 className="font-shabnamBold text-base text-Gray-35">آسانسور</h6>
          <div className="overflow-x-auto rounded-2xl border border-gray-D9 mt-3">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="*:text-sm *:font-shabnamMedium *:py-2 *:px-6 *:border-gray-ED *:border-l">
                  {['مهم نیست', 'دارد', 'ندارد'].map((item) => (
                    <td
                      key={item}
                      onClick={() =>
                        handleColumnClick(
                          setActiveElevator,
                          item,
                          `hasElevator`
                        )
                      }
                      className={`cursor-pointer ${
                        activeElevator === item ? 'bg-primary text-white' : ''
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
          {!isFilterComplete ? (
            ''
          ) : (
            <button
              onClick={removeFilters}
              className="center  text-white border  bg-primary  hover:text-primary hover:bg-white  hover:border-primary transition-all duration-300 rounded-lg "
            >
              حذف فیلتر
            </button>
          )}

          <button
            onClick={filterSearchHandle}
            disabled={!isFilterComplete}
            className={`center border rounded-xl transition-all duration-300 
    ${
      isFilterComplete
        ? 'bg-primary text-white hover:text-primary hover:bg-white hover:border-primary'
        : 'bg-gray-400 text-gray-200 border-gray-300 !cursor-not-allowed'
    }
  `}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modals-parent') as Element
  )
}

// export const FilteringModalMobail: React.FC<FilteringModal> = memo(
//   ({ closeModalFiltering }) => {
//     const [seeMore, setSeeMore] = useState<boolean>(false)

//     const toggleSeeMore = () => {
//       setSeeMore((seeMore) => !seeMore)
//     }

//     return ReactDOM.createPortal(
//       <div className="modals-parent active    ">
//         <div className="w-full overflow-y-auto h-[100vh] bg-white lg:rounded-2xl px-4 py-4">
//           {/* close */}
//           <div className=" flex  justify-end ">
//             <div
//               onClick={closeModalFiltering}
//               className=" w-6 h-6 border-Gray-35 border center rounded-full cursor-pointer "
//             >
//               <IoMdClose />
//             </div>
//           </div>
//           {/* logo */}
//           <NavLink to={'/'} className=" flex items-center justify-center mt-3">
//             <Logo />
//           </NavLink>
//           {/* select box */}

//           {/* price  */}
//           <div className=" flex items-end justify-between mt-8 ">
//             <div className=" flex  flex-col gap-1.5 text-sm ">
//               <span>متراژ</span>
//               <div className=" rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
//                 <div className=" rounded-tr-sm rounded-br-sm  center w-6.25 h-full border border-l bg-primary text-white">
//                   از
//                 </div>
//                 <input
//                   className=" placeholder:text-xs font-shabnam   w-full h-full "
//                   type="text"
//                   placeholder=" مثلا 1000.000   متر"
//                 />
//               </div>
//             </div>
//             <div className="  rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
//               <div className=" rounded-tr-sm rounded-br-sm center w-6.25 h-full border border-l bg-primary text-white">
//                 تا
//               </div>
//               <input
//                 className=" placeholder:text-xs font-shabnam   w-full h-full "
//                 type="text"
//                 placeholder=" مثلا 1000.000   متر"
//               />
//             </div>{' '}
//           </div>
//           {/* Meterage */}
//           <div className=" flex items-end justify-between mt-8 ">
//             <div className=" flex  flex-col gap-1.5 text-sm ">
//               <span>قیمت</span>
//               <div className=" rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
//                 <div className=" rounded-tr-sm rounded-br-sm  center w-6.25 h-full border border-l bg-primary text-white">
//                   از
//                 </div>
//                 <input
//                   className=" placeholder:text-xs font-shabnam   w-full h-full "
//                   type="text"
//                   placeholder=" مثلا 1000.000   تومان"
//                 />
//               </div>
//             </div>
//             <div className="  rounded-sm flex items-center gap-1  w-34 h-8 border border-gray-D9 ">
//               <div className=" rounded-tr-sm rounded-br-sm center w-6.25 h-full border border-l bg-primary text-white">
//                 تا
//               </div>
//               <input
//                 className=" placeholder:text-xs font-shabnam   w-full h-full "
//                 type="text"
//                 placeholder=" مثلا 1000.000   تومان"
//               />
//             </div>{' '}
//           </div>
//           {/* see more  */}
//           <div
//             onClick={toggleSeeMore}
//             className=" mt-10 mb-4 cursor-pointer flex gap-1 items-center justify-center text-primary font-shabnam text-10 "
//           >
//             <span>مشاهده بیشتر</span>{' '}
//             <IoIosArrowDown
//               className={`${seeMore ? ' rotate-180 ' : ' rotate-0'} `}
//             />
//           </div>
//           <div
//             className={`w-full overflow-hidden transition-all  duration-1000  ${
//               seeMore ? ' max-h-screen  ' : '  max-h-0'
//             } `}
//           >
//             <div className="mt-6">
//               <h6 className="font-shabnamBold text-xs text-Gray-35">پارکینگ</h6>
//               <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
//                 <table className="min-w-full bg-white">
//                   <tbody>
//                     <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l  *:w-9.5 *:h-9 ">
//                       {['دارد', 'ندارد'].map((item, index) => (
//                         <td
//                           key={index}
//                           onClick={() =>
//                             handleColumnClick(setActiveParkingColumn, index)
//                           }
//                           className={`cursor-pointer  text-center ${
//                             activeParkingColumn === index
//                               ? 'bg-primary text-white'
//                               : ''
//                           }`}
//                         >
//                           {item}
//                         </td>
//                       ))}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="mt-6">
//               <h6 className="font-shabnamBold text-xs text-Gray-35">انباری</h6>
//               <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
//                 <table className="min-w-full bg-white">
//                   <tbody>
//                     <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9 ">
//                       {['دارد', 'ندارد'].map((item) => (
//                         <td
//                           key={item}
//                           onClick={() =>
//                             handleColumnClick(setActiveToiletColumn, item)
//                           }
//                           className={`cursor-pointer text-center ${
//                             activeParking === item
//                               ? 'bg-primary text-white'
//                               : ''
//                           }`}
//                         >
//                           {item}
//                         </td>
//                       ))}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="mt-6">
//               <h6 className="font-shabnamBold text-xs text-Gray-35">
//                 نوع سرویس بهداشتی
//               </h6>
//               <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
//                 <table className="min-w-full bg-white">
//                   <tbody>
//                     <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9 ">
//                       {['مهم نیست', 'ایرانی', 'فرنگی', 'هردو'].map(
//                         (item, index) => (
//                           <td
//                             key={index}
//                             onClick={() =>
//                               handleColumnClick(setActiveToiletColumn, index)
//                             }
//                             className={`cursor-pointer text-center ${
//                               activeToiletColumn === index
//                                 ? 'bg-primary text-white'
//                                 : ''
//                             }`}
//                           >
//                             {item}
//                           </td>
//                         )
//                       )}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="mt-6">
//               <h6 className="font-shabnamBold text-xs text-Gray-35">آسانسور</h6>
//               <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
//                 <table className="min-w-full bg-white">
//                   <tbody>
//                     <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5  *:h-9 ">
//                       {['مهم نیست', 'دارد', 'ندارد'].map((item, index) => (
//                         <td
//                           key={index}
//                           onClick={() =>
//                             handleColumnClick(setActiveElevatorColumn, index)
//                           }
//                           className={`cursor-pointer text-center ${
//                             activeElevatorColumn === index
//                               ? 'bg-primary text-white'
//                               : ''
//                           }`}
//                         >
//                           {item}
//                         </td>
//                       ))}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="mt-6">
//               <h6 className="font-shabnamBold text-xs text-Gray-35">طبقات</h6>
//               <div className="overflow-x-auto rounded-lg border border-gray-D9 mt-3">
//                 <table className="min-w-full bg-white">
//                   <tbody>
//                     <tr className="*:text-xs *:font-shabnamMedium *:py-2 *:px-1 *:border-gray-ED *:border-l *:w-9.5 *:h-9">
//                       {['مهم نیست', 'همکف', '1', '2', '+3'].map(
//                         (item, index) => (
//                           <td
//                             key={index}
//                             onClick={() =>
//                               handleColumnClick(setActiveFloorColumn, index)
//                             }
//                             className={`cursor-pointer  text-center ${
//                               activeFloorColumn === index
//                                 ? 'bg-primary text-white'
//                                 : ''
//                             }`}
//                           >
//                             {item}
//                           </td>
//                         )
//                       )}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           <div className=" flex items-center justify-center gap-4 *:cursor-pointer *:w-38 *:h-12  mt-15 ">
//             <div className="center text-primary border border-primary rounded-lg ">
//               حذف فیلتر
//             </div>
//             <div className="center text-white border  bg-primary rounded-xl  ">
//               جستوجو
//             </div>
//           </div>
//         </div>
//       </div>,
//       document.getElementById('modals-parent') as Element
//     )
//   }
// )
export default FilteringModal
