import ReactDOM from 'react-dom'
// import { IoCallOutline } from 'react-icons/io5'
import { memo, useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { AuthContext } from '../../../../context/auth/authContext'
import { UserInfos } from '../../Cards/personalInformationBox/Personalinformation'

type RealEstateModalProps = {
  closeModal: () => void
  isModalVisible: boolean
  isConsultantInfo?: boolean
  userInfos: UserInfos
}

const RealEstateModal: React.FC<RealEstateModalProps> = memo(
  ({ closeModal, isModalVisible, isConsultantInfo, userInfos }) => {
    // const [activeNumber, setActiveNumber] = useState<number>(1)

    // const handleClick = useCallback(
    //   (number: number) => {
    //     setActiveNumber(number)
    //   },
    //   [setActiveNumber]
    // )

    const auth = useContext(AuthContext)
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
            <div className="  flex flex-col items-center  gap-y-2   justify-start  mt-3">
              {auth.userInfo?.role === 'real_estate_agent' ? (
                <div className="  flex flex-col items-center ">
                  <div className=" w-35 h-20">
                    <img
                      className=" w-full h-full object-contain"
                      src="../../../public/img/Real Estate Logo 1.png"
                      alt="img"
                    />
                  </div>
                  {/* personal infomation */}
                  <h6 className="  font-shabnamBold  mb-8 text-2xl mt-3 lg:mt-8">
                    املاک توسی
                  </h6>
                </div>
              ) : (
                ''
              )}
              <div className=" flex items-start justify-center  **:font-shabnam text-base  lg:text-xl gap-2  lg:mt-0 ">
                نام مالک :
                <span className=" text-gray-71  text-base ">
                  {userInfos.firstName} {userInfos.lastName}
                </span>
              </div>
              <div className=" flex items-center justify-center   gap-x-2    **:font-shabnam text-base  lg:text-xl mt-10 lg:mt-0 ">
                تلفن همراه :
                <span  className=" text-gray-71  text-base ">
                  {userInfos?.phoneNumber}{' '}
                </span>
              </div>
              {/* Consultant  information */}
              {isConsultantInfo && (
                <>
                  {/* <div className=" flex flex-col items-center justify-center gap-2.5  mt-14 lg:mt-8  text-xs lg:text-base text-blue-tick   font-shabnam ">
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
                  </div> */}
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
