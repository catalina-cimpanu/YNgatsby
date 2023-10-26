// Note: kept the logic from the previous version, but I'm using SVGs instead of img with src
// tried to refactor the code, but I didn't manage

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import features from "../../constants/features";
import LibraryImg from "../../images/feature_images/Library.inline.svg";
import CalendarImg from "../../images/feature_images/Calendar.inline.svg";
import CommunityImg from "../../images/feature_images/Community.inline.svg";
import Blob1 from "../../images/blobs/Blob1.inline.svg";
import Blob2 from "../../images/blobs/Blob2.inline.svg";
import Blob3 from "../../images/blobs/Blob3.inline.svg";
import Blob4 from "../../images/blobs/Blob4.inline.svg";

const FeaturesSVG = () => {
  return (
    <FeaturesSection>
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => {
          const { id, icon, title, text, link } = feature;
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
      <Blob1 className="blob1" />
      <Blob2 className="blob2" />
      <Blob3 className="blob3" />
      <Blob4 className="blob4" />
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  margin: 4rem auto;
  .features-container {
    display: grid;
    grid-template-columns: 8% 1fr 1fr 8%;
  }
  h2 {
    text-align: center;
    margin: 4rem auto;
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

const Feature = styled(Link)`
  text-decoration: none;
  border: none;
  min-width: 100px;
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 40% 40%;
  margin-bottom: 4rem;
  &:focus-visible {
    outline: none;
  }

  .feature-img {
    z-index: 5;
    width: 100%;
    grid-column: 1/7;
    grid-row: 1/1;
    justify-self: center;
    align-self: center;
    @media screen and (min-width: 600px) and (max-width: 900px) {
      width: 80%;
    }
    @media screen and (min-width: 900px) {
      grid-column: ${(props) => (props.imgLeft ? "1/4" : "4/8")};
      max-width: 85%;
      justify-self: ${(props) => (props.imgLeft ? "left" : "right")};
    }
  }

  .feature-info {
    z-index: 1;
    grid-column: 1/7;
    grid-row: 2/3;
    text-align: center;
    align-self: center;
    padding: 3rem 1rem;
    background-color: ${(props) => props.theme.colors.surface1};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    border-radius: ${(props) => props.theme.radiusL};
    /* margin-top: -5vh; */

    @media screen and (min-width: 900px) {
      grid-column: ${(props) => (props.imgLeft ? "2/7" : "1/6")};
      grid-row: 1/1;
      margin-top: 0;
      padding: 6rem 3rem;
      margin-left: ${(props) => (props.imgLeft ? "2rem" : "0")};
      display: grid;
      grid-template-columns: ${(props) =>
        props.imgLeft ? "30% 70%" : "70% 30%"};
    }

    h3 {
      grid-column: ${(props) => (props.imgLeft ? "2/3" : "1/2")};
      margin-bottom: 2rem;
    }

    p {
      grid-column: ${(props) => (props.imgLeft ? "2/3" : "1/2")};
    }
  }
`;

export default FeaturesSVG;
