import { RouteObject } from 'react-router'
import Usres from '../pages/AdminPanel/users'
import Advertisements from '../pages/AdminPanel/Advertisements'
import UserAdsReport from '../pages/AdminPanel/UserAdsReport'

const AdminPanelRoutes: RouteObject[] = [
  { path: 'users', element: <Usres /> },
  { path: 'advertisements', element: <Advertisements /> },
  { path: 'UserAdsReport', element: <UserAdsReport /> },
]

export default AdminPanelRoutes
