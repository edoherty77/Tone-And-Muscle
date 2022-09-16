import styled from "styled-components";
import colors from "../../config/colors";
import "../../Styles/styles.css";

export const AboutContainer = styled.div`
  box-shadow: 0px 0px 20px 2px gray;
  background: #f1f6fc;
  padding: 120px;
  margin: 80px;
  height: fit-content;

  @media screen and (max-width: 1450px) {
    margin: 80px 40px;
    padding: 50px;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    background-color: white;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 10px 20px 10px;
  }
`;

export const MobileHeaderContainer = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: inline;
    background-color: #f1f6fc;

    margin: 40px auto 0px;
    width: 65%;
    height: 40px;
  }

  @media screen and (max-width: 550px) {
    margin: 40px auto 0px;
    width: 85%;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    padding: 0;
    grid-template-areas: "col2 col2" "col1 col1";
  }
`;

export const Column1 = styled.div`
  @media screen and (max-width: 480px) {
    padding: 0;
    grid-area: col1;
  }
`;

export const HeaderContainer = styled.div`
  background-color: white;
  margin: 0 auto 65px auto;
  width: 55%;
  height: 40px;

  @media screen and (max-width: 1450px) {
    margin: 0 auto 45px auto;
    width: 70%;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 45px;
  font-weight: 600;
  text-transform: uppercase;
  transform: translateY(-25px);
  letter-spacing: 0.2em;
  transform: translateY(-30px);

  @media screen and (max-width: 1205px) {
    transform: translateY(-20px);
    font-size: 30px;
  }
  @media screen and (max-width: 450px) {
    transform: translateY(-25px);
    letter-spacing: 0.01em;
    font-size: 35px;
  }

  @media screen and (max-width: 405px) {
    transform: translateY(-20px);
    font-size: 27px;
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid #a8acb0;
  padding: 50px;
  width: 100%;

  @media screen and (max-width: 850px) {
    padding: 0;
    border: none;
  }
`;

export const AboutInfoContainer = styled.div`
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  padding: 30px 50px;

  @media screen and (max-width: 850px) {
    background: white;
  }

  @media screen and (max-width: 675px) {
    padding: 30px;
  }

  @media screen and (max-width: 500px) {
    padding: 30px 15px;
  }
`;

export const InfoHeader = styled.h1`
  margin-bottom: 15px;
  font-weight: 600;
  padding-left: 3px;

  @media screen and (max-width: 850px) {
    text-align: center;
    margin: auto;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
    padding-left: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 700;
  }
`;

export const InfoText = styled.p`
  text-align: start;
  font-size: 17px;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  font-weight: 500;
  border-left: ${colors.primary} 2px solid;
  padding-left: 15px;

  @media screen and (max-width: 500px) {
    letter-spacing: 0;
    border-left: none;
    padding-left: 0;
    text-align: center;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  position: relative;
  display: flex;
  width: 100%;
  transform: translate(-80px, 0px);

  @media screen and (max-width: 850px) {
    padding: 40px 0;
    justify-content: center;
    transform: none;
  }
`;

export const AboutImg = styled.img`
  position: absolute;
  width: 300px;
  height: auto;
  border-radius: 150px;

  @media screen and (max-width: 850px) {
    position: relative;
    /* border-radius: 0px; */
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;
