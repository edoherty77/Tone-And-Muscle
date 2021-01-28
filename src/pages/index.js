import React, { useState } from 'react'

import Home from '../Components/Home'
import LandingSection from '../Components/LandingSection'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import AboutMe from '../Components/AboutMe'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
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
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} /> */}
      <Testimonials />
      {/* <AboutMe /> */}
    </>
  )
}

export default Landing
