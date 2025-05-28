import './App.css'

import Router from './router'
import { AuthContextProvider } from './context/auth/authContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SearchProvider } from './context/HomePageSearch/SearchProvider'
const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
          <ReactQueryDevtools />
        </SearchProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
