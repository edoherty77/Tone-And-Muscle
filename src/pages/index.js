import React, { useState } from 'react'

import LandingSection from '../Components/LandingSection'
import Navbar from '../Components/Navbar'
import AboutMe from '../Components/AboutMe'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection'
import AboutSection from '../Components/AboutSection'
import {
  schena,
  conway,
  poplaski,
  bujacich,
} from '../Components/InfoSection/Data'

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
      <AboutSection />
      <InfoSection {...schena} />
      <InfoSection {...conway} />
      {/* <InfoSection {...poplaski} /> */}
      <InfoSection {...bujacich} />
    </>
  )
}

export default Landing
