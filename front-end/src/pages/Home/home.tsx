import Header from '../../components/Header/Header'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
// import BoxHelp from '../../components/boxHelp/boxHelp'
// import PublicBox from '../../components/publicBox/publicBox'
import ProductBox from '../../components/productBox/productBox'
// import NewsBox from '../../components/newsBox/newsBox'
import { Footer, FooterMobail } from '../../components/footer/footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import React from 'react'
import { NavLink } from 'react-router'
import ConsultantBox from '../../components/consultantBox/consultantBox'
import BoxEstate from '../../components/boxEstate/boxEstate'

const Home: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/*HousingHelp => SearchUser  LatestHomeListings */}
      <div className=" mt-14 lg:mt-26">
        {/* HousingHelp */}
        {/* <div className="container">
          <SectionHeader
            title={'سقفینو چطور به خانه‌دار شدن شما کمک می‌کند '}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
            <BoxHelp />
            <BoxHelp />
            <BoxHelp />
          </div>
        </div> */}
        {/* LatestHomeListings */}
        <div className="container">
          <SectionHeader
            title={'جدیدترین خانه‌های اجاره‌ای تهران '}
            dec={''}
            center={false}
            btnTitle={'مشاهده همه'}
            btnHref={''}
          />
          <div className=" grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2.5 lg:gap-x-6 lg:gap-y-4">
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
      {/* PropertyTypesSection */}
      <div className="PropertyTypesSection mt-12 lg:mt-22">
        {/* /* PropertyTypesSection  */}
        {/* <div className="container">
          <SectionHeader
            title={'در سقفینو دنبال چه نوع ملکی هستید'}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" grid  grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-6">
            <PublicBox />
            <PublicBox />
            <PublicBox />
            <PublicBox />
          </div>
        </div> */}
        {/* services */}
        <div className="container">
          <SectionHeader
            title={'سقفینو فرصتی برای همه'}
            dec={'اگر مالک یا در جست‌‌وجوی سقفی نو هستید، کلیک کنید'}
            center={true}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" grid  grid-cols-2 lg:grid-cols-3 xl:gap-4  lg:gap-6  ">
            <NavLink
              to={''}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="../../../public/img/Photo.png" alt="svg" />
              <h5 className=" mt-5 text-black text-xs  lg:text-2xl font-shabnam ">
                با ثبت آسان آگهی، ملک خود را برای اجاره یا فروش اعلان کنید
              </h5>
            </NavLink>
            <NavLink
              to={''}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="../../../public/img/Photo.png" alt="svg" />
              <h5 className=" mt-5 text-black text-xs  lg:text-2xl font-shabnam ">
                با ثبت آسان آگهی، ملک خود را برای اجاره یا فروش اعلان کنید
              </h5>
            </NavLink>
            <NavLink
              to={''}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="../../../public/img/Photo.png" alt="svg" />
              <h5 className=" mt-5 text-black text-xs  lg:text-2xl font-shabnam ">
                با ثبت آسان آگهی، ملک خود را برای اجاره یا فروش اعلان کنید
              </h5>
            </NavLink>
          </div>
        </div>
      </div>
      {/*Customer-service || Top real estate */}
      <div className="Customer-service mt-8 lg:mt-22">
        {/* <div className="container">
          <SectionHeader
            title={'همه به شما مشاوره می‌دهند!'}
            dec={'اما در سقفینو مشاوران املاک کِنار شما می‌مانند'}
            center={true}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" grid grid-cols-2  lg:grid-cols-3   gap-4 lg:gap-32  2xl:px-30">
            <div className=" py-4 px-7 center flex-col  lg:py-6 lg:px-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl">
              <img src="../../../public/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
            <div className=" py-4 px-7 center flex-col  lg:py-6 lg:px-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl">
              <img src="../../../public/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
            <div className=" py-4 px-7 center flex-col  lg:py-6 lg:px-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl">
              <img src="../../../public/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
          </div>
        </div> */}
        <div className="container">
          <SectionHeader
            title={'املاک برتر تهران '}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              0: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
            className="mySwiper mySwiper-top-state"
          >
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
            <SwiperSlide>
              <BoxEstate />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* News Saghfinoo||estate Consultant */}
        <div className="News Saghfinoo  mt-12 lg:mt-22 mb-32">
          <div className="container">
            {/*  News Saghfinoo */}
            {/* <SectionHeader
            title={'آخرین اخبار املاک را از سقفینو دنبال کنید'}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          /> */}
            {/* <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper mySwiper-home-news"
            >
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
              <SwiperSlide>
                <NewsBox />
              </SwiperSlide>
            </Swiper> */}

            {/* Consultant */}
            <SectionHeader
              title={'مشاورین برتر تهران '}
              dec={''}
              center={false}
              btnTitle={''}
              btnHref={''}
            />
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper mySwiper-Consultan"
            >
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
              <SwiperSlide>
                <ConsultantBox />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      <FooterMobail />
    </>
  )
}

export default Home
