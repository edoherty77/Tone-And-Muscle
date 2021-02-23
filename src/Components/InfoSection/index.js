import React, { useState } from 'react'
import 'react-responsive-modal/styles.css'
import '../../Styles/styles.css'
import Testimonial from './testimonial'
import { schena, conway, poplaski, bujacich } from './Data'
import { Header, HeaderContainer } from './InfoElements'

const InfoSection = ({ id, lightBg }) => {
  //State for modal
  const [isOpen, setOpen] = useState(false)

  //State for story in mobile view
  const [isShown, setShown] = useState(false)
  const [showButton, setShowButton] = useState(true)

  //Open and close functions for modals
  const onOpen = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }
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

export default InfoSection
