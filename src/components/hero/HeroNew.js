import React from "react";
import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";
import HeroSvg from "../../images/YN_hero_multi_color.inline.svg";

const HeroNew = () => {
  return (
    <HeroSection>
      <HeroInfo>
        <h1>Welcome to Young Neuros</h1>
        <h3>The young neurologists hub to stay smart and stay in touch</h3>
        <PrimaryButton buttonText="discover" buttonLink="#description">
          read more
        </PrimaryButton>
      </HeroInfo>
      <div className="img-wrapper">
        <HeroSvg />
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  z-index: 1;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 8% 1fr 8%;
  height: calc(100vh - 5rem);
  @media screen and (min-width: 900px) {
    grid-template-columns: 8% 34% 50% 8%;
  }
  .hero-img {
    /* background-color: blueviolet; */
  }
  .img-wrapper {
    z-index: 4;
    grid-column: 2/3;
    grid-row: 2/3;
    @media screen and (min-width: 900px) {
      grid-column: 3/4;
      grid-row: 1/2;
    }
  }
`;
const HeroInfo = styled.article`
  background-color: transparent;
  z-index: 5;
  text-align: center;
  grid-column: 2/3;
  grid-row: 1/2;
  display: grid;
  grid-template-rows: repeat (3, 1fr);
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 2rem;
  @media screen and (min-width: 900px) {
    text-align: left;
    grid-column: 2/3;
    grid-row: 1/2;
    justify-items: left;
    margin-right: 1vh;
    margin-bottom: 0;
  }
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    line-height: 1;
    color: ${(props) => props.theme.colors.H1H2};
    @media screen and (min-width: 900px) {
      margin: -0.6rem 0;
    }
    /* for very small devices */
    @media screen and (max-height: 300px), (max-width: 300px) {
      font-size: 2rem;
    }
  }
  h3 {
    color: ${(props) => props.theme.colors.H3toH6};
    text-transform: none;
    font-size: clamp(1.2rem, 1.6vw, 2.5rem);
    line-height: 1.2;
    /* for very small devices */
    @media screen and (max-height: 300px), (max-width: 300px) {
      font-size: 0.8rem;
    }
  }
`;

export default HeroNew;
