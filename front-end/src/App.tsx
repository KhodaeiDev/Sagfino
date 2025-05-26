import './App.css'

import Router from './router'
import { AuthContextProvider } from './context/authContext'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  )
}

export default App
