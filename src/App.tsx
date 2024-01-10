import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <Homepage/>
      <Footer />
    </>

  )
}

export default App
