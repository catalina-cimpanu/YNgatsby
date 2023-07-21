import React, { useContext } from "react";
import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";
import { ThemeContext } from "../../context/Provider";
import Blobbies from "../../images/blobs/blobbies.inline.svg";
import BlobX from "../../images/blobs/BlobX.inline.svg";
import ToGuideSvg from "../../images/ToGuide.inline.svg";

const GoToGuideSection = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Section>
      <div className="container">
        <div className="guide-img">
          <ToGuideSvg />
        </div>
        <div className="cta">
          <h3>Not sure where to start? </h3>
          <PrimaryButton
            buttonText="Read the quick guide"
            buttonLink="/quick-guide"
            hideOnSmallScreen={false}
          />
        </div>
      </div>
      <Blobbies className="blobbies" />
      <BlobX className="blobx" />
    </Section>
  );
};
const Section = styled.section`
  padding: 4rem 8%;
  width: 100%;

  .container {
    ${"" /* border: solid 1px ${props => props.theme.colors.H3toH6}; */}
    border-radius: ${(props) => props.theme.radiusL};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    background-color: ${(props) => props.theme.colors.surface1};
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 8% 1fr 8%;
    grid-template-rows: auto 1fr;
    grid-column-gap: 8%;
    justify-content: center;
    @media screen and (min-width: 900px) {
      grid-template-columns: 8% 1fr 1fr 8%;
      grid-template-rows: 1fr;
      margin-bottom: 0;
    }
  }

  .guide-img {
    z-index: 1;
    position: relative;
    max-width: 100%;
    padding-top: 1rem; /* equal to the padding on the container, just to separate it a bit from the text; cuz row-gap pushes the image down */
    grid-column: 2/3;
    grid-row: 2/3;
    @media screen and (min-width: 900px) {
      grid-column: 2/3;
      grid-row: 1/2;
      padding-top: 0;
    }
  }

  .cta {
    z-index: 1;
    height: clamp(120px, 15vh, 300px);
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    grid-column: 2/3;
    grid-row: 1/2;
    @media screen and (min-width: 900px) {
      height: 100%;
      grid-column: 3/4;
      grid-row: 1/2;
      align-items: right;
      justify-content: space-evenly;
    }
  }

  .blobbies {
    height: 70%;
    position: absolute;
    right: 1%;
    top: -20%;
    opacity: 0.3;
    visibility: hidden;
    @media screen and (min-width: 900px) {
      opacity: 0.7;
      visibility: visible;
    }
  }

  .blobx {
    height: 60%;
    opacity: 0.3;
    position: absolute;
    left: -4%;
    bottom: -17%;
    @media screen and (min-width: 900px) {
    }
  }
`;

export default GoToGuideSection;
