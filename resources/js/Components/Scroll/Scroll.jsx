import React from 'react'
import './Scroll.scss'
import logo from '../../Assets/logo.png'

const Scroll = () => {
  return (
    <div className="scroll-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#subscribe">Subscribe</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
  )
}

export default Scroll
