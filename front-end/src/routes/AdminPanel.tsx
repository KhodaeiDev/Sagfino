import { RouteObject } from 'react-router'
import EditInformation from '../pages/AdminPanel/users'

const AdminPanelRoutes: RouteObject[] = [
  { path: 'users', element: <EditInformation /> },
]

export default AdminPanelRoutes
