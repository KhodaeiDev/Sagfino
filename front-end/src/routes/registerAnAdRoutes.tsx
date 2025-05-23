import RegisterDoneAdRE from '../pages/registerAnAd/RegisterDone'
import RegisterErrorAdRE from '../pages/registerAnAd/RegisterError'
import StepOneAdRE from '../pages/registerAnAd/StepOneAdRE'
import StepTwoAdRE from '../pages/registerAnAd/StepTwo'
import StepThreeAdRE from '../pages/registerAnAd/StepThree'
import StepFourAdRE from '../pages/registerAnAd/StepFour'
import StepFiveAdRE from '../pages/registerAnAd/StepFive'
import StepSixAdRE from '../pages/registerAnAd/StepSix'
import { RouteObject } from 'react-router'

import ProtectedRoute from './ProtectedRoute'

const RegisterAnAdRoutes: RouteObject[] = [
  {
    path: 'StepOneAdRE',
    element: (
      <ProtectedRoute>
        <StepOneAdRE />
      </ProtectedRoute>
    ),
  },
  {
    path: 'StepTwo',
    element: (
      <ProtectedRoute>
        <StepTwoAdRE />
      </ProtectedRoute>
    ),
  },
  {
    path: 'StepThree',
    element: (
      <ProtectedRoute>
        <StepThreeAdRE />
      </ProtectedRoute>
    ),
  },
  {
    path: 'StepFour',
    element: (
      <ProtectedRoute>
        <StepFourAdRE />
      </ProtectedRoute>
    ),
  },
  {
    path: 'StepFive',
    element: (
      <ProtectedRoute>
        <StepFiveAdRE />
      </ProtectedRoute>
    ),
  },
  {
    path: 'StepSix',
    element: (
      <ProtectedRoute>
        <StepSixAdRE />
      </ProtectedRoute>
    ),
  },
  { path: 'RegisterError', element: <RegisterErrorAdRE /> },
  { path: 'RegisterDone', element: <RegisterDoneAdRE /> },
]

export default RegisterAnAdRoutes
