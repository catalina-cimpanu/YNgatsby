import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/Provider";

const ContentsSummary = ({ summary_title, subskill, sub }) => {
  const { closePageContents, activeLink, setActiveLink } =
    React.useContext(ThemeContext);
  const link = subskill ? `#${summary_title + subskill}` : `#${summary_title}`;
  return (
    <Summary sub={sub} onClick={closePageContents}>
      <Link
        to={link}
        onClick={() => {
          setActiveLink(link);
        }}
        className={activeLink === link ? "active link" : "link"}
      >
        {summary_title}
      </Link>
    </Summary>
  );
};

const Summary = styled.summary`
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  font-size: ${(props) => (props.sub ? "0.8rem" : "1.2rem")};
  margin-left: ${(props) => props.sub && "1rem"};
  color: ${(props) => props.theme.colors.H3toH6};
  letter-spacing: ${(props) => props.theme.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  &:focus {
    outline: none;
  }

  .link {
    color: ${(props) => props.theme.colors.navLinkText};
    font-family: ${(props) => props.theme.fonts.primary};
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
      /* background-color: ${(props) => props.theme.colors.aBg}; */
      &::before {
        content: " ";
        border-left: 3px solid ${(props) => props.theme.colors.primary};
        margin-right: 0.2rem;
      }
    }
  }
`;
export default ContentsSummary;
