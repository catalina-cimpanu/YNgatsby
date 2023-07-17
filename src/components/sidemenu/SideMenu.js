import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import logo from "../../images/logo.svg";
import SideMenuLinks from "./SideMenuLinks";
import RoundIconButton from "../buttons/RoundIconButton";
import SocialLinks from "./SideMenuSocialLinks";
import { FaTimes } from "react-icons/fa";

const SideMenu = () => {
  const { isOpen, toggleSideMenu } = useContext(ThemeContext);
  return (
    <AsideNavbar isOpen={isOpen}>
      <CloseButton aria-label="close side menu" onClick={toggleSideMenu}>
        <FaTimes />
      </CloseButton>
      <LogoLink aria-label="link to homepage" to="/">
        <Logo src={logo} alt="logo" />
      </LogoLink>
      <Div>
        <SideMenuLinks />
        <IconContainer>
          <RoundIconButton
            aria-label="community"
            buttonIcon="community"
            buttonLink="https://community.youngneuros.com/"
            isOpen
          />
          <RoundIconButton
            aria-label="community"
            buttonIcon="calendar"
            buttonLink="/calendar"
            isOpen
          />
        </IconContainer>
        <SocialLinks styleClass={`${isOpen ? "sidemenu-icons" : ""}`} />
      </Div>
    </AsideNavbar>
  );
};

const AsideNavbar = styled.aside`
  background: ${(props) => props.theme.colors.surface1};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 160px;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 1;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.3s; /* i've tested! 0.3 or 0.4 are good!! */
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  @media screen and (min-width: 900px) {
    transform: translateX(-100%);
  }
`;
const CloseButton = styled.button`
  position: absolute;
  right: 1%;
  top: 1%;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${(props) => props.theme.colors.H1H2};
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.1);
  }
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
const LogoLink = styled(Link)`
  position: absolute;
  top: 5%;
  height: 6rem;
  width: 6rem;
  @media screen and (min-width: 600px) {
    height: 8rem;
    width: 8rem;
  }
  @media screen and (min-width: 900px) {
    height: 10rem;
    width: 10rem;
  }
  display: flex;
  place-items: center;
  border-radius: ${(props) => props.theme.radiusL};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  -webkit-box-shadow: ${(props) => props.theme.elevations.elevation3};
  background-color: ${(props) => props.theme.colors.surface2};
`;
const Div = styled.div`
  position: absolute;
  top: 30%;
  margin-top: 5%;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  @media screen and (max-width: 900px) {
    justify-content: space-evenly;
  }
  @media screen and (min-height: 350px) {
    margin: 1rem auto 0 auto;
  }
  @media screen and (min-height: 400px) {
    margin: 1.5rem auto 0 auto;
  }
  @media screen and (min-height: 450px) {
    margin: 2rem auto 0 auto;
  }
  @media screen and (min-height: 500px) {
    margin: 1rem auto 0 auto;
    /*smaller because at the same breakpoint, the menu that is on top of it grows */
  }
  @media screen and (min-height: 600px) {
    margin: 3rem auto 0 auto;
  }
  @media screen and (min-height: 750px) {
    margin: 4.5rem auto 0 auto;
  }
  @media screen and (min-height: 800px) {
    margin: 5rem auto 0 auto;
  }
`;

export default SideMenu;
