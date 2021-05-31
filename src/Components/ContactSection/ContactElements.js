import styled from 'styled-components'
import colors from '../../config/colors'
import '../../Styles/styles.css'
import { Input, TextField, createMuiTheme } from '@material-ui/core'

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  color: white;
  justify-content: space-around;
  padding: 30px;
  height: 92vh;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    padding: 30px 10px 0;
    box-shadow: 0px 0px 20px 2px #5579a3;
  }
`

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
`

export const InfoHeader = styled.div`
  font-size: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media screen and (max-width: 890px) {
    padding: 0px;
    /* margin-bottom: 25px; */
  }
`

export const InfoText = styled.div`
  font-size: 16px;
  font-weight: 200;
`

export const FormContainer = styled.div`
  border: ${colors.white} 1px solid;
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-basis: 33%;
  box-shadow: 0px 0px 20px 2px #5579a3;
  height: fit-content;
  align-self: center;

  @media screen and (max-width: 890px) {
    margin-bottom: 25px;
    padding: 5px;
    box-shadow: none;
    border: none;
    align-self: auto;
  }
`

export const FormHeader = styled.div`
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 200;
  color: ${colors.primary};

  @media screen and (max-width: 890px) {
    display: none;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormInput = styled.input`
  margin: 10px 0;
  /* color: 'secondary'; */
  width: 100%;
  padding: 10px;
  color: white;
  background-color: black;

  @media screen and (max-width: 890px) {
    width: 80%;
  }
`

export const MessageInput = styled.textarea`
  margin: 10px 0;
  /* height: 100px; */
  width: 100%;
  color: white;
  padding: 10px;
  background-color: black;

  @media screen and (max-width: 890px) {
    width: 80%;
  }
`

export const IconsContainer = styled.div`
  display: flex;
`

export const IconLink = styled.a`
  margin: 10px;
  cursor: pointer;
`

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 890px) {
    margin-top: 5px;
  }
`

export const ApplyBtnLink = styled.a`
  border-radius: 50px;
  background: #bcf97f;
  /* white-space: nowrap; */
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
