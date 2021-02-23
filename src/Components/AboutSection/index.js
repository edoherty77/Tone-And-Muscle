import React, { useState } from 'react'
import AboutPic from './pat-photo4.png'
import '../../Styles/styles.css'
import AboutInfo from './AboutInfo'
import {
  AboutContainer,
  MobileHeaderContainer,
  AboutRow,
  Column2,
  AboutImg,
  InfoContainer,
  HeaderContainer,
  Header,
  Column1,
} from './AboutElements'

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <MobileHeaderContainer>
          <Header>The 101 Course</Header>
        </MobileHeaderContainer>
        <AboutRow>
          <Column1>
            <HeaderContainer>
              <Header>The 101 Course</Header>
            </HeaderContainer>
            <InfoContainer>
              <AboutInfo />
            </InfoContainer>
          </Column1>
          <Column2>
            <AboutImg src={AboutPic} />
          </Column2>
        </AboutRow>
      </AboutContainer>
    </>
  )
}

export default AboutSection
