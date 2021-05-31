import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'black')};
  height: 12vh;
  margin-top: -12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 450px) {
    height: 10vh;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  height: 100%;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`

export const BannerContainer = styled.div`
  width: 450px;
  height: 100%;
  top: 0;
  right: 0;
  left: 0%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;

  @media screen and (max-width: 450px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 460px) {
    width: 330px;
  }
  @media screen and (max-width: 350px) {
    width: 300px;
    margin: 0;
  }
  @media screen and (max-width: 300px) {
    width: 270px;
    margin: 0;
  }
  @media screen and (max-width: 280px) {
    display: none;
  }
`

export const BannerLink = styled(LinkS)`
  cursor: pointer;
  height: 100%;
  z-index: 2;
`

export const BannerPic = styled.img`
  height: 100%;
  width: 100%;
`

export const MobileIcon = styled.div`
  z-index: 3;
  display: none;

  @media screen and (max-width: 1350px) {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    height: 100%;
    top: 0;
    right: 10px;
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 280px) {
    width: 100%;
    ${'' /* display: none; */}
  }
`
export const NavMenuLeft = styled.ul`
  display: flex;
  width: 50%;
  height: 100%;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 50px;
  padding-left: 0;
  margin: 0;

  @media screen and (max-width: 1350px) {
    display: none;
  }
`
export const NavMenuRight = styled.ul`
  display: flex;
  list-style: none;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 50px;
  margin: 0;

  @media screen and (max-width: 1350px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 10vh;
  padding: 0 20px 0 10px;
  text-align: center;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;

  &.active {
    color: #7aaeea;
    ${'' /* border-bottom: 3px solid #7aaeea; */}
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #bcf97f;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  ${'' /* text-transform: uppercase; */}
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
