import React from "react";
import styled from "styled-components";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLegalLinks from "./FooterLegalLinks";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSocialLinks styleClass="footer-links-s" />
      <h4>
        &copy; {new Date().getFullYear()}
        <span> Young Neuros</span> Made by Catalina
      </h4>
      <FooterLegalLinks />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  padding: 1.5rem 8%;
  background: ${(props) => props.theme.colors.surface1};
  box-shadow: ${(props) => props.theme.elevations.elevation5};
  align-self: end;
  display: grid;
  grid-row-gap: 1rem;
  /*padding and row gap same */
  justify-content: center;
  align-content: space-evenly;
  h4 {
    color: ${(props) => props.theme.colors.H3toH6};
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
  }
  span {
    font-weight: bold;
  }
`;

export default Footer;
