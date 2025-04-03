import React, { createContext, useState, ReactNode, useEffect } from 'react'
import {
  useSaveToLocalStorage,
  useRemoveFromLocalStorage,
  useGetFromLocalStorage,
} from '../Hooks/shared/shared'

type AuthContextTypes = {
  token: string | null
  isLoggedIn: boolean
  userInfo: object | null
  login: (userinfos: object, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextTypes>({
  token: null,
  isLoggedIn: false,
  userInfo: null,
  login: () => {},
  logout: () => {}
})

type ProviderProps = {
  children: ReactNode
}

const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [setSaveToLocalStorage] = useSaveToLocalStorage('User', null) 
  const [getLocalStorageData] = useGetFromLocalStorage('User') 
  const removeFromLocalStorage = useRemoveFromLocalStorage('User') 

  const [token, setToken] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<object | null>(null)

  useEffect(() => {
    const storedToken = getLocalStorageData 
    if (storedToken) {
      setToken(storedToken)
      setIsLoggedIn(true)
    }
  }, [getLocalStorageData])

  const login = (userinfos: object, newToken: string) => {
    try {
      setSaveToLocalStorage(newToken) 
      setToken(newToken)
      setIsLoggedIn(true)
      setUserInfo(userinfos) 
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  const logout = () => {
    try {
      removeFromLocalStorage()
      setToken(null) 
      setIsLoggedIn(false) 
      setUserInfo(null) 
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, userInfo, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
