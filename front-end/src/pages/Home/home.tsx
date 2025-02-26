import Header from '../../components/Header/Header'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import BoxHelp from '../../components/boxHelp/boxHelp'
import PublicBox from '../../components/publicBox/publicBox'

export default function Home() {
  return (
    <>
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
      <div className="Customer-service  mt-8 lg:mt-22">
        <div className="container">
          <SectionHeader
            title={'همه به شما مشاوره می‌دهند!'}
            dec={'اما در سقفینو مشاوران املاک کِنار شما می‌مانند'}
            center={true}
            btnTitle={''}
            btnHref={''}
          />
        </div>
      </div>
    </>
  )
}
