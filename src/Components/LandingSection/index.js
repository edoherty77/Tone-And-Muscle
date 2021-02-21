import React, { useState, useEffect } from 'react'
import MobilePic from './pat-photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import {
  LandingContainer,
  TopContainer,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  SocialLink,
  SocialImg,
  MobileImgWrp,
  MobileImg,
  TextContainer,
} from './LandingElements'

import Player from '../Player'

function LandingSection() {
  //State for modal
  const [isOpen, setOpen] = useState(false)

  //Open and close functions for modals
  const onOpen = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <LandingContainer id="home">
      <MobileImgWrp>
        <MobileImg
          src={MobilePic}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
      </MobileImgWrp>

      <TextContainer style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <LandingH1>Find Your New Prime</LandingH1>
        <LandingP>
          A tailored, online coaching experience for former athletes looking to
          regain strength, energy levels, and confidence in their bodies
        </LandingP>
        <LandingBtnWrapper>
          <SocialLink href="https://www.facebook.com/profile.php?id=100007385869431">
            <SocialImg src="images/fb.png" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/yogamatpat/">
            <SocialImg src="images/insta.png" />
          </SocialLink>
        </LandingBtnWrapper>
      </TextContainer>
    </LandingContainer>
  )
}

export default LandingSection
