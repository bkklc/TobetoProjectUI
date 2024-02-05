import Dashboard from './components/Platform/Dashboard/Dashboard'
import ProtectedRoute from './components/Platform/ProtectedRoute/ProtectedRoute'
import Tobeto from './components/Tobeto/Tobeto'


function App() {
  return (
    <>
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
      <Tobeto/>
    </>
  )
}

export default App


