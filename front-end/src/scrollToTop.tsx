import { useLocation } from 'react-router'
import { memo, useEffect } from 'react'

const ScrollToTop = memo(() => {
  const { pathname } = useLocation()
  console.log(pathname)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
})

export default ScrollToTop
