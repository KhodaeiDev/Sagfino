import Home from './pages/Home/home'
import Rent from './pages/Rent/Rent'
import Shopping from './pages/Shopping/shopping'
import DetailsProduct from './pages/detailsProduct/detailsProduct'
import StepOne from './pages/auth/StepOne'
import StepTwo from './pages/auth/StepTwo'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/auth/StepOne.tsx', element: <StepOne /> },
  { path: '/auth/StepTwo.tsx', element: <StepTwo /> },
  { path: '/detailsProduct/detailsProduct/:page', element: <DetailsProduct /> },
]

export default routes
