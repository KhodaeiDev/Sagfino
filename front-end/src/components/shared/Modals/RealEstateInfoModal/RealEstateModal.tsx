import ReactDOM from 'react-dom'
// import { IoCallOutline } from 'react-icons/io5'
import { memo, useCallback, useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { UserInfos } from '../../Cards/personalInformationBox/Personalinformation'
import { scoringRequest } from '../../../../services/axois/request/RealEstate/RealEstate'
import { useMutation } from '@tanstack/react-query'
import ToastNotification from '../../../../services/toastify/toastify'
import { AuthContext } from '../../../../context/auth/authContext'

type RealEstateInfosTypes = {
  id: number
  image: string
  name: string
}

type RealEstateModalProps = {
  closeModal: () => void
  isModalVisible: boolean
  isConsultantInfo?: boolean
  userInfos: UserInfos
  realEstateInfos?: RealEstateInfosTypes
}

const RealEstateModal: React.FC<RealEstateModalProps> = memo(
  ({
    closeModal,
    isModalVisible,
    isConsultantInfo,
    userInfos,
    realEstateInfos,
  }) => {
    const [activeNumber, setActiveNumber] = useState<number>(0)

    const handleClick = useCallback(
      (number: number) => {
        setActiveNumber(number)
      },
      [setActiveNumber]
    )
    const auth = useContext(AuthContext)
    const mutation = useMutation({
      mutationFn: (scoringInfo: { real_estate_id: number; rate: number }) =>
        scoringRequest(scoringInfo),
      onSuccess: () => {
        ToastNotification('success', 'امتیاز با موفقیت ثبت شد', 5000)
      },
      onError: () => {
        ToastNotification('error', ' خط در ثبت امتیاز', 5000)
      },
    })

    const submitRating = () => {
      if (!realEstateInfos) {
        ToastNotification('error', ' اطلاعات ملک موجود نیست.', 5000)
        auth.logout()
        return
      }
      mutation.mutate({
        real_estate_id: realEstateInfos.id,
        rate: activeNumber,
      })
    }

    return ReactDOM.createPortal(
      <div className={`modals-parent ${isModalVisible ? 'active' : ''}`}>
        <div className="w-full lg:w-150 h-auto bg-white lg:rounded-2xl pb-10">
          <div className="container">
            <div className="w-full flex items-center justify-end pl-1 pt-4">
              <div
                onClick={closeModal}
                className="cursor-pointer center w-5 h-5 rounded-full border border-black"
              >
                <IoMdClose />
              </div>
            </div>
            {/* content */}
            <div className="flex flex-col items-center gap-y-2 justify-start mt-3">
              {isConsultantInfo ? (
                <div className="flex flex-col items-center">
                  <div className="w-35 h-20">
                    <img
                      className="w-full h-full object-contain"
                      src={`https://saghfino.abolfazlhp.ir/storage/${realEstateInfos?.image}`}
                      alt="logo"
                      onError={(event) => {
                        ;(event.target as HTMLImageElement).src =
                          '/img/Photo Place.png'
                      }}
                    />
                  </div>
                  <h6 className="font-shabnamBold mb-8 text-2xl mt-3 lg:mt-8">
                    {realEstateInfos?.name}
                  </h6>
                </div>
              ) : (
                ''
              )}

              <div className="flex items-start justify-center **:font-shabnam text-base lg:text-xl gap-2 lg:mt-0">
                نام مالک :
                <span className="text-gray-71 text-base">
                  {userInfos.firstName} {userInfos.lastName}
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-2 **:font-shabnam text-base lg:text-xl mt-10 lg:mt-0">
                تلفن همراه :
                <a
                  href={`tel:${userInfos?.phoneNumber}`}
                  className="text-gray-71 text-base"
                >
                  {userInfos?.phoneNumber}
                </a>
              </div>
              <span className="text-center text-primary text-lg">
                برای تماس با صاحب آگهی، روی شماره کلیک کنید (این قابلیت تنها روی
                تلفن همراه فعال است).
              </span>

              {/* Consultant information */}
              {isConsultantInfo && (
                <>
                  <div className="flex flex-col mt-8">
                    <p className="font-shabnam text-Gray-35 text-sm">
                      چه امتیازی به مشاور املاک می دهید ؟
                    </p>
                    <div className="flex flex-row-reverse items-center justify-center gap-2 mt-3 text-sm text-gray-90">
                      {[0, 1, 2, 3, 4, 5].map((number) => (
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

                    {/* دکمه ثبت امتیاز */}
                    <div className="mt-5 flex justify-center">
                      <button
                        disabled={mutation.isPending}
                        onClick={submitRating}
                        className={`!cursor-pointer px-6 py-2 rounded-lg text-white font-shabnam ${
                          mutation.isPending
                            ? 'bg-gray-400 !cursor-not-allowed'
                            : 'bg-primary hover:bg-white hover:border-primary hover:border hover:text-black transition-all duration-300'
                        }`}
                      >
                        {mutation.isPending ? 'در حال ارسال...' : 'ثبت امتیاز'}
                      </button>
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
