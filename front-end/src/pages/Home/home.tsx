import Header from '../../components/Header/Header'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import BoxHelp from '../../components/boxHelp/boxHelp'

export default function Home() {
  return (
    <>
      <Header />

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
    </>
  )
}
