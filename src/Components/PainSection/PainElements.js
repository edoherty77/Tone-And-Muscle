import styled from 'styled-components'
import colors from '../../config/colors'
import { motion } from 'framer-motion'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export const MainContainer = styled.div`
  margin: 80px 80px;
  padding: 20px 40px;
  /* box-shadow: 0px 0px 20px 2px gray; */
  background-color: white;

  @media screen and (max-width: 1450px) {
    margin: 80px 40px;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 5% 2%;
  }
`

export const SliderContainer = styled.div`
  display: flex;
  font-size: 25px;
  line-height: 1.3em;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
    line-height: 1.1em;
    font-weight: 600;
    margin-bottom: 0px;
  }
`

export const Left = styled(motion.div)`
  display: flex;
  flex-basis: 80%;
  margin: 10px 0;
  font-style: italic;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    justify-content: center;
    text-align: center;
  }
`

export const Right = styled(motion.div)`
  display: flex;
  flex-basis: 20%;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 30px;
  padding-right: 110px;

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
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 1.1em;
    font-weight: 600;
    text-align: center;
  }
`
