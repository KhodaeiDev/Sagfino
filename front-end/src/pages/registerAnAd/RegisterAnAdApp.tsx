import { memo } from 'react'
import { Outlet } from 'react-router'

const RegisterAnAdApp = memo(() => {
  return (
    <>
      <Outlet />
    </>
  )
})

export default RegisterAnAdApp
