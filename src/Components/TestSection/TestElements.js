import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import colors from '../../config/colors'

export const Div = styled.div`
  @media screen and (max-width: 480px) {
    margin: 10px 10px;
    padding: 20px;
  }
`

export const HeaderContainer = styled.div`
  background-color: #f1f6fc;
  margin: auto;
  margin-bottom: 75px;
  width: 40%;
  height: 40px;

  @media screen and (max-width: 850px) {
    /* display: inline; */
    /* background-color: white; */
    margin: 40px auto;
    width: 65%;
    height: 40px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transform: translateY(-30px);

  @media screen and (max-width: 600px) {
    letter-spacing: 0.01em;
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`

export const TestContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? 'white' : '#f1f6fc')};

  @media screen and (max-width: 600px) {
    background-color: white;
  }

  /* @media screen and (max-width: 480px) {
    padding: 20px;
    margin: 40px 10px;
  } */
`
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
`
export const InfoRow = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};

  grid-template-columns: ${({ imgStart }) =>
    imgStart ? '1fr 4fr' : '4fr 1fr'};

  @media screen and (max-width: 890px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col2' 'col1'`};

    grid-template-columns: ${({ imgStart }) => (imgStart ? '1fr' : '1fr')};
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`

export const Column1 = styled.div`
  background-color: 'red';
  grid-area: col1;
  display: flex;

  @media screen and (max-width: 890px) {
    margin-top: 15px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    margin: 25px 0 55px 0;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`
export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  display: flex;
  grid-area: col2;
  align-items: center;

  @media screen and (max-width: 550px) {
    margin-top: 25px;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    margin: 0;
  }
`
export const TextWrapper = styled.div`
  max-width: 100%;
  /* height: fit-content; */
  padding-top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`
export const Name = styled.h1`
  display: flex;
  line-height: 1.1;
  font-weight: 600;
  color: black;
  /* padding-left: 60px; */

  @media screen and (max-width: 890px) {
    display: none;
    /* text-align: center;
    margin-bottom: 20px; */
  }

  /* @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 0;
  } */
`
export const BtnWrap = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 5px;
  }
`

export const Story = styled.p`
  display: flex;
  max-width: 100%;
  font-size: 20px;
  padding: 60px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  padding: ${({ imgStart }) =>
    imgStart ? '60px 0 60px 60px' : '60px 60px 60px 0'};

  @media screen and (max-width: 1100px) {
    padding: ${({ imgStart }) =>
      imgStart ? '30px 0 30px 30px' : '30px 30px 30px 0'};
    /* padding: 30px; */
    font-size: 18px;
  }

  @media screen and (max-width: 890px) {
    margin: auto;
    max-width: 450px;
    text-align: justify;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileStory = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    max-width: 450px;
    height: fit-content;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    margin: 20px 0 20px 0;
  }
`
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
`
export const Play = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Img = styled.img`
  /* width: 50%; */
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
`
export const Img2 = styled.img`
  width: 225px;
  height: 375px;
  /* width: 50%; */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    width: 50%;
    height: 280px;
  }
`

export const ApplyContainer = styled.div`
  background-color: ${colors.background};

  @media screen and (max-width: 890px) {
    background-color: white;
  }
`

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: center;

  @media screen and (max-width: 890px) {
    padding-top: 5px;
  }
`

export const ApplyBtnLink = styled.a`
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
  width: 500px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
