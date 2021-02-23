import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

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
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
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
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Program
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="personal"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Personal
                </NavLinks>
              </NavItem> */}
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
              <NavBtn>
                <NavBtnLink>Apply Here</NavBtnLink>
              </NavBtn>
            </NavMenuRight>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
