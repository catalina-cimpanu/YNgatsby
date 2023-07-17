import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LegalLinksArray from "../../constants/legalLinks";

const FooterLegalLinks = () => {
  return (
    <LegalList>
      {LegalLinksArray.map((legalLink) => {
        const { id, url, text } = legalLink;
        return (
          <li key={id}>
            <LegalLink to={url}>{text}</LegalLink>
          </li>
        );
      })}
    </LegalList>
  );
};

// .legal-links
const LegalList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
// .legal-link
const LegalLink = styled(Link)`
  justify-self: center;
  display: block;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.navLinkText};
  border-radius: ${(props) => props.theme.radiusL};
  transition: ${(props) => props.theme.transition};
  padding: 0.25rem 0.5rem;
  :hover {
    ${"" /* color: ${props => props.theme.colors.H1H2}; */}
    background-color: ${(props) => props.theme.colors.surface2};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
  }
`;

export default FooterLegalLinks;
