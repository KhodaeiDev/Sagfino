import ReactDOM from 'react-dom'
import { IoCallOutline } from 'react-icons/io5'

type RealEstateModalProps = {
  closeModal: () => void
  isModalVisible: boolean
}

const RealEstateModal: React.FC<RealEstateModalProps> = ({
  closeModal,
  isModalVisible,
}) => {
  return ReactDOM.createPortal(
    <div className={`modals-parent ${isModalVisible ? 'active' : ''}`}>
      <div className="  w-full h-full  lg:w-150 lg:h-100 bg-white lg:rounded-2xl">
        <div className="container">
          <div className=" w-full flex items-center  justify-end pl-1  pt-4 ">
            <div
              onClick={closeModal}
              className=" cursor-pointer center w-5 h-5 rounded-full border border-black"
            >
              x
            </div>
          </div>
          {/* contet */}
          <div className="  flex flex-col items-center  px-28 mt-8">
            <img
              className=" lg:w-40 lg:h-22 w-38 h-24   "
              src="../../../public/img/Real Estate Logo 1.png"
              alt="img"
            />
            <h6 className="  font-shabnamBold  mb-8 text-2xl mt-3 lg:mt-8">
              املاک توسی
            </h6>
            <div className=" **:flex **:items-center **:gap-x-0.5 gap-y-3 flex flex-col  mb-20  **:font-shabnam text-base  lg:text-xl mt-10 lg:mt-0 ">
              <span>
                ۰۹۱۲۳۴۵۶۷۸۹
                <IoCallOutline className="   w-7 font-shabnam text-2xl   text-blue-tick " />
              </span>
              <span>
                ۰۲۱۱۲۳۴۵۶۷۸
                <IoCallOutline className="  w-7 font-shabnam text-2xl text-blue-tick " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modals-parent') as Element
  )
}

export default RealEstateModal