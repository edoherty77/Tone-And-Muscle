import React from 'react'
import '../../Styles/styles.css'
import Testimonial from './testimonial'
import { schena, conway, poplaski, bujacich } from './Data'
import { Header, HeaderContainer } from './TestElements'

const TestSection = ({ id, lightBg }) => {
  return (
    <>
      <HeaderContainer>
        <Header>Testimonials</Header>
      </HeaderContainer>
      <Testimonial {...schena} />
      <Testimonial {...poplaski} />
      <Testimonial {...conway} />
      <Testimonial {...bujacich} />
    </>
  )
}

export default TestSection
