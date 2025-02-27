import Header from '../../components/Header/Header'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import BoxHelp from '../../components/boxHelp/boxHelp'
import PublicBox from '../../components/publicBox/publicBox'
import NewsBox from '../../components/newsBox/newsBox'
import { Footer, FooterMobail } from '../../components/footer/footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/*HousingHelp  */}
      <div className="HousingHelp  mt-14 lg:mt-26">
        <div className="container">
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
        </div>
      </div>
      {/* PropertyTypesSection */}
      <div className="PropertyTypesSection mt-12 lg:mt-22">
        <div className="container">
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
        </div>
      </div>
      {/*Customer-service */}
      <div className="Customer-service mt-8 lg:mt-22">
        <div className="container">
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
        </div>
      </div>
      {/* News Saghfinoo */}
      <div className="News Saghfinoo  mt-12 lg:mt-22 mb-32">
        <div className="container">
          <SectionHeader
            title={'آخرین اخبار املاک را از سقفینو دنبال کنید'}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" ">
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
