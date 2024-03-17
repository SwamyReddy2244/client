import React from 'react'
import Header from './Components/header/header.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Experiance from './Components/Experiance/Experiance.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Services from './Components/Services/Services.jsx'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Experiance/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
