import React, { useState, useEffect } from 'react'
import MobilePic from './pat-photo2.jpg'

import {
  LandingContainer,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  SocialLink,
  SocialImg,
  MobileImgWrp,
  MobileImg,
} from './LandingElements'

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
    <LandingContainer id="home">
      <MobileImgWrp>
        <MobileImg
          src={MobilePic}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
      </MobileImgWrp>
      <LandingContent style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
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
      </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection
