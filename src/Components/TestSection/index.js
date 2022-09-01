import React from "react";
import "../../Styles/styles.css";
import Testimonial from "./testimonial";
import { schena, poplaski, bujacich, ward, tim, eric, rob } from "./Data";
import {
  Div,
  Header,
  MobileHeader,
  HeaderContainer,
  ApplyBtn,
  ApplyBtnLink,
  ApplyContainer,
} from "./TestElements";

const TestSection = ({ id, lightBg }) => {
  return (
    <>
      <Div id="testies">
        <HeaderContainer>
          <Header>Student Stories/interviews</Header>
          <MobileHeader>Student Stories & interviews</MobileHeader>
        </HeaderContainer>
        <Testimonial {...schena} />
        <Testimonial {...poplaski} />
        <Testimonial {...bujacich} />
        <Testimonial {...tim} />
        <Testimonial {...eric} />
        <Testimonial {...rob} />
        <Testimonial {...ward} />
        <ApplyContainer>
          <ApplyBtn>
            <ApplyBtnLink
              to="form"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Apply Here
            </ApplyBtnLink>
          </ApplyBtn>
        </ApplyContainer>
      </Div>
    </>
  );
};

export default TestSection;
