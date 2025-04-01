import { memo } from 'react'
import { useRoutes } from 'react-router'

import routes from './routes/routes'
import ScrollToTop from './scrollToTop'

const Router = memo(() => {
  const router = useRoutes(routes)

  return (
    <>
      <ScrollToTop />
      {router}
    </>
  )
})

export default Router
