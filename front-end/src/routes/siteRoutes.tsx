import Rent from '../pages/site/Rent/Rent'
import Shopping from '../pages/site/Shopping/shopping'
import DetailsProduct from '../pages/site/detailsProduct/detailsProduct'
import StepOne from '../pages/site/auth/StepOne'
import StepTwo from '../pages/site/auth/StepTwo'
import StepThree from '../pages/site/auth/StepThree'
import Realestates from '../pages/site/Realestates/Realestates'
import RealEstateDetails from '../pages/site/RealEstateDetails/RealEstateDetails'
import AboutUs from '../pages/site/AboutUs/AboutUs'
import ContactUs from '../pages/site/ContactUs/ContactUs'
import TermsAndConditions from '../pages/site/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from '../pages/site/PrivacyPolicy/PrivacyPolicy'
import Home from '../pages/site/Home/home'
import FAQ from '../pages/site/FAQ/FAQ'
import { RouteObject } from 'react-router'

const siteRoutes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/AboutUs/AboutUs', element: <AboutUs /> },
  { path: '/ContactUs/ContactUs', element: <ContactUs /> },
  { path: '/FAQ/FAQ', element: <FAQ /> },
  { path: '/PrivacyPolicy/PrivacyPolicy', element: <PrivacyPolicy /> },
  { path: '/auth/StepOne', element: <StepOne /> },
  { path: '/auth/StepTwo', element: <StepTwo /> },
  { path: '/auth/StepThree', element: <StepThree /> },
  {
    path: '/RealEstateDetails/RealEstateDetails/:Estate',
    element: <RealEstateDetails />,
  },
  {
    path: '/detailsProduct/detailsProduct/:page',
    element: <DetailsProduct />,
  },
  {
    path: '/Realestates/Realestates',
    element: <Realestates />,
  },
  {
    path: '/TermsAndConditions/TermsAndConditions',
    element: <TermsAndConditions />,
  },
]

export default siteRoutes
