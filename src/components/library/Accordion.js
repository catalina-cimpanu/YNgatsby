// Note: I can't recall how come I didn't use state and did some CSS Accordion..
// I kept the styled components and not classes, like in the other components.
// (mainly cuz it works fine and i was too lazy to redo it)
import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Accordion = ({
  info: {
    title,
    slug,
    source,
    body,
    image: {
      alternativeText,
      localFile: { extension, publicURL, childImageSharp },
    },
    note,
    internal_link,
    external_link,
    pricing,
    language,
  },
}) => {
  return (
    <Info>
      <Input type="checkbox" id={internal_link.link_url} />
      <Label for={internal_link.link_url}>
        {!childImageSharp && extension === "svg" ? (
          <div className="img-container">
            <img className="img svg" src={publicURL} alt={alternativeText} />
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
      </Label>
      <Content></Content>
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

  .img-container {
    grid-area: logo;
    align-self: center;
    justify-self: center;
    height: 80%;
    width: 90%;
    background-color: ${(props) => props.theme.colors.miniFeatureBG};
    border-radius: ${(props) => props.theme.radiusXS};
  }

  .img {
    object-fit: contain !important;
    padding: 0 0.1rem;
    /* cuz otherwise freaking gatsby overrides this */
  }

  .title {
    grid-area: title;
    align-self: center;
  }

  .arrow {
    grid-area: arrow;
    color: ${(props) => props.theme.colors.H3toH6};
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
    align-self: center;
    justify-self: center;
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
  /* max-height: 0; */
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  background-color: lightcoral;
  /* background-color: ${(props) => props.theme.colors.surface1}; */
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  ${Input}:checked ~ & {
    max-height: max-content;
    display: grid;
    grid-template-columns: 15% auto;
    grid-gap: 0.5rem;
    padding: clamp(0.5rem, 1.5vw, 1.5rem);
  }
`;

export default Accordion;
