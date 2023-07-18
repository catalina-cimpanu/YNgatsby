import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <HeroSection>
      <HeroInfo>
        <h1>
          Welcome to <br />
          Young Neuros!
        </h1>
        <h3>
          Best resources and community to help young neurologists stay smart and
          stay in touch
        </h3>
      </HeroInfo>
      <StaticImage
        src="../../images/YN_hero.svg"
        alt="brain mri"
        placeholder="blurred"
        layout="fullWidth"
        className="hero-img"
      />
    </HeroSection>
  );
};

const HeroSection = styled.section`
  z-index: 1;
  /* position: relative; */
  height: 85vh;
  margin-bottom: 1.5rem;
  display: grid;
  /* grid-row-gap: 1rem; */
  grid-template-columns: 8% 1fr 8%;
  grid-template-rows: 100%;
  place-items: center;
  @media screen and (min-width: 900px) {
    grid-template-columns: 8% 34% 50% 8%;
    /* height: 89vh; */
  }
  scroll-behavior: smooth;
  /* for very large screens */
  @media screen and (min-width: 1500px) {
    margin-bottom: 6%;
  }
  /* for iPad pro: */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1300px) {
    margin-top: -15rem;
    margin-bottom: -15rem;
  }
  /* for small devices in landscape */
  @media screen and (max-height: 400px) and (min-width: 350px) and (max-width: 850px) {
    margin-top: -0.5rem;
  }
  /* for very small devices */
  @media screen and (max-height: 450px) {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  background-color: pink;
  .hero-img {
    z-index: 4;
    grid-column: 2/3;
    grid-row: 2/3;
    height: 100%;
    width: auto;
    max-height: 40vh;
    max-width: 90vw;
    transition: ${(props) => props.theme.transition};
    /* grid-column: 3/4;
    grid-row: 1/2;
    width: 100%;
    height: auto; */
    background-color: darkturquoise;
    /* @media screen and (min-width: 500px) and (max-width: 900px) {
      max-height: 50vh;
    }
    @media screen and (min-width: 900px) {
      grid-column: 3/4;
      grid-row: 1/2;
      width: 100%;
      height: auto;
      max-height: 100vh;
      max-width: 100vw;
    } */
    /* for small devices, max-width cuz otherwise it disappears on wide screens with small height, like for example in landscape mode on tablet */
    /* @media screen and (max-height: 550px) and (max-width: 900px) {
      display: none;
    } */
    /* for very small devices */
    /* @media screen and (max-height: 300px), (max-width: 300px) {
      display: none;
    } */
  }
`;

const HeroInfo = styled.article`
  grid-column: 2/3;
  grid-row: 1/2;
  z-index: 5;
  background-color: transparent;
  text-align: center;
  display: grid;
  grid-template-rows: repeat (3, 1fr);
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 900px) {
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: left;
    align-items: center;
    justify-items: left;
  }
  @media screen and (max-height: 350px) {
    grid-row-gap: 1rem;
  }
  background-color: aquamarine;
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

export default Hero;
