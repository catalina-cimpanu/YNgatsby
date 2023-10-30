import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const MiniFeatureCardNew = ({ minifeature }) => {
  const {
    minifeature_title,
    minifeature_description,
    minifeature_image: {
      alternativeText,
      localFile: { extension, publicURL, childImageSharp },
    },
  } = minifeature;
  return (
    <MiniCard>
      {!childImageSharp && extension === "svg" ? (
        <img
          className="minicard-img svg"
          src={publicURL}
          alt={alternativeText}
        />
      ) : (
        <GatsbyImage
          className="minicard-img"
          image={childImageSharp.gatsbyImageData}
          alt={alternativeText}
        />
      )}
      <h4>{minifeature_title}</h4>
      <p>{minifeature_description}</p>
    </MiniCard>
  );
};

const MiniCard = styled.div`
  border-radius: ${(props) => props.theme.radiusL};
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .minicard-img {
    width: 65%;
    padding: 1rem;
    /* background-color: ${(props) =>
      props.darkMode && props.theme.colors.miniFeatureBG}; */
    /* background-color: ${(props) => props.theme.colors.miniFeatureBG}; */
    border-radius: ${(props) => props.theme.radiusS};
    @media screen and (min-width: 900px) {
      width: 55%;
    }
  }
`;

export default MiniFeatureCardNew;
