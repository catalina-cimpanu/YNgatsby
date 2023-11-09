import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import { navigate } from "gatsby";

const ContentsSingleLink = ({
  link_text,
  link_url,
  sub,
  pureLinks,
  inSummary,
}) => {
  const { closePageContents, activeLink, setActiveLink } =
    React.useContext(ThemeContext);
  const link = pureLinks ? `#${link_url}_links` : `#${link_url}`;
  return (
    <SingleLink
      sub={sub}
      inSummary={inSummary}
      aria-label={`go to section ${link_text}`}
      className={activeLink === link ? "active" : ""}
      onClick={(e) => {
        closePageContents(e);
        setActiveLink(link);
        navigate(link);
      }}
    >
      {link_text}
    </SingleLink>
  );
};

const SingleLink = styled.span`
  cursor: pointer;
  display: ${(props) => (props.inSummary ? "" : "block")};
  list-style: none;
  margin-left: ${(props) =>
    props.inSummary ? "0.2rem" : props.sub ? "2rem" : "1.5rem"};
  color: ${(props) => props.theme.colors.navLinkText};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.inSummary && "600"};
  font-size: 1rem;
  white-space: pre;

  &:hover {
    &::before {
      content: " ";
      border-left: 3px solid ${(props) => props.theme.colors.primary};
      margin-right: 0.2rem;
    }
  }
  &.active {
    color: ${(props) => props.theme.colors.aText};
    background-color: ${(props) => props.theme.colors.aBg};
    &::before {
      content: " ";
      border-left: 3px solid ${(props) => props.theme.colors.primary};
      margin-right: 0.2rem;
    }
  }
`;

export default ContentsSingleLink;
