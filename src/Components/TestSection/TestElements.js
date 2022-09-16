import styled from "styled-components";
import colors from "../../config/colors";
import { Link as LinkS } from "react-scroll";

export const Div = styled.div`
  margin-top: 160px;

  @media screen and (max-width: 850px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 480px) {
    margin: 10px 10px;
    padding: 20px;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #f1f6fc;
  margin: 75px auto;
  width: 40%;
  height: 40px;

  @media screen and (max-width: 1500px) {
    width: 50%;
  }

  @media screen and (max-width: 945px) {
    width: 60%;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
    height: 40px;
  }

  @media screen and (max-width: 535px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transform: translateY(-54px);

  @media screen and (max-width: 1205px) {
    font-size: 30px;
    transform: translateY(-33px);
  }

  @media screen and (max-width: 630px) {
    font-size: 25px;
    transform: translateY(-18px);
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
export const MobileHeader = styled.h1`
  display: none;

  @media screen and (max-width: 450px) {
    display: block;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 24px;
    transform: translateY(-20px);
  }
`;

export const TestContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "white" : "#f1f6fc")};

  @media screen and (max-width: 600px) {
    background-color: white;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1800px;
  margin: 0;
  padding: 50px;
  align-items: center;

  @media screen and (max-width: 1100px) {
    padding: 20px;
  }

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};

  grid-template-columns: ${({ imgStart }) =>
    imgStart ? "1fr 1fr" : "1fr 1fr"};

  @media screen and (max-width: 890px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col2' 'col1'`};

    grid-template-columns: ${({ imgStart }) => (imgStart ? "1fr" : "1fr")};
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;

export const Column1 = styled.div`
  background-color: "red";
  grid-area: col1;
  display: flex;
  justify-self: ${({ imgStart }) => (imgStart ? "start" : "end")};

  @media screen and (max-width: 900px) {
    margin-top: 15px;
    margin-bottom: 30px;
    align-items: center;
    justify-self: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    max-width: 375px;
  }

  @media screen and (max-width: 550px) {
    margin: 25px 0 55px 0;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    max-width: 280px;
  }
`;

export const Column2 = styled.div`
  display: flex;
  grid-area: col2;
  align-items: center;
  justify-self: ${({ imgStart }) => (imgStart ? "end" : "start")};

  @media screen and (max-width: 900px) {
    justify-self: center;
  }

  @media screen and (max-width: 550px) {
    margin-top: 25px;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    margin: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};

  @media screen and (max-width: 1100px) {
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

export const Story = styled.p`
  display: flex;
  max-width: 60%;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  padding: ${({ imgStart }) =>
    imgStart ? "60px 0 60px 60px" : "60px 60px 60px 0"};

  @media screen and (max-width: 1250px) {
    max-width: 70%;
    font-size: 18px;
  }

  @media screen and (max-width: 890px) {
    margin: auto;
    max-width: 375px;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    max-width: 280px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 375px;
  display: flex;
  flex-direction: row;
  position: relative;

  box-shadow: 0px 0px 20px 2px #5579a3;

  @media screen and (max-width: 890px) {
    max-width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 280px;
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
export const Img2 = styled.img`
  width: 225px;
  height: 375px;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    width: 50%;
    height: 280px;
  }
`;

export const ApplyContainer = styled.div`
  margin: 40px 0 60px;
  background-color: white;

  @media screen and (max-width: 480px) {
    margin: 40px 0 0;
  }
`;

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: center;

  @media screen and (max-width: 890px) {
    padding-top: 5px;
  }
`;

export const ApplyBtnLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  border-radius: 50px;
  background: #bcf97f;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
