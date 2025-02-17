import React, { useState } from "react";
import colors from "../../config/colors";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Player from "../Player";

import {
  MainContainer,
  InfoContainer,
  InfoHeader,
  MobileHeader,
  InfoText,
  InfoCTA,
  InfoTextName,
  ImgWrap,
  Img,
  Play,
  VideoContainer,
  IconsContainer,
  IconLink,
} from "./BioElements";

const BioSection = () => {
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
    <MainContainer id="bio">
      <InfoContainer>
        <InfoHeader><a href="https://www.toneandmuscle.com" style={{textDecoration: 'none', color: "white"}}>Tone & Muscle</a></InfoHeader>
        <MobileHeader>Pat Doherty</MobileHeader>
        <InfoTextName>Pat Doherty | Owner</InfoTextName>
        <InfoText>Certified Strength and Conditioning Specialist</InfoText>
        <InfoText>Certified Pilates Instructor</InfoText>
        <IconsContainer>
          <IconLink
            href="https://www.facebook.com/groups/ToneandMuscleCommunity"
            target="_blank"
          >
            <FacebookIcon style={{ color: colors.primary, fontSize: 40 }} />
          </IconLink>
        </IconsContainer>
      </InfoContainer>
      {/* <VideoContainer>
        <ImgWrap>
          {isOpen ? (
            <Player
              open={isOpen}
              url={"videos/about-me.mp4"}
              onClose={() => showVideo("showIcon")}
              onPause={() => showVideo("showIcon")}
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
              <Img src="/images/pat-photo3.jpeg" />
            </>
          )}
        </ImgWrap>
      </VideoContainer> */}
    </MainContainer>
  );
};

export default BioSection;
