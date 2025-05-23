import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
  memo,
} from 'react'
import {
  useSaveToLocalStorage,
  useGetFromLocalStorage,
  useRemoveFromLocalStorage,
} from '../Hooks/shared/shared'
import UserInfoProvider from './UserInfoProvider'

export type UserInfoType = {
  firstName: string | null
  lastName: string | null
  phoneNumber: string | null
  image: string | null
  role: 'user' | 'admin'
}

type AuthContextTypes = {
  token: string | null
  isLoggedIn: boolean
  userInfo: UserInfoType | null
  phone: string
  updatephone: (newPhone: string) => void
  login: (userinfos: UserInfoType, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextTypes>({
  token: null,
  isLoggedIn: false,
  userInfo: null,
  updatephone: () => {},
  phone: '',
  login: () => {},
  logout: () => {},
})

type ProviderProps = {
  children: ReactNode
}

const AuthContextProvider: React.FC<ProviderProps> = memo(({ children }) => {
  const [setUserTokenLocal] = useSaveToLocalStorage('userToken', null)
  const [setUserInfoLoacal] = useSaveToLocalStorage('userInfo', null)
  const [getLocalUserToken] = useGetFromLocalStorage('userToken')
  const [getLocalUserInfo] = useGetFromLocalStorage('userInfo')
  const removeFromLocalUserToken = useRemoveFromLocalStorage('userToken')
  const removeFromLocalUserInfos = useRemoveFromLocalStorage('userInfo')

  const [token, setToken] = useState<string | null>(null)
  const [phone, setphone] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)

  useEffect(() => {
    const storedToken = getLocalUserToken
    const storedUserInfo = getLocalUserInfo

    if (storedToken && storedUserInfo) {
      setToken(storedToken)
      setUserInfo(JSON.parse(storedUserInfo) as UserInfoType)
      setIsLoggedIn(true)
    }
  }, [getLocalUserToken, getLocalUserInfo])

  const login = useCallback(
    (userinfos: UserInfoType, newToken: string) => {
      setUserTokenLocal(newToken)
      setUserInfoLoacal(JSON.stringify(userinfos))

      setToken(newToken)
      setUserInfo(userinfos)
      setIsLoggedIn(true)
    },
    [setUserTokenLocal, setUserInfoLoacal]
  )

  const logout = useCallback(() => {
    try {
      removeFromLocalUserToken()
      removeFromLocalUserInfos()
      setToken(null)
      setIsLoggedIn(false)
      setUserInfo(null)
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }, [removeFromLocalUserToken, removeFromLocalUserInfos])

  const updatephone = (newPhone: string) => setphone(newPhone)

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, userInfo, login, logout, updatephone, phone }}
    >
      <UserInfoProvider />
      {children}
    </AuthContext.Provider>
  )
})

export { AuthContext, AuthContextProvider }
