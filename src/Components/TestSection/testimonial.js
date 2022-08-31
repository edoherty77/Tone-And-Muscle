import React, { useState } from "react";
// import { Button } from '../ButtonElements'
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Player from "../Player";
import colors from "../../config/colors";

import ToggleBtn from "./ToggleBtn";

import "../../Styles/styles.css";
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
} from "./TestElements";

const Testimonial = ({
  story,
  name,
  video,
  img,
  aft,
  alt,
  alt2,
  darkText,
  lightBg,
  imgStart,
}) => {
  //State for modal
  const [isOpen, setOpen] = useState(false);

  //State for story in mobile view
  const [isShown, setShown] = useState(false);
  const [showButton, setShowButton] = useState(true);

  //Open and close functions for modals
  const onOpen = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <TestContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              <TextWrapper imgStart={imgStart}>
                {/* <Name>{name}</Name> */}

                {/* <BtnWrap>
                  {showButton && (
                    <ToggleBtn
                      onClick={() => setShown(true)}
                      title={name + "'s Story"}
                      background="linear-gradient(45deg, #7AAEEA 10%, #49688C 90%)"
                      boxShadow="none"
                    />
                  )}
                  {!showButton && (
                    <ToggleBtn
                      onClick={() => setShown(false)}
                      title="Hide Story"
                      // marginTop="20px"
                      boxShadow="0 3px 5px 2px rgba(255, 105, 135, .3)"
                      background="linear-gradient(49deg, rgba(240,118,102,1) 0%, rgba(232,128,115,1) 49%, rgba(224,147,137,1) 81%, rgba(226,188,184,1) 100%)"
                    />
                  )}
                </BtnWrap> */}
                <CSSTransition
                  in={isShown}
                  timeout={500}
                  classNames="show"
                  unmountOnExit
                  onEnter={() => setShowButton(false)}
                  onExited={() => setShowButton(true)}
                >
                  <MobileStory
                    darkText={darkText}
                    dismissible
                    variant="primary"
                  >
                    {story}
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
            <Column2 imgStart={imgStart}>
              <ImgWrap>
                <Play>
                  <FontAwesomeIcon
                    className="iconBtn"
                    onClick={() => onOpen({ video })}
                    icon={faPlayCircle}
                    size="5x"
                  />
                </Play>
                <Img src={img} alt={alt} />
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
  );
};
export default Testimonial;
