import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import LogoSvg from "../../images/logo.inline.svg";
import ToggleThemeButton from "./ToggleThemeButton";
import RoundIconButton from "../buttons/RoundIconButton";
import SideMenuButton from "../sidemenu/SideMenuButton";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiMenuLink(sort: { order: ASC }) {
        nodes {
          menulink_title
          menulink_slug
        }
      }
    }
  `);
  const {
    allStrapiMenuLink: { nodes: links },
  } = data;
  return (
    <NavBar>
      <Link className="logo-link" aria-label="link to homepage" to="/">
        <LogoSvg className="logo-svg" />
      </Link>
      <SideMenuButton aria-label="sidemenu button" />
      <ul className="menu-list">
        {links.map((menuLink, index) => {
          const { menulink_title, menulink_slug } = menuLink;
          return (
            <Link
              key={index}
              className="nav-link"
              aria-label={`link for page: ${menulink_title}`}
              to={`/${menulink_slug ? menulink_slug : ""}`}
              activeClassName="active"
            >
              {menulink_title}
            </Link>
          );
        })}
      </ul>
      <div className="all-icons-container">
        <div className="round-icons-container">
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
        </div>
        <div clasName="toggle-theme-button">
          <ToggleThemeButton />
        </div>
      </div>
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
  grid-template-columns: 8% 15% auto auto 8%;
  -ms-grid-columns: 8% 15% auto minmax(15%, max-content) 8%;
  @media screen and (max-width: 900px) {
    grid-template-columns: 8% 15% auto minmax(25px, max-content) 8%;
    -ms-grid-columns: 8% 15% auto minmax(25px, max-content) 8%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 8% 1fr 1fr minmax(25px, max-content) 8%;
    -ms-grid-columns: 8% 1fr 1fr minmax(25px, max-content) 8%;
  }
  .logo-link {
    grid-column: 2 / 3;
    display: flex;
    align-content: center;
    justify-content: left;
  }
  .logo-svg {
    align-self: center;
    justify-self: left;
    height: 90%;
  }
  .menu-list {
    list-style: none;
    list-style-type: none;
    display: none;
    @media screen and (min-width: 900px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      grid-column: 3 / 4;
    }
  }
  .nav-link {
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1rem;
    line-height: 1;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.navLinkText};
    letter-spacing: ${(props) => props.theme.spacing};
    transition: ${(props) => props.theme.transition};
    padding: 0.6rem 0.6rem;
    &:hover {
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
  }
  .all-icons-container {
    min-width: min-content;
    display: grid;
    grid-template-columns: 85% 15%;
    align-content: center;
    justify-items: end;
  }
  .round-icons-container {
    min-width: min-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5vw;
    align-content: center;
    justify-items: end;
    margin-right: 5px;
  }
  .toggle-theme-button {
    min-width: min-content;
  }
`;

export default Navbar;
