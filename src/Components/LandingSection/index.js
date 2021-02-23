import React, { useState, useEffect, useRef } from 'react'
import MobilePic from './pat-photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import {
  useSpring,
  animated,
  useTransition,
  config,
  useChain,
} from 'react-spring'

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

  // you can configure animations with physics based movement w/ react-spring
  const config = { mass: 1, tension: 50, friction: 4, clamp: true }
  const configTwo = { mass: 100, tension: 600, friction: 300, clamp: true }
  const configThree = { mass: 70, tension: 200, friction: 120, clamp: false }

  const animationRefOne = useRef()
  const style = useSpring({
    ref: animationRefOne,
    config: config,
    opacity: 1,
    from: { opacity: 0 },
  })
  //second useSpring
  const animationRefTwo = useRef()
  const style2 = useSpring({
    ref: animationRefTwo,
    config: configTwo,
    opacity: 1,
    from: { opacity: 0 },
  })

  //third useSpring
  const animationRefThree = useRef()
  const style3 = useSpring({
    ref: animationRefThree,
    config: configThree,
    from: { opacity: 0, color: '#FFF', transform: 'scale(0.6)' },
    to: { opacity: 1, color: '#fff5f5', transform: 'scale(1)' },
  })

  //by using the ref's we can chain the animations, to happen sequentially, not all at once
  useChain([animationRefOne, animationRefTwo, animationRefThree])

  return (
    <LandingContainer id="home">
      <MobileImgWrp>
        <MobileImg
          src={MobilePic}
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
      </MobileImgWrp>
      <TextContainer
        style={(style, { transform: `translateY(${offsetY * 0.2}px)` })}
      >
        <LandingH1 style={style2}>Find Your New Prime</LandingH1>
        <LandingP style={style3}>
          A tailored, online coaching experience for former athletes looking to
          regain strength, energy levels, and confidence in their bodies
        </LandingP>
        <LandingBtnWrapper style={style3}>
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
