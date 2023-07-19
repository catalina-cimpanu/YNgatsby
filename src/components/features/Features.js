import React from "react";
import styled from "styled-components";
import HeroSvg from "../../images/YN_hero_multi_color.inline.svg";
import CommunitySVG from "../../images/Community.inline.svg";
import { StaticImage } from "gatsby-plugin-image";

const Features = () => {
  return (
    <FeaturesSection>
      <h2>Features</h2>
      <div className="img-wrapper">
        <HeroSvg />
      </div>
      <div className="img-wrapper">{/* <CommunitySVG /> */}</div>
      <div className="img-wrapper">
        <StaticImage
          alt="image"
          src="../../images/community.svg"
          quality="100"
        />
      </div>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  background-color: darkcyan;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  .img-wrapper {
    width: 80%;
  }
  h2 {
    text-align: center;
  }
`;

export default Features;
