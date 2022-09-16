import styled from "styled-components";
import LgPic from "./pat-photo.JPG";
import { animated } from "react-spring";

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
    content: "";
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
    content: "";
    background: rgb(0 0 0/ 5%) url(${LgPic}) no-repeat fixed top;
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
`;

export const MobileImgWrp = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    :before {
      content: "";
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
`;

export const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const TextContainer = styled(animated.div)`
  z-index: 1;
  margin: auto;
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 75vh;
  justify-content: center;

  @media screen and (max-width: 930px) {
    max-width: 90%;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const LandingH1 = styled(animated.h1)`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-top: 110px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    font-weight: 900;
    max-width: 98%;
    margin-top: 75px;
  }

  @media screen and (max-width: 375px) {
    font-size: 28px;
    max-width: 98%;
  }
`;
