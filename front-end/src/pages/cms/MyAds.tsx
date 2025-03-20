import React from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import NotRegisteredAd from '../../components/cms/not-registered-ad'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const MyAds: React.FC = () => {
  document.title = 'سقفینو-آگهی های شما'
  return (
    <>
      <CMSLayout title="آگهی من">
        <NotRegisteredAd />
      </CMSLayout>
      <div className=" mt-10 ">
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}
export default MyAds
