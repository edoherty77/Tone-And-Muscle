import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
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
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Apply Here</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
