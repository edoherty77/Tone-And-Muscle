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
  Heading,
  Subtitle,
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
  primary,
  darkText,
  dark,
  dark2,
  lightBg,
  imgStart,
  lightText,
}) => {
  //State for modal
  const [isOpen, setOpen] = useState(false)

  //Open and close functions for modals
  const onOpen = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{name}</Heading>
                <Subtitle darkText={darkText}>{story}</Subtitle>
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
