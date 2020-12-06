import React from 'react'

import '../Styles/styles.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <a className="burger">X</a>
      <ul className="nav-links left">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="nav-links right">
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
      <div className="banner-div">
        <img className="banner-pic" src="images/tma-banner.png" alt="logo" />
      </div>
    </nav>
  )
}

export default Nav
