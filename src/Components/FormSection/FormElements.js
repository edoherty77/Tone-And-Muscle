import styled from 'styled-components'
import colors from '../../config/colors'
import '../../Styles/styles.css'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px;
    justify-content: center;

    @media screen and (max-width: 1450px) {
        margin: 80px 40px;
    }

    @media screen and (max-width: 600px) {
        margin: 20px 10px 70px 10px;
    }
`

export const FormTitle = styled.div`
    justify-self: center;
    align-self: center;
    padding: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    align-self: center;

    @media screen and (max-width: 800px) {
        width: 75%;
    }
    @media screen and (max-width: 600px) {
        width: 85%;
    }
`

export const ErrorMessage = styled.div`
    color: red;
    font-size: 11px;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export const Label = styled.label`
    font-size: 14px;
    margin-bottom: 3px;
    font-weight: 100;
`

export const SubLabel = styled.label`
    color: #363636;
    font-weight: 100;
    margin-bottom: 5px;
    font-size: 12px;
    opacity: .7;
    /* display: block; */
    white-space: pre-wrap;
`


export const Input = styled.input`
    -webkit-text-size-adjust: 100%;
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
`

export const TextArea = styled.textarea`
    -webkit-text-size-adjust: 100%;
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
`


export const Select = styled.select`
    width: 40px;
    padding: 5px;
`

export const Option = styled.option``

export const Checkbox = styled.input`
    width: 15px;
    margin-top: 0px;
`

export const ApplyContainer = styled.div`
  /* background-color: ${colors.background}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px;
  background-color: white;

  @media screen and (max-width: 480px) {
    margin: 40px 0 0;
  }
`

export const ApplyBtn = styled.button`
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
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`

export const SubmitMessage = styled.div`
    font-size: 14px;
    margin-top: 20px;
`
