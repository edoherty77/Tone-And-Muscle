import styled from 'styled-components'
import LgPic from './pat-photo.JPG'
import { animated } from 'react-spring'
import { Link as LinkR } from 'react-router-dom'

import colors from '../../config/colors'

export const LandingContainer = styled.div`
  background: #f1f6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 0;
  width: 100%;
  margin: 0;

  :before {
    content: '';
    position: absolute;
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: -1;
  }

  :after {
    content: '';
    background: rgb(0 0 0/ 57%) url(${LgPic}) no-repeat fixed top;
    background-blend-mode: color;
    background-size: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100%;
  }
  @media screen and (min-width: 931px) {
    :before,
    :after {
      /* clip-path: polygon(0 0, 100% 0%, 100% 92%, 0 66%); */
    }
  }
`

export const MobileImgWrp = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(rgba(0, 0, 0, 0.2)),
          to(rgba(0, 0, 0, 0.2))
        ),
        -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
      z-index: 1;
    }
    display: inline;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }
`

export const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`

export const TextContainer = styled(animated.div)`
  z-index: 1;
  /* border: 1px black solid; */
  margin: auto;
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  @media screen and (max-width: 930px) {
    max-width: 90%;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`

export const LandingH1 = styled(animated.h1)`
  color: white;
  /* color: #7aaeea; */
  font-size: 48px;
  text-align: center;
  margin-top: 110px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    font-weight: 900;
    max-width: 98%;
  }

  @media screen and (max-width: 375px) {
    font-size: 28px;
    max-width: 98%;
  }
`

export const LandingP = styled(animated.p)`
  margin-top: 24px;
  /* color: #7aaeea; */
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    max-width: 80%;
    line-height: 1rm;
    letter-spacing: 1.3px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
    max-width: 98%;
  }
`
export const LandingBtnWrapper = styled(animated.div)`
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* z-index: 1; */
`
export const SocialLink = styled.a`
  font-size: 60px;
  margin: 20px;
  /* z-index: 3; */
`

export const SocialImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 15px;
  /* z-index: 3; */
`

export const StoryContainer = styled.div`
  z-index: auto;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  /* border: blue 2px solid; */
  bottom: 0;
  padding: 20px;

  @media screen and (max-width: 930px) {
    display: none;
  }
`

export const LeftContainer = styled.div`
  position: relative;
  /* border: solid red 1px; */
  display: flex;

  @media screen and (max-width: 450px) {
  }
`

export const Play = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StoryImg = styled.img`
  width: 150px;
  height: auto;
  /* border: grey 2px solid; */
  /* margin: 5px; */
`

export const RightContainer = styled.div`
  position: relative;
  /* border: solid green 1px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0 0 20px;
  max-width: 30%;

  @media screen and (max-width: 1500px) {
    justify-content: flex-end;
    max-width: 50%;
  }
`

export const RightHeader = styled.h1`
  align-self: flex-start;
  color: black;
`
export const RightText = styled.p`
  text-align: start;
  font-size: 22px;
  color: black;
  margin-top: 15px;
`

export const ApplyWrapper = styled(animated.div)`
  margin: 30px 0 10px;
`

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;
`

export const ApplyBtnLink = styled.a`
  border-radius: 50px;
  background: #bcf97f;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
