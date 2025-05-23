import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import ToastNotification from '../services/toastify/toastify'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    if (!auth.token) {
      ToastNotification(
        'error',
        'برای دسترسی باید احراز هویت کنید. در حال انتقال...',
        3000
      )

      setTimeout(() => {
        setShouldRedirect(true)
      }, 5000)
    }
  }, [auth.token])

  return shouldRedirect ? <Navigate to="/auth/StepThree" /> : children
}

export default ProtectedRoute
