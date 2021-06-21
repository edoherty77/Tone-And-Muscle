import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../ButtonElements'
import '../../Styles/styles.css'
import {
  AboutInfoContainer,
  WhatContainer,
  WhyContainer,
  TextContainer,
  InfoHeader,
  InfoText,
  ReadMoreWhat,
  ReadMoreWhy,
} from './AboutElements'

let whatHeight = null
let whyHeight = null

const AboutInfo = () => {
  const [isWhatHeight, setWhatHeight] = useState('auto')
  const [isWhyHeight, setWhyHeight] = useState('auto')
  const [isWhatPressed, setWhatPressed] = useState(false)
  const [isWhyPressed, setWhyPressed] = useState(false)
  const whatRef = useRef(null)
  const whyRef = useRef(null)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  const handleWhatPress = () => {
    if (whatHeight === null) return
    setWhatHeight(isWhatHeight === 315 ? whatHeight : 315)
    setTimeout(function () {
      setWhatPressed(true)
    }, 800)
  }
  const handleWhyPress = () => {
    if (whyHeight === null) return
    setWhyHeight(isWhyHeight === 325 ? whyHeight : 325)
    setTimeout(function () {
      setWhyPressed(true)
    }, 700)
  }

  return (
    <>
      {/* <AboutInfoContainer> */}
      <WhatContainer
        ref={whatRef}
        style={
          windowSize.width < '480'
            ? { maxHeight: isWhatHeight }
            : { maxHeight: 'fit-content' }
        }
        // style={{ maxHeight: isWhatHeight }}
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
          placed into their daily schedule....It’s like going back to school but
          this time for your body.
        </InfoText>

        <ReadMoreWhat style={{ display: isWhatPressed ? 'none' : 'flex' }}>
          <Button
            dark
            primary
            onClick={handleWhatPress}
            style={{
              display: windowSize.width > '480' ? 'none' : 'flex',
              padding: '10px',
            }}
          >
            Read More
          </Button>
        </ReadMoreWhat>
      </WhatContainer>

      <TextContainer>
        <InfoHeader>Who is the 101 Course for?</InfoHeader>
        <InfoText>
          Our <span className="bold">first level</span> course is for people who
          want to take the guesswork out of{' '}
          <span className="bold">losing body fat </span> while building
          <span className="bold"> muscle</span>, forever, period. This program
          is for people who have tried multiple strategies with no luck, have
          doubts about whether they can find something sustainable, but still
          haven’t given up on <span className="bold">creating</span> the body
          they’ve always wanted.
        </InfoText>
      </TextContainer>

      <WhyContainer
        isWhyHeight={isWhyHeight}
        ref={whyRef}
        style={
          windowSize.width < '480'
            ? { maxHeight: isWhyHeight }
            : { maxHeight: 'fit-content' }
        }
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
        <ReadMoreWhy
          style={isWhyPressed ? { display: 'none' } : { display: 'flex' }}
        >
          <Button
            dark
            primary
            onClick={handleWhyPress}
            style={{
              display: windowSize.width > '480' ? 'none' : 'flex',
              // height: '40px'
              padding: '10px',
            }}
          >
            Read More
          </Button>
        </ReadMoreWhy>
      </WhyContainer>
      {/* </AboutInfoContainer> */}
    </>
  )
}

export default AboutInfo
