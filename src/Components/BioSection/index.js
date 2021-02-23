import React, { useState, useRef, useEffect } from 'react'
import AboutPic from './pat-photo3.png'

import BioDialog from './BioDialog'
import '../../Styles/styles.css'
import Button from '../Button'
import {
  AboutContainer,
  CatchContainer,
  CatchText,
  Column1,
  AboutImg,
  Column2,
  MobileHeaderContainer,
  HeaderContainer,
  Header,
  TextContainer,
  InfoContainer,
  InfoText,
  ButtonContainer,
  IconContainer,
} from './BioElements'

const BioSection = () => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <>
      <CatchContainer>
        <CatchText>
          Not sure what to do in order to get your weight down? Tired of feeling
          guilty about eating certain foods? And at the same time, do you want
          to find a sustainable training routine that you can take with you for
          the rest of your life? Well, you’ve come to the right place.
        </CatchText>
      </CatchContainer>
      <AboutContainer id="about">
        <MobileHeaderContainer>
          <Header>About Pat</Header>
        </MobileHeaderContainer>
        <Column1>
          <AboutImg src={AboutPic} />
        </Column1>
        <Column2>
          <HeaderContainer>
            <Header>About Pat</Header>
          </HeaderContainer>
          <InfoContainer>
            <TextContainer>
              <InfoText>
                "
                <span className="ital">
                  I created the{' '}
                  <span className="bold">Tone & Muscle Academy</span> because I
                  knew people were <span className="bold">struggling</span>.
                  With so much information and options in the market, I knew
                  people were confused on{' '}
                  <span className="bold">what to eat</span> and{' '}
                  <span className="bold">how to exercise </span>
                  to create long lasting physiques they were proud of."
                </span>
              </InfoText>
              <InfoText>
                "
                <span className="ital">
                  I wanted to provide people with{' '}
                  <span className="bold">easily implementable strategies</span>{' '}
                  and <span className="bold">constant support </span>from the
                  beginning to the end of their journey. Setting{' '}
                  <span className="bold">goals</span> along the way and
                  celebrating small <span className="bold">wins</span> is what
                  has created a positive culture in the{' '}
                  <span className="bold">TMA community</span>."
                </span>
              </InfoText>
              <ButtonContainer>
                <Button onClick={onOpenModal}>Read Full Bio</Button>
              </ButtonContainer>
            </TextContainer>
          </InfoContainer>
        </Column2>
      </AboutContainer>
      <BioDialog open={open} onClose={onCloseModal} />
    </>
  )
}

export default BioSection
