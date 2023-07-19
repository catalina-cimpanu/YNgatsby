import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import features from "../../constants/features";

const FeaturesSVG = () => {
  return (
    <FeaturesSection>
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => {
          const { id, img_src, title, text, link } = feature;

          return (
            <Feature
              key={id}
              aria-label={title}
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              imgLeft={index % 2 === 0}
            >
              <div className="feature-info">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Feature>
          );
        })}
      </div>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  margin: 4rem auto;
  .features-container {
    display: grid;
    grid-template-columns: 8% 1fr 8%;
  }
  h2 {
    text-align: center;
    margin: 4rem auto;
  }
`;

const Feature = styled(Link)`
  text-decoration: none;
  border: none;
  grid-column: 2/3;
  display: grid;
  align-content: space-evenly;
  justify-content: space-between;
  @media screen and (min-width: 900px) {
    grid-template-columns: ${(props) =>
      props.imgLeft ? "30% 60%" : "60% 30%"};
    grid-template-areas: "area-left area-right";
  }

  &:focus-visible {
    outline: none;
  }

  .feature-img {
    z-index: 5;
    background-color: teal;
    width: 100%;
    height: 100%;
    grid-area: ${(props) => (props.imgLeft ? "area-left" : "area-right")};
    grid-row: 1/1; /* in small screens stays on top */
    justify-self: center;
    align-self: center;
    @media screen and (min-width: 900px) {
      justify-self: ${(props) => (props.imgLeft ? "right" : "left")};
    }
  }

  .feature-info {
    background-color: orange;
    width: 100%;
    padding: 1rem;
    grid-column: ${(props) => (props.imgLeft ? "area-right" : "area-left")};
    text-align: center;
    @media screen and (min-width: 900px) {
      text-align: ${(props) => (props.imgLeft ? "right" : "left")};
    }

    h3 {
    }

    p {
    }
  }
`;

export default FeaturesSVG;
