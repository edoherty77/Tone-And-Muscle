import React from "react";
import colors from "../../config/colors";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ResponsivePlayer from "../ResponsivePlayer";

import {
  MainContainer,
  MobileHeader,
  InfoContainer,
  InfoHeader,
  InfoText,
  IconsContainer,
  IconLink,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <MainContainer id="bio">
      {/* <MobileHeader>Contact Me</MobileHeader> */}
      <InfoContainer>
        <InfoHeader>Tone & Muscle</InfoHeader>
        <InfoText style={{ fontSize: 18, fontWeight: 600 }}>
          Pat Doherty | Owner
        </InfoText>
        <InfoText>Certified Strength and Conditioning Specialist</InfoText>
        <InfoText>Certified Pilates Instructor</InfoText>
        <InfoText>Certified 8 and a Half Inch Hammer Cock</InfoText>
        <IconsContainer>
          <IconLink
            href="https://www.instagram.com/yogamatpat/"
            target="_blank"
          >
            <InstagramIcon style={{ color: colors.primary, fontSize: 40 }} />
          </IconLink>
          <IconLink
            href="https://www.facebook.com/profile.php?id=100007385869431"
            target="_blank"
          >
            <FacebookIcon style={{ color: colors.primary, fontSize: 40 }} />
          </IconLink>
        </IconsContainer>
      </InfoContainer>
    </MainContainer>
  );
};

export default ContactSection;
