import NotFound from '../pages/404/NotFound'
import SiteApp from '../pages/site/siteApp/siteApp'
import siteRoutes from './siteRoutes'
import RegisterAnAdRoutes from './registerAnAdRoutes'
import RegisterAnAdApp from '../pages/registerAnAd/RegisterAnAdApp'
import CmsRoutes from './cmsRoutes'
import CmsApp from '../pages/cms/cmsApp'

const routes = [
  { path: '/', element: <SiteApp />, children: [...siteRoutes] },

  { path: '/cms', element: <CmsApp />, children: [...CmsRoutes] },

  {
    path: '/registerAnAd',
    element: <RegisterAnAdApp />,
    children: [...RegisterAnAdRoutes],
  },

  { path: '*', element: <NotFound /> },
]

export default routes
