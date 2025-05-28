import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth/authContext'
import { Navigate } from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import ToastNotification from '../services/toastify/toastify'
import { useGetFromLocalStorage } from '../Hooks/shared/shared'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext)
  const [getLocalUserToken] = useGetFromLocalStorage('userToken')

  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    console.log(getLocalUserToken)
    if (!getLocalUserToken) {
      ToastNotification(
        'error',
        'برای دسترسی باید احراز هویت کنید. در حال انتقال...',
        3000
      )

      setTimeout(() => {
        setShouldRedirect(true)
        auth.logout()
      }, 5000)
    }
  }, [auth.token])

  return shouldRedirect ? <Navigate to="/auth/StepThree" /> : children
}

export default ProtectedRoute
