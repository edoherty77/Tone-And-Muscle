import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "95%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  background: transparent;
  border: transparent;
  outline: none;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  height: 14vh;
  top: 0;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #bcf97f;
    transition: 0.2s ease-in-out;
  }
`;

export const ApplyContainer = styled.div`
  margin: 40px 0 60px;

  @media screen and (max-width: 480px) {
    margin: 40px 0 0;
  }
`;

export const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: center;

  @media screen and (max-width: 890px) {
    padding-top: 5px;
  }
`;

export const ApplyBtnLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  border-radius: 50px;
  background: #bcf97f;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
