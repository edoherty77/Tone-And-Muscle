import React from "react";
import {
  MainContainer,
  SliderContainer,
  Left,
  Right,
  Icon,
  Bottom,
  ContentContainer,
} from "./PainElements";

const PainSection = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <SliderContainer>
          <Left>Not sure what to do in order to get your weight down?</Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <SliderContainer>
          <Left>Tired of feeling guilty about eating certain foods?</Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <SliderContainer>
          <Left>
            Do you want to find a sustainable training routine that you can take
            with you for the rest of your life?
          </Left>
          <Right>
            <Icon />
          </Right>
        </SliderContainer>
        <Bottom>Well, you’ve come to the right place.</Bottom>
      </ContentContainer>
    </MainContainer>
  );
};

export default PainSection;
