import React from 'react'
import '../../Styles/styles.css'
import Testimonial from './testimonial'
import { schena, conway, poplaski, bujacich, ward } from './Data'
import {
  Div,
  Header,
  HeaderContainer,
  ApplyBtn,
  ApplyBtnLink,
  ApplyContainer,
} from './TestElements'

const TestSection = ({ id, lightBg }) => {
  return (
    <>
      <Div id="testies">
        <HeaderContainer>
          <Header>Testimonials</Header>
        </HeaderContainer>
        <Testimonial {...schena} />
        <Testimonial {...poplaski} />
        <Testimonial {...conway} />
        <Testimonial {...bujacich} />
        <Testimonial {...ward} />
        <ApplyContainer>
          <ApplyBtn>
            <ApplyBtnLink
              target="_blank"
              href="https://form.jotform.com/211236844480151"
            >
              Apply Here
            </ApplyBtnLink>
          </ApplyBtn>
        </ApplyContainer>
      </Div>
    </>
  )
}

export default TestSection
