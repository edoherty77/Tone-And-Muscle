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
        margin: 20px 10px 20px 10px;
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
    margin: 0 400px;
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
    height: 100px;
`
export const ApplyContainer = styled.div`
  /* background-color: ${colors.background}; */
  display: flex;
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

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  } */
`