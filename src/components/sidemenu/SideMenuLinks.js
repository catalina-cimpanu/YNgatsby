import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import MenuLinksArray from "../../constants/menuLinks";

const SideMenuLinks = () => {
  const { closeSideMenu } = React.useContext(ThemeContext);

  return (
    <SideMenuList>
      {MenuLinksArray.map((menuLink) => {
        const { id, url, text } = menuLink;
        return (
          <li key={id} onClick={closeSideMenu}>
            <Link
              className="nav-link"
              aria-label={`link for page: ${text}`}
              to={url}
              activeClassName="active"
            >
              {text}
            </Link>
          </li>
        );
      })}
    </SideMenuList>
  );
};

const SideMenuList = styled.ul`
  display: grid;
  place-items: center;
  .nav-link {
    display: block;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.primary};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.navLinkText};
    letter-spacing: ${(props) => props.theme.spacing};
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    margin: 0.1rem 0.2rem;
    transition: ${(props) => props.theme.transition};
    @media screen and (min-height: 500px) {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      margin: 0.3rem 0.2rem;
    }
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
`;

export default SideMenuLinks;
