import { memo } from 'react'
import { Outlet } from 'react-router'

const CmsApp = memo(() => {
  return (
    <>
      <Outlet />
    </>
  )
})

export default CmsApp