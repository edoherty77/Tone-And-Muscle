import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ApplyContainer,
  ApplyBtn,
  ApplyBtnLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            The Program
          </SidebarLink>
          <SidebarLink
            to="bio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Pat
          </SidebarLink>
          <SidebarLink
            to="testies"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Success Stories
          </SidebarLink>
          <ApplyContainer>
            <ApplyBtn>
              <ApplyBtnLink
                to="form"
                smooth={true}
                onClick={toggle}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Apply Here
              </ApplyBtnLink>
            </ApplyBtn>
          </ApplyContainer>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
