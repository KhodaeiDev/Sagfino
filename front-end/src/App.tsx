import './App.css'

import Router from './router'
import { AuthContextProvider } from './context/authContext'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  )
}

export default App