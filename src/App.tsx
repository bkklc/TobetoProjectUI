import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import  Degerlendirmeler  from './pages/Degerlendirmeler'


function App() {
  return (
    <>
      <NavbarComponent />             
      <Homepage/> 
      <Footer />
      <Degerlendirmeler/>
    </>
  )
}

export default App


