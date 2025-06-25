import { useEffect, useContext } from 'react'
import { AuthContext } from './authContext'
import { useGetFromLocalStorage } from '../../Hooks/shared/shared'

const UserInfoProvider: React.FC = () => {
  const [getLocalUserToken] = useGetFromLocalStorage('userToken')
  const [getLocalUserInfo] = useGetFromLocalStorage('userInfo')

  const auth = useContext(AuthContext)

  useEffect(() => {
    const storedToken = getLocalUserToken
    const storedUserInfo = getLocalUserInfo
    const data = storedUserInfo ? JSON.parse(storedUserInfo) : null


    if (storedToken) {
      const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        image: data.image || null,
        role: data.role as 'user' | 'admin' | 'real_estate_agent',
      }
      auth.login(userData, storedToken)
    } else {
      auth.logout()
    }
  }, [getLocalUserToken, getLocalUserInfo])

  return null
}

export default UserInfoProvider
