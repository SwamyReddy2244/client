import React,  { useState } from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaBookOpenReader } from 'react-icons/fa6'
import { RiServiceLine } from 'react-icons/ri'
import { IoIosContacts } from 'react-icons/io'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><FaUserClock/></a>
      <a href="#experiance" onClick={() => setActiveNav('#Experiance')} className={activeNav === '#Experiance' ? 'active' : ''}><FaBookOpenReader/></a>
      <a href="#services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#Contact')}  className={activeNav === '#Contact' ? 'active' : ''}><IoIosContacts/></a>
    </nav>
  )
}

export default Nav
