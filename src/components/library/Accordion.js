// Note: I can't recall how come I didn't use state and did some CSS Accordion..
// I kept the styled components and not classes, like in the other components.
// (mainly cuz it works fine and i was too lazy to redo it)
import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import ExternalLink from "./ExternalLink";

const Accordion = ({
  info: {
    title,
    source,
    body: {
      data: {
        childMarkdownRemark: { html },
      },
    },
    image: {
      alternativeText,
      localFile: { extension, publicURL, childImageSharp },
    },
    note: {
      data: {
        childMarkdownRemark: { html: note_html },
      },
    },
    internal_link,
    external_link,
    pricing,
    language: {
      language_name,
      language_emoji,
      language_flag: {
        localFile: { flag_extension, flag_publicURL, flag_childImageSharp },
      },
    },
  },
}) => {
  return (
    <Info>
      <Input type="checkbox" id={internal_link.link_url} />
      <Label for={internal_link.link_url}>
        {!childImageSharp && extension === "svg" ? (
          <div className="img-container">
            <img className="img" src={publicURL} alt={alternativeText} />
          </div>
        ) : (
          <GatsbyImage
            className="img-container"
            imgClassName="img"
            image={childImageSharp.gatsbyImageData}
            alt={alternativeText}
          />
        )}
        <h4 className="title">{title}</h4>
        <span className="arrow">‣</span>
        {/* <span className="language">{language_emoji}</span> */}
        {!flag_childImageSharp && flag_extension === "svg" ? (
          <div className="flag-img-container">
            <img
              className="flag-img"
              src={flag_publicURL}
              alt={language_name}
            />
          </div>
        ) : (
          <GatsbyImage
            className="flag-img-container"
            // imgClassName="img"
            image={flag_childImageSharp.gatsbyImageData}
            alt={language_name}
          />
        )}
      </Label>
      <Content>
        <div className="info-body" dangerouslySetInnerHTML={{ __html: html }} />

        <ExternalLink
          text={external_link.link_text}
          url={external_link.link_url}
        />

        <div className="separator" />

        <sub className="source footnote">Source</sub>
        <sub className="source_detail footnote">{source}</sub>
        <sub className="note footnote">Note</sub>
        <sub
          className="note_detail footnote"
          dangerouslySetInnerHTML={{ __html: note_html }}
        />
      </Content>
    </Info>
  );
};

const Info = styled.article`
  display: block;
  width: 100%;
  /* background-color: ${(props) => props.theme.colors.surface1}; */
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  border-radius: ${(props) => props.theme.radiusS};
  overflow: hidden;
`;

/* Input */
const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  /* @media screen and (min-width: 900px) {
    scroll-margin: 5.5rem 0 0 0;
    scroll-snap-margin: 5.5rem 0 0 0;
    scroll-snap-margin-top: 5.5rem;
  }
  @media screen and (max-width: 900px) {
    padding-top: 5.5rem;
    margin-top: -5.5rem;
  } */
`;

/* Label */
const Label = styled.label`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.surface2};
  display: grid;
  grid-template-areas: "logo title language arrow";
  grid-template-columns: 20% auto 8% 5%;
  @media screen and (min-width: 550px) {
    grid-template-columns: 15% auto 5% 5%;
  }

  .img {
    object-fit: contain !important;
    padding: 0 0.1rem;
    /* cuz otherwise freaking gatsby overrides this */
  }

  .img-container {
    grid-area: logo;
    align-self: center;
    justify-self: center;
    height: 80%;
    width: 90%;
    background-color: ${(props) => props.theme.colors.miniFeatureBG};
    border-radius: ${(props) => props.theme.radiusXS};
  }

  .flag-img {
    background-color: ${(props) => props.theme.colors.miniFeatureBG};
    border-radius: ${(props) => props.theme.radiusXS};
    height: 50%;
    @media screen and (min-width: 550px) {
      height: 60%;
    }
  }

  .flag-img-container {
    grid-area: language;
    align-self: center;
    justify-self: center;
    display: grid;
    place-items: center;
  }

  .title {
    grid-area: title;
    align-self: center;
    padding: 0.5rem;
  }

  .language {
    grid-area: language;
    align-self: center;
    justify-self: center;
  }
  .arrow {
    grid-area: arrow;
    align-self: center;
    justify-self: center;
    color: ${(props) => props.theme.colors.H3toH6};
    font-size: clamp(2rem, 4vw, 3rem);
    /* font-size: 3rem; */
    line-height: 1;
    margin-bottom: -5px;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
  }

  ${Input}:checked + & {
    .arrow {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`;

/* Tab Content */
const Content = styled.div`
  max-height: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  /* background-color: lightcoral; */
  /* background-color: ${(props) => props.theme.colors.surface1}; */
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  ${Input}:checked ~ & {
    max-height: max-content;
    display: grid;
    grid-template-columns: 15% auto;
    grid-template-areas:
      "body body"
      "ext_link ext_link"
      "divider divider"
      "source source_detail"
      "note note_detail";
    grid-row-gap: 1rem;
    padding: 1rem;
  }

  .info-body {
    grid-area: body;
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
      &:first-of-type {
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
    a {
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
      &:hover {
        background: ${(props) => props.theme.colors.aHoverBg};
        box-shadow: ${(props) => props.theme.elevations.elevation5};
        color: ${(props) => props.theme.colors.selectionText};
      }
      &:active {
        position: relative;
        background-color: ${(props) => props.theme.colors.aActiveBg};
        box-shadow: ${(props) => props.theme.elevations.elevation5};
        color: ${(props) => props.theme.colors.selectionText};
      }
      &:hover::after {
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
      &::before {
        content: "";
        height: 5rem;
        background-color: ${(props) => props.theme.colors.aActiveBg};
        display: grid;
        width: 0.5rem;
        margin-right: 1rem;
        border-radius: ${(props) => props.theme.radiusL};
      }
    }
  }

  .ext-link {
    grid-area: ext_link;
    text-align: right;
    justify-self: right;
  }

  .separator {
    grid-area: divider;
    border-bottom: 1px solid ${(props) => props.theme.colors.separator};
  }

  .footnote {
    color: ${(props) => props.theme.colors.p};
    font-size: 0.8rem;
    * {
      font-size: 0.8rem;
    }
    /* somehow doesn't work if i only put font-size, who knows why */
  }

  .source {
    grid-area: source;
  }

  .source_detail {
    grid-area: source_detail;
  }

  .note {
    grid-area: note;
  }

  .note_detail {
    grid-area: note_detail;
  }
`;

export default Accordion;
