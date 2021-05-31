import React, { useState } from 'react'

import Navbar from '../Components/Navbar'

import LandingSection from '../Components/LandingSection'
import PainSection from '../Components/PainSection'
import Sidebar from '../Components/Sidebar'
import TestSection from '../Components/TestSection'
import AboutSection from '../Components/AboutSection'
import BioSection from '../Components/BioSection'
import ContactSection from '../Components/ContactSection'

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
      <PainSection />
      <AboutSection />
      <BioSection />
      <TestSection />
      <ContactSection />
    </>
  )
}

export default Landing
