import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assests/me.png'
import HeaderSocials from './HeaderSocials'
import Nav from '../nav/Nav'

const Header = () => {
  return (
    <header> 
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Swamy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <Nav />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header