import Home from './pages/Home/home'
import Rent from './pages/Rent/Rent'
import Shopping from './pages/Shopping/shopping'
import DetailsProduct from './pages/detailsProduct/detailsProduct'
import StepOne from './pages/auth/StepOne'
import StepTwo from './pages/auth/StepTwo'
import StepThree from './pages/auth/StepThree'
import StepOneAdRE from './pages/registerAnAd/StepOneAdRE'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/auth/StepOne', element: <StepOne /> },
  { path: '/auth/StepTwo', element: <StepTwo /> },
  { path: '/auth/StepThree', element: <StepThree /> },
  { path: '/registerAnAd/StepOneAdRE', element: <StepOneAdRE /> },
  { path: '/detailsProduct/detailsProduct/:page', element: <DetailsProduct /> },
]

export default routes
