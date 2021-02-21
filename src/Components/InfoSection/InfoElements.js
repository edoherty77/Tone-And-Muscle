import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: white;
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);

  gap: 5x;
  height: 100%;

  /* border: purple 4px solid; */
  grid-auto-rows: minmax(100px, auto);
  /* background: ${({ lightBg }) => (lightBg ? 'white' : '#f1f6fc')}; */

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    /* padding: 50px; */
    display: block;
  }
`

export const Header = styled.h1`
  color: black;
  margin: 40px 0 0 40px;
  text-align: start;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: bold;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 50px 5px;

  width: 100%;
  height: fit-content;
  flex-direction: column;

  /* border: black 2px solid; */

  @media screen and (max-width: 1175px) {
    grid-template-areas: ${({ num }) => 1 / 2};
    grid-row: ${({ num }) => (num < 3 ? 1 : 2)};
    /* width: 100%; */
  }

  @media screen and (max-width: 670px) {
    grid-template-areas: ${({ num }) => num / 1};
    grid-row: ${({ num }) => num};
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    grid-template-areas: ${({ num }) => 1 / 3};
    /* grid-row: ${({ num }) => 1}; */
    max-width: 100%;
  }
`

export const InfoWrapper = styled.div`
  /* border: 3px green dashed; */
  box-shadow: 0px 0px 20px 2px #5579a3;
  margin-bottom: 20px;
`

export const InfoTop = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  max-width: 100%;
  /* border: pink 2px solid; */
`

export const ImgWrap = styled.div`
  display: flex;
  /* border: red 1px solid; */
  background: rgb(0 0 0/ 17%);
  max-width: 100%;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;

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
  width: 165px;
  height: 255px;
  /* width: 250px; */
  /* height: 400px; */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;

  /* @media screen and (max-width: 1500px) {
    width: 200px;
    height: 320px;
  } */

  @media screen and (max-width: 1300px) {
    width: 180px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    height: 280px;
  }
`
export const Img2 = styled.img`
  width: 165px;
  height: 255px;

  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;

  @media screen and (max-width: 1300px) {
    width: 180px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    height: 280px;
  }
`
export const InfoBottom = styled.div`
  display: flex;
  max-width: 500px;
  /* border: blue solid 1px; */
  height: fit-content;
  padding: 10px;

  justify-content: center;
  @media screen and (max-width: 1300px) {
    width: 360px;
    /* height: 300px; */
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    /* height: 280px; */
  }
`

export const TextWrapper = styled.div`
  max-width: 100%;
  display: flex;
  height: 100%;
  padding-top: 0;
  position: relative;
  /* border: 1px green solid; */
  /* padding-bottom: 60px; */

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`

export const BtnWrap = styled.div`
  /* display: none; */

  @media screen and (max-width: 480px) {
    display: flex;
    /* border: 2px solid green; */
    z-index: 22;
    width: 100%;
    margin-top: 5px;
  }
`

export const Story = styled.p`
  height: 100%;
  font-size: 15px;
  line-height: 18px;
  text-align: start;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width: 620px) {
    margin: auto;
  }

  display: none;
`

export const MobileStory = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* max-width: 440px; */
  height: fit-content;
  text-align: start;
  /* text-indent: 2em; */
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  margin: 20px 0 20px 0;
`
