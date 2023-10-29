import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import { Link } from "gatsby";

const ContentsSingleLink = ({ link_text, link_url, sub, pureLinks }) => {
  const { closePageContents, activeLink, setActiveLink } =
    React.useContext(ThemeContext);
  return (
    <Li sub={sub}>
      <button
        className="button"
        aria-label={`go to section ${link_text}`}
        onClick={closePageContents}
      >
        <Link
          to={pureLinks ? `#${link_url}_links` : `#${link_url}`}
          onClick={() => {
            setActiveLink(link_url);
          }}
          className={activeLink === link_url ? " active link" : "link"}
        >
          {link_text}
        </Link>
      </button>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  margin-left: ${(props) => (props.sub ? "2rem" : "1rem")};

  .button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
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

export default ContentsSingleLink;
