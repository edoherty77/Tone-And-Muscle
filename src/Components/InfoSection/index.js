import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import SuccessPics from '../SuccessPics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Player from '../Player'
import 'react-responsive-modal/styles.css'
import {
  InfoContainer,
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
} from './InfoElements'

const InfoSection = ({
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
  blackHeader,
  dark,
  primary,
}) => {
  //State for modal
  const [isOpen, setOpen] = useState(false)
  const [isShown, setShown] = useState(false)

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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Name blackHeader={blackHeader}>{name}</Name>
                <MobileStory isShown={isShown} darkText={darkText}>
                  {story}
                </MobileStory>
                <BtnWrap>
                  <Button
                    onClick={toggleStory}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {isShown == false ? 'Read About It' : 'Close'}
                  </Button>
                </BtnWrap>

                <Story darkText={darkText} isShown={isShown}>
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
              <Player open={isOpen} onClose={onCloseModal} url={video} />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
