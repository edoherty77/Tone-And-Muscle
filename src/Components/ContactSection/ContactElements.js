import styled from "styled-components";
import colors from "../../config/colors";
import "../../Styles/styles.css";

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  color: #ffffff80;
  justify-content: space-around;
  padding: 30px;
  /* height: 86vh; */
  overflow-y: hidden;
  position: relative;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    padding: 30px 10px 0;
    box-shadow: 0px 0px 20px 2px #5579a3;
  }
`;

export const MobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 890px) {
    display: flex;
    margin-bottom: 20px;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 200;
    color: ${colors.primary};
  }
`;

export const InfoHeader = styled.div`
  font-size: 40px;
  /* margin-bottom: 20px; */

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 30px; */

  @media screen and (max-width: 890px) {
    padding: 0px;
    /* margin-bottom: 25px; */
  }
`;

export const InfoText = styled.div`
  font-size: 16px;
  font-weight: 200;
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
