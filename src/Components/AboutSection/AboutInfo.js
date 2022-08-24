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
      <TextContainer>
        <InfoHeader>Customized Training Routines</InfoHeader>
        <InfoText>
          For at home or in gym routines built around your goals and capabilities
        </InfoText>
      </TextContainer>

      <TextContainer>
        <InfoHeader>Flexible Food Plans/Nutrition Course</InfoHeader>
        <InfoText>
          To help you learn all about what to put in your body for higher energy levels/fat loss but allow you to make the decisions so you never feel like you're on a diet.
        </InfoText>
      </TextContainer>

      <TextContainer>
        <InfoHeader>Zoom Community Calls</InfoHeader>
        <InfoText>
          So you can not only learn from others what is working for them, but share with other students who can benefit from your guidance 
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoHeader>24/7 text Access to Coach plus Monthly 1 on 1's</InfoHeader>
        <InfoText>
          Get short term support but a refreshed game plan heading into each month
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoHeader>Weekly Exercise Form/Food Reviews</InfoHeader>
        <InfoText>
          We don't just hold you accountable to complete your workouts, we make sure you are moving in a way that's going to maximize muscle. For those that choose to track their food you get weekly overviews with suggestions on what to alter/keep in order to hit your weight loss goals. 
        </InfoText>
      </TextContainer>
    </>
  )
}

export default AboutInfo
