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
      <div className="   w-100 h-80 bg-white rounded-2xl">
        <div className=" w-full flex items-center  justify-end pl-4  pt-4 ">
          <div
            onClick={closeModal}
            className=" cursor-pointer center w-5 h-5 rounded-full border border-black"
          >
            x
          </div>
        </div>
        {/* contet */}
        <div className=" w-full h-full flex flex-col  items-center  justify-center">
          <img src="../../../public/img/Real Estate Logo 1.png" alt="" />
          <h6 className="  font-shabnamBold  mb-8   text-2xl mt-8">
            املاک توسی
          </h6>
          <div className=" **:flex **:items-center gap-x-2 gap-y-3 flex flex-col  pb-20  **:font-shabnam  text-xl ">
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
    </div>,
    document.getElementById('modals-parent') as Element
  )
}

export default RealEstateModal
