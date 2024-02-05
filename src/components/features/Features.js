import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import Blob1 from "../../images/blobs/Blob1.inline.svg";
import Blob2 from "../../images/blobs/Blob2.inline.svg";
import Blob3 from "../../images/blobs/Blob3.inline.svg";
import Blob4 from "../../images/blobs/Blob4.inline.svg";
// left the blobs hardcoded cuz they are decoration in the end

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiFeature(sort: { strapi_id: ASC }) {
        nodes {
          id
          feature_title
          feature_description
          feature_link
          feature_image {
            alternativeText
            localFile {
              extension
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `);
  const {
    allStrapiFeature: { nodes: features },
  } = data;
  return (
    <FeaturesSection id="features">
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => {
          return <FeatureCard key={index} index={index} feature={feature} />;
        })}
      </div>
      <Blob1 className="blob1" />
      <Blob2 className="blob2" />
      <Blob3 className="blob3" />
      <Blob4 className="blob4" />
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  /* margin: 4rem auto; */
  h2 {
    text-align: center;
    margin: 4rem auto;
  }
  .features-container {
    display: grid;
    grid-template-columns: 8% 1fr 1fr 8%;
  }

  .blob1 {
    position: absolute;
    right: -5%;
    top: -20%;
    opacity: 0.4;
    @media screen and (min-width: 900px) {
      opacity: 0.8;
    }
  }
  .blob2 {
    position: absolute;
    left: -5%;
    top: 29%;
  }
  .blob3 {
    position: absolute;
    left: 7%;
    top: 39%;
    opacity: 0.3;
  }
  .blob4 {
    position: absolute;
    right: 0;
    bottom: -10%;
    opacity: 0.6;
  }
`;

export default Features;
