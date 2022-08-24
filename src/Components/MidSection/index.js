import React, { useState, useEffect } from 'react'


import {
  PhotoContainer
} from './Elements'


function LandingSection() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 

  return (
   <PhotoContainer></PhotoContainer>
  )
}

export default LandingSection
