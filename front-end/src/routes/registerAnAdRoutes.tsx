import RegisterDoneAdRE from '../pages/registerAnAd/RegisterDone'
import RegisterErrorAdRE from '../pages/registerAnAd/RegisterError'
import StepOneAdRE from '../pages/registerAnAd/StepOneAdRE'
import StepTwoAdRE from '../pages/registerAnAd/StepTwo'
import StepThreeAdRE from '../pages/registerAnAd/StepThree'
import StepFourAdRE from '../pages/registerAnAd/StepFour'
import StepFiveAdRE from '../pages/registerAnAd/StepFive'
import StepSixAdRE from '../pages/registerAnAd/StepSix'
import { RouteObject } from 'react-router'

const RegisterAnAdRoutes: RouteObject[] = [
  { path: 'StepOneAdRE', element: <StepOneAdRE /> },
  { path: 'StepTwo', element: <StepTwoAdRE /> },
  { path: 'StepThree', element: <StepThreeAdRE /> },
  { path: 'StepFour', element: <StepFourAdRE /> },
  { path: 'StepFive', element: <StepFiveAdRE /> },
  { path: 'StepSix', element: <StepSixAdRE /> },
  { path: 'RegisterError', element: <RegisterErrorAdRE /> },
  { path: 'RegisterDone', element: <RegisterDoneAdRE /> },
]

export default RegisterAnAdRoutes
