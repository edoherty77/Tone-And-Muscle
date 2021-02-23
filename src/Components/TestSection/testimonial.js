import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Player from '../Player'
import '../../Styles/styles.css'
import {
  TestContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Name,
  BtnWrap,
  MobileStory,
  Story,
  ImgWrap,
  Play,
  Img,
  Img2,
} from './TestElements'

const Testimonial = ({
  id,
  story,
  name,
  video,
  bef,
  aft,
  alt,
  alt2,
  darkText,
  lightBg,
  imgStart,
  dark,
  primary,
}) => {
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
  //Toggle story text
  const toggleStory = () => {
    setShown(!isShown)
  }
  return (
    <>
      <TestContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper imgStart={imgStart}>
                {/* <Name blackHeader={blackHeader}>{name}</Name> */}

                <BtnWrap>
                  {showButton && (
                    <Button
                      onClick={() => setShown(true)}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >
                      Read About It
                    </Button>
                  )}
                </BtnWrap>
                <CSSTransition
                  in={isShown}
                  timeout={300}
                  classNames="show"
                  unmountOnExit
                  onEnter={() => setShowButton(false)}
                  onExited={() => setShowButton(true)}
                >
                  <MobileStory
                    // isShown={isShown}
                    darkText={darkText}
                    dismissible
                    variant="primary"
                    // onClose={() => setShown(false)}
                  >
                    {story}
                    <Button
                      onClick={() => setShown(false)}
                      smooth={true}
                      // spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      style={{ marginTop: '20px' }}
                    >
                      Hide Story
                    </Button>
                  </MobileStory>
                </CSSTransition>

                <Story
                  darkText={darkText}
                  isShown={isShown}
                  imgStart={imgStart}
                >
                  {story}
                </Story>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Play>
                  <FontAwesomeIcon
                    className="iconBtn"
                    onClick={() => onOpen({ video })}
                    icon={faPlayCircle}
                    size="5x"
                  />
                </Play>
                <Img src={bef} alt={alt} />
                <Img2 src={aft} alt={alt2} />
              </ImgWrap>
              <Player
                name={name}
                open={isOpen}
                onClose={onCloseModal}
                url={video}
              />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </TestContainer>
    </>
  )
}
export default Testimonial
