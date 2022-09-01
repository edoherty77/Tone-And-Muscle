import styled from "styled-components";
import colors from "../../config/colors";
import "../../Styles/styles.css";

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  color: white;
  justify-content: space-around;
  padding: 30px;
  height: 92vh;
  overflow-y: hidden;
  position: relative;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    padding: 30px 10px 0;
    box-shadow: 0px 0px 20px 2px #5579a3;
    justify-content: center;
  }
`;

export const InfoHeader = styled.div`
  font-size: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  display: none;

  @media screen and (max-width: 890px) {
    display: inline;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
`;

export const InfoTextName = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const InfoText = styled.div`
  font-size: 16px;
  font-weight: 200;

  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const IconLink = styled.a`
  margin: 10px;
  cursor: pointer;
`;

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 890px) {
    margin-top: 5px;
  }
`;

export const VideoContainer = styled.section`
  border: ${colors.white} 1px solid;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  box-shadow: 0px 0px 20px 2px #5579a3;
  height: fit-content;
  align-self: center;
  background-color: white;

  @media screen and (max-width: 890px) {
    box-shadow: none;
    border: none;
    align-self: auto;
    max-height: fit-content;
    width: 40%;
    margin: 40px auto 40px;
  }
  @media screen and (max-width: 600px) {
    width: 60%;
    margin-top: 15px;
  }
  @media screen and (max-width: 420px) {
    width: 95%;
  }
`;

export const ImgWrap = styled.div`
  width: auto;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 0px 20px 2px #5579a3;
  justify-content: center;

  @media screen and (max-width: 890px) {
    max-width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 350px) {
    max-width: 100%;
  }
`;
export const Play = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;
