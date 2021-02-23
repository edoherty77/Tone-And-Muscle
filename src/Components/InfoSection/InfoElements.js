import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? 'white' : '#f1f6fc')};

  @media screen and (max-width: 890px) {
    /* padding: 50px 0; */
  }
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 100%; */
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`
export const InfoRow = styled.div`
  display: grid;
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */
  @media screen and (max-width: 890px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`

export const Column1 = styled.div`
  background-color: 'red';
  /* margin-bottom: 15px; */
  /* border: 1px blue solid; */
  grid-area: col1;

  @media screen and (max-width: 890px) {
    margin-top: 15px;
    margin-bottom: 30px;
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

  @media screen and (max-width: 480px) {
    padding: 0px;
    margin: 0;
  }
`
export const TextWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  padding-top: 0;
  position: relative;
  /* border: 1px green solid; */
  /* padding-bottom: 60px; */

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`
export const Name = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  /* border: 1px green solid; */
  color: ${({ blackHeader }) => (blackHeader ? 'black' : '#7aaeea')};

  @media screen and (max-width: 890px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 0;
  }
`
export const BtnWrap = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    z-index: 22;
    width: 100%;
    margin-top: 5px;
  }
`
export const Story = styled.p`
  max-width: 640px;
  height: fit-content;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (max-width: 890px) {
    margin: auto;
    max-width: 70%;
  }
  @media screen and (max-width: 620px) {
    margin: auto;
    max-width: 85%;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileStory = styled.p`
  opacity: 0;
  position: absolute;
  /* display: none; */
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    transition: opacity 0.2s linear;
    max-width: 440px;
    opacity: ${({ isShown }) => (isShown ? 1 : 0)};
    position: ${({ isShown }) => (isShown ? 'static' : 'absolute')};
    height: fit-content;
    font-size: 20px;
    line-height: 24px;
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
  align-items: center;
  justify-content: center;
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
  width: 200px;
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
  width: 200px;
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
