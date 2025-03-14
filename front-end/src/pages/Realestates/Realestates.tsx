import React, { useState } from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import EstateBox from '../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../components/shared/UIComponents/sectionHeader/sectionHeader'
import RealEstateModal from '../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import { RiSearch2Line } from 'react-icons/ri'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const Realestates: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  document.title = 'سقفینو-املاک و مستغلات'

  return (
    <>
      <NavBar></NavBar>
      <NavBarMobail></NavBarMobail>
      <div className="container">
        <div className=" mt-12 ">
          <SectionHeader title="املاک و مستغلات" center={false} />
        </div>
        <div className=" my-10 ">
          <div className=" w-full lg:w-xl border border-gray-90 h-12 md:h-16 rounded-xl  flex items-center justify-between pl-4 pr-4.5 ">
            <div className=" flex items-center gap-3  text-xs  lg:text-base text-gray-1000">
              <RiSearch2Line className=" text-2xl  " />
              <input
                placeholder="شهر مورد نظر را اضافه کنید"
                className=" outline-0 bg-transparent font-shabnam  placeholder:text-gray-1000 "
                type="text"
              />
            </div>
            {/* tag city */}
            <div className=" flex items-center  ">
              <div className=" border  text-sm md:text-base border-gray-90 w-19 md:w-21.5 h-8 md:h-10 flex items-center justify-between p-1.5 md:p-2.5 rounded-lg">
                تهران
                <div className="  cursor-pointer w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border border-black center">
                  x
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2.5 lg:gap-x-6 lg:gap-y-4 ">
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
          <EstateBox openModal={openModal} />
         
     
      
        </div>
        <div className=" flex items-center justify-center gap-3 my-8 ">
          <Pagination />
        </div>{' '}
      </div>
      <Footer />
      <FooterMobail />
      {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default Realestates
