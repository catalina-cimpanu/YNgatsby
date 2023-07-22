import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const LibraryCard = ({
  cardTitle,
  cardSummary,
  cardSlug,
  cardImg,
  imgAttr,
  contentsLink,
  onLibraryPage,
  isPathology,
}) => {
  const {
    alternativeText,
    localFile: { publicURL, childImageSharp, extension },
  } = cardImg;
  return (
    <Card
      aria-label={cardTitle}
      to={
        isPathology ? `/pathologies/${cardSlug}` : `/neuro-skills/${cardSlug}`
      }
    >
      {cardImg &&
        (childImageSharp ? (
          <GatsbyImage
            className="card-img"
            alt={alternativeText}
            image={childImageSharp.gatsbyImageData}
            placeholder="blurred"
            layout="fullWidth"
          />
        ) : (
          <img className="card-img-svg" src={publicURL} alt={alternativeText} />
        ))}
      <div className="card-body">
        <h4>{cardTitle}</h4>
        <p>{cardSummary}</p>
      </div>
    </Card>
  );
};

const Card = styled(Link)`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: ${(props) => props.theme.colors.surface1};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  border-radius: ${(props) => props.theme.radiusL};
  &:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.shadowTab};
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
  }

  .card-img {
    min-height: 40%;
    max-height: 40%;
    border-top-left-radius: ${(props) => props.theme.radiusL};
    border-top-right-radius: ${(props) => props.theme.radiusL};
  }

  .card-img-svg {
    background-color: ${(props) => props.theme.colors.sectionBg2};
    width: 100%;
    height: 40%;
    border-top-left-radius: ${(props) => props.theme.radiusL};
    border-top-right-radius: ${(props) => props.theme.radiusL};
  }

  .card-body {
    height: 60%;
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin: 1rem 0;
  }

  p {
    margin-bottom: 2rem;
    overflow-y: auto;
  }
`;

export default LibraryCard;
