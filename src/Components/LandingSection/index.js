import React, { useState } from 'react'
import { Button } from '../ButtonElements'

import {
  LandingContainer,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  SocialLink,
  SocialImg,
} from './LandingElements'

function LandingSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <LandingContainer id="home">
      <LandingContent>
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
