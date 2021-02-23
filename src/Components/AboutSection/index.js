import React, { useState } from 'react'
import AboutPic from './pat-photo4.png'
import '../../Styles/styles.css'
import {
  AboutContainer,
  MobileHeaderContainer,
  AboutRow,
  CatchContainer,
  CatchText,
  Column2,
  AboutImg,
  InfoContainer,
  HeaderContainer,
  Header,
  TextContainer,
  Column1,
  InfoHeader,
  InfoText,
} from './AboutElements'

const AboutSection = () => {
  return (
    <>
      {/* <CatchContainer>
        <CatchText>
          Not sure what to do in order to get your weight down? Tired of feeling
          guilty about eating certain foods? And at the same time, do you want
          to find a sustainable training routine that you can take with you for
          the rest of your life? Well, you’ve come to the right place.
        </CatchText>
      </CatchContainer> */}
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
              <TextContainer>
                <InfoHeader>What is the 101 Course?</InfoHeader>
                <InfoText>
                  The 101 course is the introductory online coaching program for
                  those who want to see a 15-20 lb fat loss while building
                  muscle through an at home exercise program.. Once accepted,
                  new members get to create goals for themselves and then follow
                  a 15 week customized nutrition and training program in order
                  to achieve what they set out for. It is the beginning of a
                  multi-program journey where members are taught (and held
                  accountable) to experience what life is like with sustainable
                  eating and training habits placed into their daily
                  schedule....It’s like going back to school for your but this
                  time for your body.
                </InfoText>
              </TextContainer>
              <TextContainer>
                <InfoHeader>Who is the 101 Course for?</InfoHeader>
                <InfoText>
                  Our first level course is for people who want to take the
                  guesswork out of losing body fat while building muscle,
                  forever, period. This program is for people who have tried
                  multiple strategies with no luck, have doubts about whether
                  they can find something sustainable, but still haven’t given
                  up on creating the body they’ve always wanted.{' '}
                </InfoText>
              </TextContainer>
              <TextContainer>
                <InfoHeader>Why does it work?</InfoHeader>
                <InfoText>
                  The TMA programs work because they are reasonable and easy to
                  follow. Plain and simple. We understand that you’re not trying
                  to be a bodybuilder, and that you have a life outside of
                  exercise. However, we do know that you want to feel great and
                  look great while balancing your work and personal life, so
                  that’s where we come in. In the 101 Course, we first show you
                  the roadmap so you know what your long term journey looks
                  like. We understand that permanent, sustainable changes take
                  more than a few months, so we want you to know we’re prepared
                  for that. After that we give you small action steps for you to
                  take on a weekly basis and stay in the corner with you every
                  step of the way until you’ve gotten what you came for.
                </InfoText>
              </TextContainer>
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
