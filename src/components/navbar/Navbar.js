import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import MenuLinksArray from "../../constants/menuLinks";
import ToggleThemeButton from "./ToggleThemeButton";
import RoundIconButton from "./RoundIconButton";

const Navbar = () => {
  return (
    <NavBar>
      <LogoLink aria-label="link to homepage" to="/">
        <Logo src={logo} alt="Young Neuros logo" />
      </LogoLink>
      <MenuList>
        {MenuLinksArray.map((menuLink) => {
          const { id, url, text } = menuLink;
          return (
            <NavLink
              key={id}
              aria-label={`link for page: ${text}`}
              to={url}
              activeClassName="active"
            >
              {text}
            </NavLink>
          );
        })}
      </MenuList>
      <IconContainer>
        <RoundIconButton
          aria-label="community"
          buttonIcon="community"
          buttonLink="https://community.youngneuros.com/"
        />
        <RoundIconButton
          aria-label="calendar"
          buttonIcon="calendar"
          buttonLink="/calendar"
        />
        <ToggleThemeButton />
      </IconContainer>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  z-index: 200;
  background: ${(props) => props.theme.colors.surface1};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  display: grid;
  display: -ms-grid;
  align-content: center;
  grid-template-rows: 75%;
  grid-template-columns: 8% 15% auto minmax(15%, max-content) 8%;
  -ms-grid-columns: 8% 15% auto minmax(15%, max-content) 8%;
  @media screen and (max-width: 900px) {
    grid-template-columns: 8% 15% auto minmax(25px, max-content) 8%;
    -ms-grid-columns: 8% 15% auto minmax(25px, max-content) 8%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 8% 1fr 1fr minmax(25px, max-content) 8%;
    -ms-grid-columns: 8% 1fr 1fr minmax(25px, max-content) 8%;
  }
`;

const LogoLink = styled(Link)`
  grid-column: 2 / 3;
  display: flex;
  align-content: center;
  justify-content: left;
`;

const Logo = styled.img`
  align-self: center;
  justify-self: left;
  height: 90%;
`;

// nav-links
const MenuList = styled.ul`
  /* list-style: none;
  list-style-type: none;
  display: none; */
  /* @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column: 3 / 4;
  } */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 3 / 4;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.navLinkText};
  letter-spacing: ${(props) => props.theme.spacing};
  transition: ${(props) => props.theme.transition};
  padding: 0.6rem 0.6rem;
  :hover {
    border-radius: ${(props) => props.theme.radiusL};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    -webkit-box-shadow: ${(props) => props.theme.elevations.elevation3};
    background-color: ${(props) => props.theme.colors.surface2};
  }
  &.active {
    border-radius: ${(props) => props.theme.radiusL};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    -webkit-box-shadow: ${(props) => props.theme.elevations.elevation3};
    background-color: ${(props) => props.theme.colors.surface2};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-items: flex-end;
`;

export default Navbar;
