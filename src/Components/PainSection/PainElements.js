import styled from 'styled-components'
import colors from '../../config/colors'
import { motion } from 'framer-motion'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export const MainContainer = styled.div`
  margin: 70px auto 80px;
  max-width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 450px) {
    margin: 40px auto 50px;
  }
`

export const ContentContainer = styled.div`
  padding: 55px;
  box-shadow: 0px 0px 20px 2px gray;
  max-width: 68%;

  @media screen and (max-width: 1200px) {
    max-width: 82%;
  }

  @media screen and (max-width: 900px) {
    padding: 45px 30px;
  }
  @media screen and (max-width: 850px) {
    max-width: 92%;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin: 0 10px;
  }
  @media screen and (max-width: 450px) {
    padding: 35px 10px;
  }
`

export const SliderContainer = styled.div`
  display: flex;
  font-size: 25px;
  line-height: 1.3em;
  font-weight: 500;
  margin-bottom: 25px;
  /* justify-content: center; */
  /* width: 100%; */
  /* align-items: center; */

  @media screen and (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
    line-height: 1.1em;
    font-weight: 600;
    margin-bottom: 20px;
  }
`

export const Left = styled.div`
  display: flex;
  flex-basis: 90%;
  margin-right: 20px;
  font-style: italic;
  font-weight: 500;
  max-width: 90%;

  @media screen and (max-width: 900px) {
    justify-content: center;
    text-align: center;
    margin: 0 0 10px 0;
    max-width: 100%;
  }
`

export const Right = styled.div`
  display: flex;
  flex-basis: 10%;
  justify-content: flex-end;
  /* align-items: center; */
  /* margin: 10px 30px; */
  /* padding-right: 110px; */

  @media screen and (max-width: 1200px) {
    justify-content: center;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    padding: 0;
    margin: 0 30px;
  }
`

export const Icon = styled(CheckCircleIcon)`
  && {
    font-size: 40px;
    color: green;
  }
  @media screen and (max-width: 480px) {
    && {
      font-size: 30px;
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  line-height: 1.3em;
  font-weight: 700;
  margin-top: 50px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 1.1em;
    font-weight: 600;
  }
`
