import React, { useState, forwardRef } from 'react'
import AboutPic from './pat-photo3.png'
import Slide from '@material-ui/core/Slide'
import BioDialog from './BioDialog'
import '../../Styles/styles.css'
import Button from '../Button'
import {
  AboutContainer,
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
} from './BioElements'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" unmountOnExit ref={ref} {...props} />
})

const BioSection = () => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <>
      <AboutContainer id="bio">
        <MobileHeaderContainer>
          <Header>Pat Doherty</Header>
        </MobileHeaderContainer>
        <Column1>
          <AboutImg src={AboutPic} />
        </Column1>
        <Column2>
          <HeaderContainer>
            <Header>Pat Doherty</Header>
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
      <BioDialog open={open} onClose={onCloseModal} Transition={Transition} />
    </>
  )
}

export default BioSection
