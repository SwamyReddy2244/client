import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials