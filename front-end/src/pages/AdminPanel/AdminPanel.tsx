import { memo } from 'react'
import { Outlet } from 'react-router'

const AdminPanelApp = memo(() => {
  return (
    <>
      <Outlet />
    </>
  )
})

export default AdminPanelApp
