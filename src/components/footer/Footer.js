import React from "react";
import styled from "styled-components";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLegalLinks from "./FooterLegalLinks";

const Footer = () => {
  return (
    <StyledFooter>
      <Div>
        <FooterSocialLinks styleClass="footer-links-s" />
        <StyledH4>
          &copy; {new Date().getFullYear()}
          <Span> Young Neuros</Span> Made by Catalina
        </StyledH4>
        <FooterLegalLinks />
      </Div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 16rem;
  z-index: 1;
  @media screen and (min-width: 275px) {
    height: 13rem;
  }
  @media screen and (min-width: 442px) {
    height: 12rem;
  }
  background: ${(props) => props.theme.colors.surface1};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  display: grid;
  place-items: center;
  align-self: end;
`;
const Div = styled.div`
  width: 100vw;
  padding: 0 8%;
`;
const StyledH4 = styled.h4`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.H3toH6};
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;
const Span = styled.span`
  font-weight: bold;
`;

export default Footer;
