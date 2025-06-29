import { RouteObject } from 'react-router'
import Usres from '../pages/AdminPanel/users'
import Advertisements from '../pages/AdminPanel/Advertisements'
import UserAdsReport from '../pages/AdminPanel/UserAdsReport'
import ProtectedRoute from './ProtectedRoute'
import Realestate from '../pages/AdminPanel/Realestate'

const AdminPanelRoutes: RouteObject[] = [
  {
    path: 'users',
    element: (
      <ProtectedRoute>
        <Usres />
      </ProtectedRoute>
    ),
  },
  {
    path: 'advertisements',
    element: (
      <ProtectedRoute>
        <Advertisements />
      </ProtectedRoute>
    ),
  },
  {
    path: 'UserAdsReport',
    element: (
      <ProtectedRoute>
        <UserAdsReport />
      </ProtectedRoute>
    ),
  },
  {
    path: 'realestate',
    element: (
      <ProtectedRoute>
        <Realestate />
      </ProtectedRoute>
    ),
  },
]

export default AdminPanelRoutes
