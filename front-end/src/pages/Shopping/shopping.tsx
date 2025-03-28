import {
  NavBar,
  NavBarMobail,
} from '../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import Sorting from '../../components/shared/UIComponents/FormElements/sorting/sorting'
import ProductBox from '../../components/shared/Cards/productBox/productBox'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { useState } from 'react'
import BoxEstate from '../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../components/shared/UIComponents/sectionHeader/sectionHeader'
import RealEstateModal from '../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import Pagination from '../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import FilteringModal from '../../components/shared/Modals/filteringModal/filteringModal'
import { useMediaQuery } from 'react-responsive'

import { FilteringModalMobail } from '../../components/shared/Modals/filteringModal/filteringModal'
// import NoProducts from '../../components/NoProducts/NoProducts'

const Rent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('نوع ملک')
  const [isopenModalFiltering, setOpenModalFiltering] = useState<boolean>(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const openModalFiltering = () => {
    setOpenModalFiltering(true)
  }

  const closeModalFiltering = () => {
    setOpenModalFiltering(false)
  }
  document.title = 'سقفینو - خرید'

  return (
    <>
      <div className=" hidden lg:flex">
        <NavBar />
      </div>
      <div className=" lg:hidden">
        <NavBarMobail />
      </div>

      <div>
        <Sorting openModalFiltering={openModalFiltering} />
        <div className="container">
          {/* sorting */}
          <div className=" hidden  md:flex  gap-2 my-6 items-center justify-between">
            <div className=" flex flex-col gap-y-3">
              <h3 className=" text-2xl font-shabnamBold">املاک فروشی </h3>
              <span className="  font-shabnam text-primary">
                ۴۷.۵۰۷ مورد یافت شد
              </span>
            </div>
            <SelectBox
              selectedOption={selectedOption}
              onSelect={handleSelect}
              responsiveWidth="w-28  lg:w-48"
              responsiveHeight="h-8  lg:h-12"
            >
              <li>جدیدترین</li>
              <li>قدیمی‌ترین</li>
              <li>ارزان‌ترین</li>
              <li>گران‌ترین</li>
            </SelectBox>
          </div>
          {/* products */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
          </div>
          {/* <NoProducts></NoProducts> */}
        </div>

        <div className="mt-8">
          <SectionHeader
            title={'املاک مربوط'}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <div className="container">
            <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4 mt-4">
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
            </div>
          </div>

          <div className="container mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-25.5">
        <div className=" flex items-center justify-center gap-3 ">
          <Pagination />
        </div>
      </div>
      {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )}
      <Footer />
      <FooterMobail />
      {isopenModalFiltering && (
        <>
          {isMobile ? (
            <FilteringModalMobail closeModalFiltering={closeModalFiltering} />
          ) : (
            <FilteringModal closeModalFiltering={closeModalFiltering} />
          )}
        </>
      )}
    </>
  )
}

export default Rent
