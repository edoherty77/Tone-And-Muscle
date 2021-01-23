import React, { useState } from 'react'
// import { Button } from '../ButtonElements'

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './LandingElements'

import Pic from '../../Styles/pat-photo.JPG'

function LandingSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
      {/* <HeroBg>
        <VideoBg />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>Find Your New Prime</HeroH1>
        <HeroP>
          A tailored, online coaching experience for former athletes looking to
          regain strength, energy levels, and confidence in their bodies
        </HeroP>
        <HeroBtnWrapper>
          <button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default LandingSection
