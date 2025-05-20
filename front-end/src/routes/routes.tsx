// imports
import NotFound from '../pages/404/NotFound'
import SiteApp from '../pages/site/siteApp/siteApp'
import RegisterAnAdApp from '../pages/registerAnAd/RegisterAnAdApp'
import CmsApp from '../pages/cms/cmsApp'
import siteRoutes from './siteRoutes'
import RegisterAnAdRoutes from './registerAnAdRoutes'
import CmsRoutes from './cmsRoutes'
import AdminPanelApp from '../pages/AdminPanel/AdminPanel'
import AdminPanelRoutes from './AdminPanel'

const baseRoutes = [
  { path: '/', element: <SiteApp />, children: [...siteRoutes] },
  { path: '/cms', element: <CmsApp />, children: [...CmsRoutes] },
  {
    path: '/AdminPanel',
    element: <AdminPanelApp />,
    children: [...AdminPanelRoutes],
  },
  {
    path: '/registerAnAd',
    element: <RegisterAnAdApp />,
    children: [...RegisterAnAdRoutes],
  },
]

const routes = [...baseRoutes, { path: '*', element: <NotFound /> }]

export default routes
