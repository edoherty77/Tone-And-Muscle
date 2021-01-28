import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

import Pic from './pat-photo.JPG'
import MobilePic from './pat-photo2.jpg'

export const LandingContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  width: 100%;

  :after {
    content: '';
    background: rgb(0 0 0/ 57%) url(${Pic}) no-repeat fixed top;
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

  /* @media screen and (max-width: 700px) {
    :after {
      background-position: 0px 70px;
    }
  } */
  @media screen and (max-width: 450px) {
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    width: 100%;

    :after {
      content: '';
      background: rgb(0 0 0/ 57%) url(${MobilePic}) no-repeat fixed top;
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
  }
`

export const LandingContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 450px) {
    margin-top: 50px;
  }
`

export const LandingH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const LandingP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const LandingBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const SocialLink = styled.a`
  font-size: 60px;
  margin: 20px;
`

export const SocialImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 15px;
`
