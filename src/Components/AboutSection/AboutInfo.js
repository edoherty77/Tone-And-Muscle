import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../ButtonElements'
import '../../Styles/styles.css'
import {
  WhatContainer,
  WhyContainer,
  TextContainer,
  InfoHeader,
  InfoText,
  ReadMore,
} from './AboutElements'

let whatHeight = null
let whyHeight = null

const AboutInfo = () => {
  const [isWhatHeight, setWhatHeight] = useState('auto')
  const [isWhyHeight, setWhyHeight] = useState('auto')
  const whatRef = useRef(null)
  const whyRef = useRef(null)
  useEffect(() => {
    if (whatRef.current && whatHeight === null) {
      whatHeight = whatRef.current.getBoundingClientRect().isWhatHeight
      setWhatHeight(315)
    }
    if (whyRef.current && whyHeight === null) {
      whyHeight = whyRef.current.getBoundingClientRect().isWhyHeight
      setWhyHeight(325)
    }
  })
  return (
    <>
      <WhatContainer
        ref={whatRef}
        style={{ maxHeight: isWhatHeight }}
        isWhatHeight={isWhatHeight}
      >
        <InfoHeader>What is the 101 Course?</InfoHeader>
        <InfoText>
          The <span className="bold">101 course</span> is the introductory
          online coaching program for those who want to see a{' '}
          <span className="bold">15-20 lb fat loss</span> while building{' '}
          <span className="bold">muscle</span> through an at home exercise
          program. Once accepted, new members get to create goals for themselves
          and then follow a 15 week <span className="bold">customized</span>{' '}
          nutrition and training program in order to achieve what they set out
          for. It is the beginning of a multi-program journey where members are
          taught (and held accountable) to experience what life is like with{' '}
          <span className="bold">sustainable eating and training habits</span>{' '}
          placed into their daily schedule....It’s like going back to school for
          your but this time for your body.
        </InfoText>
        <ReadMore>
          <Button
            dark
            primary
            onClick={() => {
              if (whatHeight === null) return
              setWhatHeight(isWhatHeight === 315 ? whatHeight : 315)
            }}
          >
            Read More
          </Button>
        </ReadMore>
      </WhatContainer>

      <TextContainer>
        <InfoHeader>Who is the 101 Course for?</InfoHeader>
        <InfoText>
          Our <span className="bold">first level</span> course is for people who
          want to take the guesswork out of{' '}
          <span className="bold">losing body fat</span> while building
          <span className="bold"> muscle</span>, forever, period. This program
          is for people who have tried multiple strategies with no luck, have
          doubts about whether they can find something sustainable, but still
          haven’t given up on <span className="bold">creating</span> the body
          they’ve always wanted.{' '}
        </InfoText>
      </TextContainer>

      <WhyContainer
        isWhyHeight={isWhyHeight}
        ref={whyRef}
        style={{ maxHeight: isWhyHeight }}
      >
        <InfoHeader>Why does it work?</InfoHeader>
        <InfoText>
          The TMA programs work because they are{' '}
          <span className="bold">reasonable</span> and{' '}
          <span className="bold">easy to follow</span>. Plain and simple. We
          understand that you’re not trying to be a bodybuilder, and that you
          have a life outside of exercise. However, we do know that you want to{' '}
          <span className="bold">feel great</span> and{' '}
          <span className="bold">look great</span> while balancing your work and
          personal life. So that’s where we come in. In the{' '}
          <span className="bold">101 Course</span>, we first show you the
          roadmap so you know what your long term journey looks like. We
          understand that permanent, sustainable changes take more than a few
          months, so we want you to know we’re prepared for that. After that we
          give you small action steps for you to take on a weekly basis and{' '}
          <span className="bold">stay in the corner</span> with you every step
          of the way until you’ve gotten what you came for.
        </InfoText>
        <ReadMore>
          <Button
            dark
            primary
            onClick={() => {
              if (whyHeight === null) return
              setWhyHeight(isWhyHeight === 325 ? whyHeight : 325)
            }}
          >
            Read More
          </Button>
        </ReadMore>
      </WhyContainer>
    </>
  )
}

export default AboutInfo
