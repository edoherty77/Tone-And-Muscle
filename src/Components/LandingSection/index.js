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
  ImgContainer,
  TextContainer,
  Img,
  StoryContainer,
  LeftContainer,
  RightContainer,
  StoryImg,
  RightHeader,
  RightText,
  Play,
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

      <TopContainer>
        <TextContainer style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <LandingH1>Find Your New Prime</LandingH1>
          <LandingP>
            A tailored, online coaching experience for former athletes looking
            to regain strength, energy levels, and confidence in their bodies
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
        <ImgContainer style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <Img src="images/pat-photoBlack.png" />
        </ImgContainer>
      </TopContainer>
      <StoryContainer>
        <LeftContainer>
          <Play>
            <FontAwesomeIcon
              className="iconBtn"
              onClick={() => onOpen('videos/Kevin.mp4')}
              icon={faPlayCircle}
              size="3x"
            />
          </Play>
          <StoryImg src="images/Kevin-LgBef.png" />
          <StoryImg src="images/Kevin-LgAft.png" />
          <Player open={isOpen} onClose={onCloseModal} url="videos/Kevin.mp4" />
        </LeftContainer>
        <RightContainer>
          <RightHeader>Kevin P.</RightHeader>
          <RightText>
            Currently at 222 lbs, Kevin is 60 lbs down from his original weight
            and stronger all around than hes ever been.
          </RightText>
        </RightContainer>
      </StoryContainer>
    </LandingContainer>
  )
}

export default LandingSection
