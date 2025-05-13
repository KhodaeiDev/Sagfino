import { RouteObject } from 'react-router'
import Usres from '../pages/AdminPanel/users'
import Advertisements from '../pages/AdminPanel/Advertisements'

const AdminPanelRoutes: RouteObject[] = [
  { path: 'users', element: <Usres /> },
  { path: 'advertisements', element: <Advertisements /> },
]

export default AdminPanelRoutes
