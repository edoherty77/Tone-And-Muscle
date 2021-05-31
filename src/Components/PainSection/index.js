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
} from './PainElements'

const PainSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  })
  return (
    <MainContainer>
      <SliderContainer>
        <InView threshold={1}>
          {({ ref, inView }) => (
            <Right
              ref={ref}
              // initial={{ opacity: 0, x: 100 }}
              // animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              // transition={{ ease: 'easeOut', duration: 2 }}
            >
              <Icon />
            </Right>
          )}
        </InView>
        <InView threshold={1}>
          {({ ref, inView }) => (
            <Left
              ref={ref}
              // initial={{ opacity: 0, x: -100 }}
              // animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              // transition={{ ease: 'easeOut', duration: 2 }}
            >
              Not sure what to do in order to get your weight down?
            </Left>
          )}
        </InView>
      </SliderContainer>
      <SliderContainer>
        <Right>
          <Icon />
        </Right>
        <Left ref={ref} inView={inView}>
          Tired of feeling guilty about eating certain foods?
        </Left>
      </SliderContainer>
      <SliderContainer>
        <Right>
          <Icon />
        </Right>
        <Left ref={ref} inView={inView}>
          {' '}
          And at the same time, do you want to find a sustainable training
          routine that you can take with you for the rest of your life?
        </Left>
      </SliderContainer>
      <Bottom>Well, you’ve come to the right place.</Bottom>
    </MainContainer>
  )
}

export default PainSection
