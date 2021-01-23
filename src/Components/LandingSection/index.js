import React, { useState } from 'react'
import { Button } from '../ButtonElements'

import {
  LandingContainer,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
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
          <a
            href="https://www.facebook.com/profile.php?id=100007385869431"
            className="social-a"
          >
            <img src="images/fb.png" className="social-pic" />
          </a>
          <a href="https://www.instagram.com/yogamatpat/" className="social-a">
            <img src="images/insta.png" className="social-pic" />
          </a>
        </LandingBtnWrapper>
      </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection
