import Home from './pages/Home/home'
import Rent from './pages/Rent/Rent'
import Shopping from './pages/Shopping/shopping'
import DetailsProduct from './pages/detailsProduct/detailsProduct'
import StepOne from './pages/auth/StepOne'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/detailsProduct/detailsProduct/:page', element: <DetailsProduct /> },
  { path: '/auth/StepOne.tsx', element: <StepOne /> },
]

export default routes
