import React, { useState } from 'react'

import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import AboutMe from '../Components/AboutMe'
import Sidebar from '../Components/Sidebar'

function Landing() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <Testimonials />
      <AboutMe />
    </>
  )
}

export default Landing
