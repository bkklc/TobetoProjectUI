import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import  Degerlendirmeler  from './pages/Degerlendirmeler/Degerlendirmeler'
import Dashboard from './components/Dashboard/Dashboard'


function App() {
  return (
    <>
      <NavbarComponent />             
      <Dashboard/>
      <Footer/>
    </>
  )
}

export default App


