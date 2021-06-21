import styled from 'styled-components'
import colors from '../../config/colors'

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  box-shadow: 0px 0px 20px 2px gray;
  background: ${colors.background};

  padding: 120px;

  margin: 80px;
  height: fit-content;

  @media screen and (max-width: 1450px) {
    margin: 80px 40px;
    padding: 50px;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    padding: 0;
    background-color: white;
  }

  @media screen and (max-width: 600px) {
    margin: 50px 10px;
  }
  @media screen and (max-width: 480px) {
    margin: 20px 10px;
  }
`

export const MobileHeaderContainer = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: inline;
    background-color: ${colors.background};
    /* background-color: white; */
    margin: 40px auto 0px;
    width: 65%;
    height: 40px;
  }

  @media screen and (max-width: 450px) {
    margin: 40px auto 0px;
    width: 75%;
  }
`

export const Column1 = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* border: blue 1px solid; */
  width: 100%;
  transform: translate(80px, 0px);

  @media screen and (max-width: 850px) {
    padding: 40px 0;
    justify-content: center;
    transform: none;
  }
`

export const AboutImg = styled.img`
  position: absolute;
  width: 300px;
  height: auto;
  border-radius: 150px;

  @media screen and (max-width: 850px) {
    position: relative;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
    /* border-radius: 0px; */
  }
`

export const Column2 = styled.div`
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`

export const HeaderContainer = styled.div`
  background-color: white;
  margin: auto;
  margin-bottom: 55px;
  width: 50%;
  height: 45px;

  @media screen and (max-width: 850px) {
    display: none;
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

export const InfoContainer = styled.div`
  border: 1px solid #a8acb0;
  padding: 50px;
  width: 100%;

  @media screen and (max-width: 850px) {
    padding: 0;
    border: none;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;

  padding: 30px 50px;

  @media screen and (max-width: 850px) {
    background: white;
    /* background: #f1f6fc; */
  }

  @media screen and (max-width: 450px) {
    padding: 0 20px 20px;
  }
`

export const InfoText = styled.p`
  text-align: start;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    letter-spacing: 0;
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    letter-spacing: 0.05em;
    font-size: 15px;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`

export const IconContainer = styled.div`
  position: fixed;
  /* text-align: right; */
  /* top: 10px; */
  right: 0px;
  background-color: red;
`

export const ApplyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
