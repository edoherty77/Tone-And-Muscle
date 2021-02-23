import React, { useState } from 'react'

import LandingSection from '../Components/LandingSection'
import Navbar from '../Components/Navbar'

import Sidebar from '../Components/Sidebar'
import TestSection from '../Components/TestSection'
import AboutSection from '../Components/AboutSection'
import BioSection from '../Components/BioSection'

function Landing() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingSection />
      <BioSection />
      <AboutSection />
      <TestSection />
    </>
  )
}

export default Landing
