import { memo } from 'react'
import { Outlet, useLocation } from 'react-router'
import {
  NavBar,
  NavBarMobail,
} from '../../../components/shared/UIComponents/Layout/HeaderComponents/navBar/navBar'
import {
  Footer,
  FooterMobail,
} from '../../../components/shared/UIComponents/Layout/footer/footer'
import Header from '../../../components/shared/UIComponents/Layout/HeaderComponents/Header/Header'
import { Bounce, ToastContainer } from 'react-toastify'

const SiteApp = memo(() => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isAuthPage = location.pathname.startsWith('/auth')
  const isRealEstateDetailsPage =
    location.pathname.startsWith('/RealEstateDetails')

  return (
    <>
      <div className={`${isAuthPage ? 'bg-gray-ED' : 'bg-white'}`}>
        {!isRealEstateDetailsPage &&
          (isHomePage ? (
            <Header />
          ) : (
            <>
              <NavBar />
              <NavBarMobail />
            </>
          ))}

        <main className="site-content">
          <Outlet />
        </main>

        <Footer />
        <FooterMobail />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
})

export default SiteApp
