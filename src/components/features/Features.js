import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import features from "../../constants/features";
import LibraryImg from "../../images/feature_images/Library.inline.svg";
import CalendarImg from "../../images/feature_images/Calendar.inline.svg";
import CommunityImg from "../../images/feature_images/Community.inline.svg";

const FeaturesSVG = () => {
  return (
    <FeaturesSection>
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => {
          const { id, title, text, link } = feature;

          return (
            <Feature
              key={id}
              aria-label={title}
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              imgLeft={index % 2 === 0}
            >
              {title === "Community" && (
                <CommunityImg className="feature-img" />
              )}
              {title === "Calendar" && <CalendarImg className="feature-img" />}
              {title === "Library" && <LibraryImg className="feature-img" />}
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
  margin-bottom: 5rem;
  grid-column: 2/3;
  display: grid;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 900px) {
    grid-template-columns: ${(props) =>
      props.imgLeft ? "40% 60%" : "60% 40%"};
    grid-template-areas: "area-left area-right";
  }

  &:focus-visible {
    outline: none;
  }

  .feature-img {
    z-index: 5;
    width: 80%;
    height: 100%;
    grid-area: ${(props) => (props.imgLeft ? "area-left" : "area-right")};
    grid-row: 1/1; /* in small screens stays on top */
    justify-self: center;
    align-self: center;
    @media screen and (min-width: 900px) {
      width: 100%;
      height: 100%;
    }
  }

  .feature-info {
    grid-column: ${(props) => (props.imgLeft ? "area-right" : "area-left")};
    height: 75%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    @media screen and (min-width: 900px) {
      text-align: ${(props) => (props.imgLeft ? "right" : "left")};
    }
  }
`;

export default FeaturesSVG;
