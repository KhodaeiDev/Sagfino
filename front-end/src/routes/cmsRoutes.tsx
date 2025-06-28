import { RouteObject } from 'react-router'
import EditInformation from '../pages/cms/EditInformation'
import MyAds from '../pages/cms/MyAds'
import SavedAd from '../pages/cms/SavedAd'
import ProtectedRoute from './ProtectedRoute'
import RealEstateRegistration from '../pages/cms/RealEstateRegistration'

const cmsRoutes: RouteObject[] = [
  {
    path: 'EditInformation',
    element: (
      <ProtectedRoute>
        <EditInformation />
      </ProtectedRoute>
    ),
  },
  {
    path: 'MyAds',
    element: (
      <ProtectedRoute>
        <MyAds />{' '}
      </ProtectedRoute>
    ),
  },
  {
    path: 'SavedAd',
    element: (
      <ProtectedRoute>
        <SavedAd />
      </ProtectedRoute>
    ),
  },
  {
    path: 'RealEstateRegistration',
    element: (
      <ProtectedRoute>
        <RealEstateRegistration />
      </ProtectedRoute>
    ),
  },
]

export default cmsRoutes
