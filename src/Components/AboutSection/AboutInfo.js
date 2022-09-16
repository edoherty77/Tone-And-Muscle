import React from "react";
import "../../Styles/styles.css";
import { TextContainer, InfoHeader, InfoText } from "./AboutElements";

const AboutInfo = () => {
  return (
    <>
      <TextContainer>
        <InfoHeader>Customized Training Routines</InfoHeader>
        <InfoText>
          We work with what you have, period. Whether you want to start in the
          comfort of your own living room, use the apartment gym, or start your
          routine with all the equipment that your local gym offers, we got you.
          We'll take into account your goals, limitations and alter your
          training routine on a monthly basis.
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoHeader>Flexible Nutrition + Course</InfoHeader>
        <InfoText>
          Whether it's meal plans, tracking, or intuitive eating we'll discuss
          together what is the best route for you. We will also teach you along
          the way about food choices so there's never any more questions about
          what you need to put in your body to look and feel your best.
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoHeader>Community Calls + FB Group</InfoHeader>
        <InfoText>
          Being part of a crew that is on the same journey as you is invaluable.
          You will not only be able to see what is working for others, but have
          the opportunity to be guides for those that come after you. It's
          another level of accountability and motivation that you won't find in
          your local gym or diet plan.
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoHeader>1 on 1 Accountability Coaching</InfoHeader>
        <InfoText>
          The most valuable aspect of the program is what will ultimately help
          you stay focused on your goals despite what life throws at you. We
          offer 24/7 text and video message support throughout the week plus 1
          on 1 monthly reviews, where we compile data such as your weight,
          training completion percentage, photos, and measurements and go over
          next month's game plan to help you stay focused on your goals.
        </InfoText>
      </TextContainer>
    </>
  );
};

export default AboutInfo;
