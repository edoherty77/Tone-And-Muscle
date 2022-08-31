import React, { useState, useEffect } from 'react'
import photo from './photo.jpeg'

import {
  PhotoContainer,
  Img,
} from './Elements'


function MidSection() {
  const [offsetY, setOffsetY] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  console.log(offsetY)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PhotoContainer>
      <Img style={{backgroundImage: `url(${photo})`}}></Img>
    </PhotoContainer>
  )
}

export default MidSection
