import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  color: black;
  background: #f1f6fc;
  padding: 50px 100px 50px 100px;
  height: fit-content;

  @media screen and (max-width: 890px) {
    /* padding: 50px 0; */
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    height: fit-content;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
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
  height: 100%;
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
  /* border: 1px blue solid; */
  grid-area: col1;
  /* align-items: center; */
  display: flex;
  height: 100vh;

  @media screen and (max-width: 890px) {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    height: fit-content;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid blue 2px; */
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`
export const Header = styled.h1`
  font-size: 45px;
  font-weight: 500;
  margin: 30px 0;
`

export const Content = styled.p`
  text-align: start;
  text-indent: 2em;
  /* max-width: 80%; */
`

export const Divider = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    border-top: 2px solid black;
  }
`

export const Column2 = styled.div`
  display: flex;
  grid-area: col2;
  height: 100vh;
  /* border: solid black 2px; */
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 0px;
    /* margin: 20px 0 20px 0; */
    height: fit-content;
  }
`
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid blue 2px; */
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid red 2px; */
  align-items: center;
  /* justify-content: space-evenly; */
  height: 100%;
  max-width: 80%;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 5px;
  }
`

export const Name = styled.h1`
  align-self: baseline;
  font-size: 25px;
  font-weight: 500;
  max-width: 80%;
`

export const Title = styled.p`
  align-self: baseline;
  max-width: 80%;
  margin-bottom: 20px;
`
