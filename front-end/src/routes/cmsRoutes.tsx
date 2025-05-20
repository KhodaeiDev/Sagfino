import { RouteObject } from 'react-router'
import EditInformation from '../pages/cms/EditInformation'
import MyAds from '../pages/cms/MyAds'
import SavedAd from '../pages/cms/SavedAd'

const cmsRoutes: RouteObject[] = [
  { path: 'EditInformation', element: <EditInformation /> },
  { path: 'MyAds', element: <MyAds /> },
  { path: 'SavedAd', element: <SavedAd /> },
]

export default cmsRoutes
