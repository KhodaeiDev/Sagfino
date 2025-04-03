import React, { createContext, useState, ReactNode } from 'react'
import {
  useSaveToLocalStorage,
  useRemoveFromLocalStorage,
  useGetFromLocalStorage,
} from '../Hooks/shared/shared'

type AuthContextTypes = {
  token: string | null
  isLoggedIn: boolean
  userInfo: object
  login: (userinfos: object, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextTypes>({
  token: null,
  isLoggedIn: false,
  userInfo: {},
  login: () => {},
  logout: () => {},
})

type ProviderProps = {
  children: ReactNode
}

const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>('')
  const [setSaveToLocalStorage] = useSaveToLocalStorage('User', token)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(token))
  const [userInfo, setUserInfo] = useState<object>({})
  const [getroundomLocal] = useGetFromLocalStorage('User')
  console.log(getroundomLocal)
  const removeFromLocalStorage = useRemoveFromLocalStorage('User')

  const login = (userinfos: object, newToken: string) => {
    setSaveToLocalStorage(newToken)
    setToken(newToken)
    setIsLoggedIn(true)
    setUserInfo(userinfos)
  }

  const logout = () => {
    setSaveToLocalStorage(null)
    setUserInfo({})
    setIsLoggedIn(false)
    removeFromLocalStorage()
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        userInfo,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
