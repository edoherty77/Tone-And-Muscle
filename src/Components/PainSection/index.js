import React from 'react'
import colors from '../../config/colors'
import { InView, useInView } from 'react-intersection-observer'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {
  MainContainer,
  SliderContainer,
  Left,
  Right,
  Icon,
  Bottom,
  ContentContainer,
} from './PainElements'

const PainSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  })
  return (
    <MainContainer>
      <ContentContainer> 
        <SliderContainer>
          <Left>Not sure what to do in order to get your weight down?</Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <SliderContainer>
          <Left>Tired of feeling guilty about eating certain foods?</Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <SliderContainer>
          <Left>
            {' '}
            And at the same time, do you want to find a sustainable training
            routine that you can take with you for the rest of your life?
          </Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <Bottom>Well, you’ve come to the right place.</Bottom>
      </ContentContainer>
    </MainContainer>
  )
}

export default PainSection
