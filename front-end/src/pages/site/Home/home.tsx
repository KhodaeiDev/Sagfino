import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
import BoxHelp from '../../../components/shared/Cards/helpBox/helpBox'
// import PublicBox from '../../components/publicBox/publicBox'
// import PublicBox from '../../../components/shared/Cards/publicBox/publicBox'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
// import NewsBox from '../../components/newsBox/newsBox'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation } from 'swiper/modules'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import 'swiper/css/navigation'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
// import ConsultantBox from '../../components/shared/Cards/consultantBox/consultantBox'
// import BoxEstate from '../../../components/shared/Cards/estateBox/estateBox'
// import RealEstateModal from '../../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import ShowSwal from '../../../services/sweetalert2/configs'
import { useSearch } from '../../../context/HomePageSearch/useSearch'

const Home: React.FC = () => {
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  // const openModal = useCallback(() => {
  //   setIsModalVisible(true)
  // }, [])

  // const closeModal = useCallback(() => {
  //   setIsModalVisible(false)
  // }, [])

  useEffect(() => {
    document.title = 'سقفینو - خانه'
  }, [])
  const { searchState } = useSearch()

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (searchState.isLoading) {
      setLoading(true)
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [searchState.isLoading])

  const saghfinooHelpData = [
    {
      id: uuidv4(),
      svg: '/svg/rent-icon.svg',
      title: 'به آسانی یک خانه اجاره کنید',
      description:
        'در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.',
      contentBtn: '  اجاره خانه',
      link: '/Rent/Rent',
    },
    {
      id: uuidv4(),
      svg: '/svg/Owner-icon.svg',
      title: 'مالک هستید؟',
      description: `آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟
پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.`,
      contentBtn: ' ثبت آگهی',
      link: '/registerAnAd/StepOneAdRE',
    },
    {
      id: uuidv4(),
      svg: '/svg/shppingSaghHelp-icon.svg',
      title: `خانه مورد علاقه‌تان را بخرید`,
      description: `بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد.
ما علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.`,
      contentBtn: 'خرید خانه',
      link: '/Rent/Rent',
    },
  ]

  return (
    <>
      {/* Header */}
      {/*HousingHelp => SearchUser  LatestHomeListings */}
      <div className=" my-14  lg:my-25">
        {/* LatestHomeListings */}
        {searchState?.result?.data?.length && (
          <div id="products" className="container  mb-15 lg:mb-25">
            <SectionHeader
              title={`جدیدترین خانه‌های ${
                searchState?.transactionType === 'rent' ? 'اجاره ای' : 'فروشی'
              } ${searchState?.city} `}
              dec={''}
              center={false}
              btnTitle={'مشاهده همه'}
              btnHref={`${'/Rent/Rent'}`}
            />
            <ShowSwal
              icon="success"
              title="انجام شد"
              url=""
              confirmButtonText="تایید شد"
              active={false}
            />
            <div className="  grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2.5 lg:gap-x-6 lg:gap-y-4">
              {searchState?.result?.data.map((productInfo) => (
                <ProductBox
                  key={productInfo?.id}
                  isLoading={loading}
                  productInfo={productInfo}
                ></ProductBox>
              ))}
            </div>
          </div>
        )}
        {/* HousingHelp */}

        {
          <div className="container  mb-15 lg:mb-25">
            <SectionHeader
              title={'سقفینو چطور به خانه‌دار شدن شما کمک می‌کند '}
              dec={''}
              center={false}
              btnTitle={''}
              btnHref={''}
            />
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
              {saghfinooHelpData.map((data) => (
                <BoxHelp key={data.id} {...data} />
              ))}
            </div>
          </div>
        }
      </div>
      {/* PropertyTypesSection */}
      <div className="PropertyTypesSection  ">
        {/* /* PropertyTypesSection  */}
        {/* <div className="container mb-15 lg:mb-25">
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
        <div className="container mb-15 lg:mb-25">
          <SectionHeader
            title={'سقفینو فرصتی برای همه'}
            dec={'اگر مالک یا در جست‌‌وجوی سقفی نو هستید، کلیک کنید'}
            center={true}
            btnTitle={''}
            btnHref={''}
          />
          <div className=" grid  grid-cols-2 lg:grid-cols-3 xl:gap-4  gap-4 lg:gap-6  ">
            <NavLink
              to={'/Realestates/Realestates'}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="/public/svg/consultants.svg" alt="svg" />
              <h5 className=" mt-5 text-black text-xs text-center  lg:text-2xl font-shabnam ">
                مشاورین ما ۲۴ ساعته پاسخگوی سوالات ملکی شما هستند{' '}
              </h5>
            </NavLink>
            <NavLink
              to={'/Rent/Rent'}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="/public/svg/houses.svg" alt="svg" />
              <h5 className=" mt-5 text-black text-xs  lg:text-2xl font-shabnam ">
                اگر در جست‌وجوی یک سقف نو هستید اینجا کلیک کنید{' '}
              </h5>
            </NavLink>
            <NavLink
              to={'/registerAnAd/StepOneAdRE'}
              className=" py-6  center flex-col  lg:py-6 lg:px-16 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl"
            >
              <img src="/public/svg/mention.svg" alt="svg" />
              <h5 className=" mt-5 text-black text-xs  lg:text-2xl font-shabnam ">
                با ثبت آسان آگهی، ملک خود را برای اجاره یا فروش اعلان کنید{' '}
              </h5>
            </NavLink>
          </div>
        </div>
      </div>
      {/*Customer-service || Top real estate */}
      <div className="Customer-service mb-15 lg:mb-25">
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
              <img src="/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
            <div className=" py-4 px-7 center flex-col  lg:py-6 lg:px-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl">
              <img src="/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
            <div className=" py-4 px-7 center flex-col  lg:py-6 lg:px-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-xl  lg:rounded-2xl">
              <img src="/svg/pana.svg" alt="svg" />
              <h5 className=" text-black text-xs text-center lg:text-lg font-shabnam ">
                مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{' '}
              </h5>
            </div>
          </div>
        </div> */}
        {/* {auth.token && (
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
        )} */}

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
            {/* <SectionHeader
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
            </Swiper> */}
          </div>
        </div>
      </div>
      {/* Footer */}

      {/* {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )} */}
    </>
  )
}

export default Home
