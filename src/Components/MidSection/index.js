import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import photo from './photo.jpeg'


import {
  PhotoContainer,
  Img,
  MobileImg,
  MobileImgWrp
} from './Elements'


function MidSection() {
  const [offsetY, setOffsetY] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
    if (myElementIsVisible === true) {
      console.log(myElementIsVisible)
    }
  }
  console.log(offsetY)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myElementIsVisible])

  return (
    <PhotoContainer ref={myRef}>
      <Img style={{backgroundImage: `url(${photo})`}}></Img>
      <MobileImgWrp>
        <MobileImg
          src={photo}
          // style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
      </MobileImgWrp>
    </PhotoContainer>
  )
}

export default MidSection
