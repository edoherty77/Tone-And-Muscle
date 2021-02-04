import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

import LgPic from './pat-photo.JPG'
import mobile from './pat-photo2.jpg'

export const LandingContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  width: 100%;

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
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
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
`

export const MobileImgWrp = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: inline;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`

export const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
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
  color: #7aaeea;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    color: #fff;
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
