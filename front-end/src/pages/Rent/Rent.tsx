import { NavBar } from '../../components/navBar/navBar'
import Sorting from '../../components/sorting/sorting'
import { NavBarMobail } from '../../components/navBar/navBar'
import ProductBox from '../../components/productBox/productBox'
import SelectBox from '../../components/selectBox/selectBox'
import { useState } from 'react'
import BoxEstate from '../../components/boxEstate/boxEstate'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import RealEstateModal from '../../components/RealEstateInfoModal/RealEstateModal'
import Pagination from '../../components/pagination/pagination'
import { Footer, FooterMobail } from '../../components/footer/footer'
import FilteringModal from '../../components/filteringModal/filteringModal'
import { useMediaQuery } from 'react-responsive'

import { FilteringModalMobail } from '../../components/filteringModal/filteringModal'

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
              <h3 className=" text-2xl font-shabnamBold">املاک اجاره‌ای</h3>
              <span className="  font-shabnam text-primary">
                ۴۷.۵۰۷ مورد یافت شد
              </span>
            </div>
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>جدیدترین</li>
              <li>قدیمی ترین</li>
              <li>ارزان ترین</li>
              <li>گران ترین</li>
            </SelectBox>
          </div>
          {/* products */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
            <ProductBox></ProductBox>
          </div>
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
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
              <ProductBox></ProductBox>
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
