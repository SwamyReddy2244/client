import React from 'react'
import Header from './Components/header/header.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Experiance from './Components/Experiance/Experiance.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Services from './Components/Services/Services.jsx'


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Contact/>
      <Experiance/>
      <Skills/>
      <Footer/>
      <Services/>
    </div>
  )
}

export default App
