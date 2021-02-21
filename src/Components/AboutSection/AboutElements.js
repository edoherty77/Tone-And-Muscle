import styled from 'styled-components'

export const CatchContainer = styled.div`
  padding: 3% 10% 0 10%;

  @media screen and (max-width: 480px) {
    padding: 5% 7%;
  }
`
export const CatchText = styled.p`
  font-size: 25px;
  line-height: 1.5em;

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 1.1em;
  }
`

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  background: #f1f6fc;
  padding: 120px;

  margin: 80px;
  height: fit-content;
  /* border: purple 1px solid; */

  @media screen and (max-width: 890px) {
    /* padding: 50px 0; */
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    height: fit-content;
  }
`

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* border: blue 1px solid; */
  width: 100%;
  transform: translate(80px, 0px);
`

export const AboutImg = styled.img`
  position: absolute;
  width: 300px;
  height: auto;
  /* border-radius: 150px; */
`

export const InfoWrapper = styled.div`
  /* border: black 1px solid; */
  /* width: 100%; */

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`

export const HeaderContainer = styled.div`
  background-color: white;
  margin: auto;
  margin-bottom: 25px;
  width: 50%;
`

export const Header = styled.h1`
  /* border: 1px dashed red; */
  text-transform: uppercase;
  transform: translateY(-10px);
`
export const Info = styled.div``
export const RightContainer = styled.div`
  border: 2px solid black;
  padding: 50px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  /* margin: 70px; */
  /* border: 1px solid black; */

  padding: 30px 50px;
`

export const InfoHeader = styled.h1`
  margin-bottom: 5px;
`
export const InfoText = styled.p`
  text-align: start;
  font-size: 20px;
  line-height: 1.2em;
  letter-spacing: 0.1em;
`
