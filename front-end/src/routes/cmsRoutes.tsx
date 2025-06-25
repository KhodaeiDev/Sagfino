import { RouteObject } from 'react-router'
import EditInformation from '../pages/cms/EditInformation'
import MyAds from '../pages/cms/MyAds'
import SavedAd from '../pages/cms/SavedAd'
import ProtectedRoute from './ProtectedRoute'

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
]

export default cmsRoutes
