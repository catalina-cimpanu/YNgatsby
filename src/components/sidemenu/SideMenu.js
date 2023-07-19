import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import LogoSvg from "../../images/logo.inline.svg";
import RoundIconButton from "../buttons/RoundIconButton";
import { FaTimes } from "react-icons/fa";
import SideMenuLinks from "./SideMenuLinks";
import SocialLinks from "./SideMenuSocialLinks";

const SideMenu = () => {
  const { isOpen, toggleSideMenu } = useContext(ThemeContext);
  return (
    <AsideNavbar isOpen={isOpen}>
      <button
        className="close-button"
        aria-label="close side menu"
        onClick={toggleSideMenu}
      >
        <FaTimes />
      </button>

      <div className="logo-container" onClick={toggleSideMenu}>
        <Link to="/" aria-label="link to homepage">
          <LogoSvg />
        </Link>
      </div>

      <SideMenuLinks />

      <div className="icon-container">
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
      </div>

      <SocialLinks styleClass={`${isOpen ? "sidemenu-icons" : ""}`} />
    </AsideNavbar>
  );
};

const AsideNavbar = styled.aside`
  background: ${(props) => props.theme.colors.surface1};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.3s; /* i've tested! 0.3 or 0.4 are good!! */
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  @media screen and (min-width: 900px) {
    transform: translateX(-100%);
  }
  display: grid;
  justify-content: center;
  align-content: space-evenly;
  .logo-container {
    padding: 0 1rem;
  }
  .icon-container {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
  }
  .close-button {
    position: absolute;
    right: 1%;
    top: 1%;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.colors.H1H2};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transform: scale(1.1);
    }
  }
`;

export default SideMenu;
