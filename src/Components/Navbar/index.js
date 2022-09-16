import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  BannerPic,
  BannerContainer,
  BannerLink,
  NavMenuLeft,
  NavMenuRight,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <BannerLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <BannerContainer>
                <BannerPic src="images/tma-banner.png" alt="banner" />
              </BannerContainer>
            </BannerLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenuLeft>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  The Program
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="form"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Apply
                </NavLinks>
              </NavItem>
            </NavMenuLeft>
            <NavMenuRight>
              <NavItem>
                <NavLinks
                  to="testies"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Success Stories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="bio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Pat
                </NavLinks>
              </NavItem>
            </NavMenuRight>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
