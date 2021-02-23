import styled from 'styled-components'
import colors from '../../config/colors'

export const MobileHeaderContainer = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: inline;
    background-color: white;
    margin: 40px auto 0px;
    width: 65%;
    height: 30px;
  }

  @media screen and (max-width: 450px) {
    margin: 40px auto 0px;
    width: 75%;
  }
`

export const HeaderContainer = styled.div`
  background-color: white;
  margin: auto;
  margin-bottom: 75px;
  width: 50%;
  height: 30px;

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
