// imports
import NotFound from '../pages/404/NotFound'
import SiteApp from '../pages/site/siteApp/siteApp'
import RegisterAnAdApp from '../pages/registerAnAd/RegisterAnAdApp'
import CmsApp from '../pages/cms/cmsApp'
import siteRoutes from './siteRoutes'
import RegisterAnAdRoutes from './registerAnAdRoutes'
import CmsRoutes from './cmsRoutes'

const baseRoutes = [
  { path: '/', element: <SiteApp />, children: [...siteRoutes] },
  { path: '/cms', element: <CmsApp />, children: [...CmsRoutes] },
  {
    path: '/registerAnAd',
    element: <RegisterAnAdApp />,
    children: [...RegisterAnAdRoutes],
  },
]

const routes = [...baseRoutes, { path: '*', element: <NotFound /> }]

export default routes
