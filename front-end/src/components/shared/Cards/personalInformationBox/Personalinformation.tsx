import { useCallback, useState, useEffect } from 'react'
import RealEstateModal from '../../Modals/RealEstateInfoModal/RealEstateModal'
import { FaUserCircle } from 'react-icons/fa'

export type UserInfos = {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
  image: string | null
  created_at: string
  updated_at: string
  active_ads:number
}

const PersonalInformation: React.FC<{ userInfos: UserInfos }> = ({
  userInfos,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const openModal = useCallback(() => {
    setIsModalVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [])
  const [isConsultantInfo, setIsConsultantInfo] = useState<boolean>(false)

  useEffect(() => {
    setIsConsultantInfo(true)
  }, [])

  return (
    <>
      <div className=" lg:w-sm    w-75 h-fit  border border-gray-D9 rounded-2xl p-3 lg:p-6  ">
        <div className=" grid grid-cols-12  gap-x-6 lg:gap-x-9  w-full h-full ">
          {/* content right */}
          <div className="  col-span-3 ">
            <div className=" w-15 h-15 lg:w-22 lg:h-22  rounded-full ">
              {userInfos?.image ? (
                <img
                  src={`https://saghfino.abolfazlhp.ir/storage/${userInfos?.image}`}
                  className=" w-full h-full object-cover"
                  alt="img-personal"
                />
              ) : (
                <FaUserCircle size={80} className=" text-primary" />
              )}
            </div>
          </div>
          {/* content left */}
          <div className="col-span-9  grid-flow-col   ">
            {/* {auth.userInfo?.role === 'real_estate_agent' ? (
              <div className=" flex items-center gap-1.5 mb-2">
                <img
                  className=" w-4 h-4 lg:w-9 lg:h-9 "
                  src="/img/Real Estate Logo 1.png"
                  alt="logo"
                />
                <span className=" font-shabnamBold text-base text-gray-1000">
                  {' '}
                  املاک ولیعصز
                </span>
              </div>
            ) : (
              ''
            )} */}

            <div className=" flex flex-col  text-xs lg:text-sm text-Gray-35  gap-y-1">
              <h6 className=" font-shabnamBold text-base lg:text-2xl  text-gray-21 ">
                {userInfos?.firstName} {userInfos?.lastName}
              </h6>
              {/* <span>امتیاز 4 از 5</span> */}
              <span> {userInfos.active_ads} آگهی فعال </span>
            </div>
            <button
              onClick={openModal}
              className="  transition-all duration-300 hover:opacity-80  cursor-pointer  mt-2  py-2 px-15  center  text-white bg-primary  text-xs lg:text-sm font-shabnamMedium rounded-sm  lg:rounded-lg "
            >
              اطلاعات تماس
            </button>
          </div>
        </div>
      </div>
      {isModalVisible && userInfos?.id && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          isConsultantInfo={isConsultantInfo}
          userInfos={userInfos}
        />
      )}
    </>
  )
}

export default PersonalInformation
