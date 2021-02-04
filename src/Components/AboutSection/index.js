import React, { useState } from 'react'

import '../../Styles/styles.css'
import {
  AboutContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  LeftWrapper,
  Header,
  Content,
  Divider,
  Column2,
  RightWrapper,
  Img,
  CardInfo,
  Name,
  Title,
} from './AboutElements'

const PersonalSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <LeftWrapper>
                <Img src="images/pat-photo1.png" />
                <Header>ABOUT</Header>
                <CardInfo>
                  <Content>
                    I created the Tone & Muscle Academy because I knew people
                    were struggling. I knew people were confused on what to eat
                    and how to exercise to create long lasting physiques they
                    were proud of. With so much information and options in the
                    market, I saw that people were confused, I wanted to provide
                    people with easily implementable strategies and constant
                    support from beginning to the end of their journey. Setting
                    goals along the way and celebrating small wins is what has
                    created a positive culture in the TMA community.
                  </Content>
                </CardInfo>
              </LeftWrapper>
            </Column1>
            <Divider />
            <Column2 id="personal">
              <RightWrapper>
                <Img src="images/pat-photo3.png" />
                <Header>MEET YOUR TRAINER</Header>
                <CardInfo>
                  <Name>Pat Doherty</Name>
                  <Title>FOUNDER AND HEAD COACH</Title>
                  <Content>
                    <span className="bold">Growing up as an athlete</span> I
                    spent a lot of my time either on the field or on the mat.
                    Playing sports was my passion, both scholastic and
                    recreational. From playing dodgeball in elementary school to
                    wrestling in college, I have always thrived in{' '}
                    <span className="bold">competitive situations</span> that
                    require skill, strength and speed.
                    <br />I always managed to stay on the field and give 100% no
                    matter what sport or time of year I competed in. However,
                    tearing my meniscus in my right knee during a college
                    wrestling tournament would change that. It was the beginning
                    of a long line of
                    <span className="bold">injuries that plagued me</span> over
                    the next 4 years.
                  </Content>
                </CardInfo>
              </RightWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </AboutContainer>
    </>
  )
}

export default PersonalSection
