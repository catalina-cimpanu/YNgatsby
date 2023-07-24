import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const RichTextBody = styled.div`
  * {
    word-break: break-word;
  }

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
  }
  p {
    display: inline;
    word-break: break-word;
  }
  h4,
  h5,
  h6 {
    margin: 1rem 0 0.5rem 0;
    :first-of-type {
      margin-top: 0;
    }
  }
  li {
    margin-left: 0.5rem;
  }
  ul {
    list-style-type: circle;
    list-style-position: inside;
    color: ${(props) => props.theme.colors.p};
  }
  a,
  ul a {
    display: inline;
    position: relative;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    padding: 0 0.4rem;
    color: ${(props) => props.theme.colors.aText};
    box-shadow: ${(props) => props.theme.shadows.linkShadow};
    :hover {
      background: ${(props) => props.theme.colors.aHoverBg};
      box-shadow: ${(props) => props.theme.elevations.elevation5};
      color: ${(props) => props.theme.colors.selectionText};
    }
    :active {
      position: relative;
      background-color: ${(props) => props.theme.colors.aActiveBg};
      box-shadow: ${(props) => props.theme.elevations.elevation5};
      color: ${(props) => props.theme.colors.selectionText};
    }
    :hover::after {
      opacity: 0.2;
    }
  }
  blockquote,
  q {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.p};
    font-style: oblique;
    font-size: 1.5rem;
    margin: 2rem 0;
    ::before {
      content: "";
      height: 5rem;
      background-color: ${(props) => props.theme.colors.aActiveBg};
      display: grid;
      width: 0.5rem;
      margin-right: 1rem;
      border-radius: ${(props) => props.theme.radiusL};
    }
  }
`;

const RichText = ({ content }) => {
  return (
    <RichTextBody>
      <ReactMarkdown children={content} />
    </RichTextBody>
  );
};

export default RichText;
