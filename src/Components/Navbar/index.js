import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

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
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    // if (window.scrollY >= 100) {
    //   setScrollNav(true)
    // } else {
    //   setScrollNav(false)
    // }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    // return () => {
    //   window.removeEventListener('scroll', changeNav)
    // }
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
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
                  to="bio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Me
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
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact Me
                </NavLinks>
              </NavItem>
            </NavMenuRight>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
