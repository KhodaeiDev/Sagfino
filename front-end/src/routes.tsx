import Home from './pages/Home/home'
import Rent from './pages/Rent/Rent'
import Shopping from './pages/Shopping/shopping'
import DetailsProduct from './pages/detailsProduct/detailsProduct'
import StepOne from './pages/auth/StepOne'
import StepTwo from './pages/auth/StepTwo'
import StepThree from './pages/auth/StepThree'
import StepOneAdRE from './pages/registerAnAd/StepOneAdRE'
import StepTwoAdRE from './pages/registerAnAd/StepTwo'
import StepThreeAdRE from './pages/registerAnAd/StepThree'
import StepFourAdRE from './pages/registerAnAd/StepFour'
import StepFiveAdRE from './pages/registerAnAd/StepFive'
import StepSixAdRE from './pages/registerAnAd/StepSix'
import RegisterDoneAdRE from './pages/registerAnAd/RegisterDone'
import RegisterErrorAdRE from './pages/registerAnAd/RegisterError'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/auth/StepOne', element: <StepOne /> },
  { path: '/auth/StepTwo', element: <StepTwo /> },
  { path: '/auth/StepThree', element: <StepThree /> },
  { path: '/registerAnAd/StepOneAdRE', element: <StepOneAdRE /> },
  { path: '/registerAnAd/StepTwoAdRE', element: <StepTwoAdRE /> },
  { path: '/registerAnAd/StepThreeAdRE', element: <StepThreeAdRE /> },
  { path: '/registerAnAd/StepFourAdRE', element: <StepFourAdRE /> },
  { path: '/registerAnAd/StepFiveAdRE', element: <StepFiveAdRE /> },
  { path: '/registerAnAd/StepSixAdRE', element: <StepSixAdRE /> },
  { path: '/registerAnAd/RegisterDoneAdRE', element: <RegisterDoneAdRE /> },
  { path: '/registerAnAd/RegisterErrorAdRE', element: <RegisterErrorAdRE /> },
  { path: '/detailsProduct/detailsProduct/:page', element: <DetailsProduct /> },
]

export default routes
