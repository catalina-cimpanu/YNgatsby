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
            <Link className="legal-link" to={"/legal" + url}>
              {text}
            </Link>
          </li>
        );
      })}
    </LegalList>
  );
};

const LegalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .legal-link {
    display: block;
    justify-self: center;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.navLinkText};
    border-radius: ${(props) => props.theme.radiusL};
    transition: ${(props) => props.theme.transition};
    &:hover {
      background-color: ${(props) => props.theme.colors.surface2};
      box-shadow: ${(props) => props.theme.elevations.elevation3};
    }
  }
`;

export default FooterLegalLinks;
