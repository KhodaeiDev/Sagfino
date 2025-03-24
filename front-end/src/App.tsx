import './App.css'
import { useRoutes } from 'react-router'
import routes from './routes'

const App = () => {
  const router = useRoutes(routes)

  return <>{router}</>
}

export default App
