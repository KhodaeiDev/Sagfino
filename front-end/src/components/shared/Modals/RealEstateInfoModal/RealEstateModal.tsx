import ReactDOM from 'react-dom'
import { IoCallOutline } from 'react-icons/io5'
import { memo, useCallback, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

type RealEstateModalProps = {
  closeModal: () => void
  isModalVisible: boolean
  isConsultantInfo?: boolean
}

const RealEstateModal: React.FC<RealEstateModalProps> = memo(
  ({ closeModal, isModalVisible, isConsultantInfo }) => {
    const [activeNumber, setActiveNumber] = useState<number>(1)

    const handleClick = useCallback(
      (number: number) => {
        setActiveNumber(number)
      },
      [setActiveNumber]
    )

    return ReactDOM.createPortal(
      <div className={`modals-parent ${isModalVisible ? 'active' : ''}`}>
        <div className="  w-full  lg:w-150   h-auto  bg-white lg:rounded-2xl pb-10">
          <div className="container">
            <div className=" w-full flex items-center  justify-end pl-1  pt-4 ">
              <div
                onClick={closeModal}
                className=" cursor-pointer center w-5 h-5 rounded-full border border-black"
              >
                <IoMdClose />
              </div>
            </div>
            {/* contet */}
            <div className="  flex flex-col items-center  px-28 mt-8">
              <img
                className=" lg:w-40 lg:h-22 w-38 h-24   "
                src="../../../public/img/Real Estate Logo 1.png"
                alt="img"
              />
              {/* personal infomation */}
              <h6 className="  font-shabnamBold  mb-8 text-2xl mt-3 lg:mt-8">
                املاک توسی
              </h6>
              <div className=" **:flex **:items-center **:gap-x-0.5 gap-y-3 flex flex-col   **:font-shabnam text-base  lg:text-xl mt-10 lg:mt-0 ">
                <span>
                  ۰۹۱۲۳۴۵۶۷۸۹
                  <IoCallOutline className="   w-7 font-shabnam text-2xl   text-blue-tick " />
                </span>
                <span>
                  ۰۲۱۱۲۳۴۵۶۷۸
                  <IoCallOutline className="  w-7 font-shabnam text-2xl text-blue-tick " />
                </span>
              </div>
              {/* Consultant  information */}
              {isConsultantInfo && (
                <>
                  <div className=" flex flex-col items-center justify-center gap-2.5  mt-14 lg:mt-8  text-xs lg:text-base text-blue-tick   font-shabnam ">
                    <div className=" flex items-center justify-between gap-2.5  ">
                      <div className=" w-4 h-4 lg:w-6 lg:h-6 border border-blue-tick rounded-full   center text-lg ">
                        !
                      </div>
                      <span>شناسه آگهی ملک :</span>
                      <span className=" border-b-1  lg:border-b-2 border-blue-tick">
                        2344
                      </span>
                    </div>
                    <p className=" text-gray-90 text-xs lg:text-sm ">
                      لطفاً این شناسه را هنگام تماس با مشاور به‌یاد داشته باشید
                    </p>
                  </div>
                  <div className=" flex flex-col mt-8 ">
                    <p className=" font-shabnam   text-Gray-35  text-sm ">
                      چه امتیازی به مشاور املاک توسی می دهید ؟
                    </p>
                    {/* scoring */}
                    <div className="flex flex-row-reverse items-center justify-center gap-2 mt-3 text-sm text-gray-90">
                      {[1, 2, 3, 4, 5].map((number) => (
                        <div
                          key={number}
                          onClick={() => handleClick(number)}
                          className={`center rounded-lg w-7.5 h-7.5 lg:w-8.5 lg:h-7.5 border ${
                            activeNumber === number
                              ? 'bg-primary text-white border-primary'
                              : 'bg-gray-90/30 border-gray-90 text-gray-90'
                          } cursor-pointer`}
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modals-parent') as Element
    )
  }
)

export default RealEstateModal
