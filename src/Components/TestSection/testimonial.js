import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Player from "../Player";

import "../../Styles/styles.css";
import {
  TestContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Story,
  ImgWrap,
  Play,
  Img,
} from "./TestElements";

const Testimonial = ({
  story,
  video,
  img,
  alt,
  darkText,
  lightBg,
  imgStart,
}) => {
  //State for modal
  const [isOpen, setOpen] = useState(false);
  const [renderIcon, setRenderIcon] = useState(true);

  const showVideo = (message) => {
    setOpen(!isOpen);
    if (message === "") {
      setRenderIcon(false);
    } else {
      setInterval(() => {
        setRenderIcon(true);
      }, 500);
    }
  };

  return (
    <>
      <TestContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              <TextWrapper imgStart={imgStart}>
                <Story darkText={darkText} imgStart={imgStart}>
                  {story}
                </Story>
              </TextWrapper>
            </Column1>
            <Column2 imgStart={imgStart}>
              <ImgWrap>
                {isOpen ? (
                  <Player
                    open={isOpen}
                    onClose={() => showVideo("showIcon")}
                    onPause={() => showVideo("showIcon")}
                    url={video}
                  />
                ) : (
                  <>
                    {renderIcon ? (
                      <Play>
                        <FontAwesomeIcon
                          className="iconBtn"
                          onClick={() => showVideo("")}
                          icon={faPlayCircle}
                          size="5x"
                        />
                      </Play>
                    ) : null}
                    <Img src={img} alt={alt} />
                  </>
                )}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </TestContainer>
    </>
  );
};
export default Testimonial;
