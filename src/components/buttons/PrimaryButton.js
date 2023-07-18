import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PrimaryButton = ({ buttonText, buttonLink, pleaseScroll }) => {
  return (
    <Button aria-label={buttonText} onClick={() => null}>
      <Link to={buttonLink}>
        <p>{buttonText}</p>
      </Link>
    </Button>
  );
};
const Button = styled.button`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: 2.5rem;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 900px) {
    height: 2rem;
  }
  min-width: min-content;
  width: max-content;
  padding: 0 0.8rem;
  border-radius: ${(props) => props.theme.radiusL};
  background-color: ${(props) => props.theme.colors.primary}; /*fallback*/
  background: ${(props) => props.theme.colors.buttonGradient.gradientWebkit};
  background: ${(props) => props.theme.colors.buttonGradient.gradientO};
  background: ${(props) => props.theme.colors.buttonGradient.gradient};
  p {
    color: ${(props) => props.theme.colors.buttonTextPrimary};
    font-family: ${(props) => props.theme.fonts.primary};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: ${(props) => props.theme.spacing};
    font-size: 1rem;
    line-height: 1;
  }
`;

export default PrimaryButton;
