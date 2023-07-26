import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/Provider";

const LibraryContents = ({ links, title }) => {
  const { closePageContents, activeLink, setActiveLink } =
    React.useContext(ThemeContext);
  return (
    <Details open>
      <summary className="summary-title">{title}</summary>
      <ul>
        {links.map((link, index) => {
          const {
            contents_link: { link_text, link_url },
          } = link;
          return (
            <li>
              <button
                className="button"
                aria-label={`go to section ${link_text}`}
                onClick={closePageContents}
              >
                <Link
                  key={index}
                  to={`#${link_url}`}
                  onClick={() => {
                    setActiveLink(link_url);
                  }}
                  className={activeLink === link_url ? "active link" : "link"}
                >
                  {link_text}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </Details>
  );
};

const Details = styled.details`
  .summary-title {
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.H3toH6};
    letter-spacing: ${(props) => props.theme.spacing};
    text-transform: capitalize;
    line-height: 1.25;
    &:focus {
      outline: none;
    }
  }

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

export default LibraryContents;
