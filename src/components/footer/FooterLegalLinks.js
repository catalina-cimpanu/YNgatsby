import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const FooterLegalLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiLegalPage(sort: { order: ASC }) {
        nodes {
          page_menutext
          page_slug
        }
      }
    }
  `);
  const {
    allStrapiLegalPage: { nodes: legalLinks },
  } = data;

  return (
    <LegalList>
      {legalLinks.map((legalLink, index) => {
        const { page_menutext, page_slug } = legalLink;
        return (
          <li key={index}>
            <Link className="legal-link" to={"/legal/" + page_slug}>
              {page_menutext}
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
