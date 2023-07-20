import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SecondaryButton = ({ buttonLink, buttonText }) => {
  return (
    <Button>
      <Link to={buttonLink ? buttonLink : "#"}>
        <p className="button-text">{buttonText}</p>
      </Link>
    </Button>
  );
};

const Button = styled.button`
  appearance: none;
  outline: none;
  cursor: pointer;
  width: max-content;
  height: 2.5rem;
  @media screen and (min-width: 900px) {
    height: 2rem;
  }
  padding: 0.3rem 0.7rem;
  text-align: center;
  border-radius: ${(props) => props.theme.radiusL};
  background-color: ${(props) => props.theme.colors.surface1};
  border: solid 2px ${(props) => props.theme.colors.buttonTextSecondary};
  box-shadow: ${(props) => props.theme.elevations.elevation6};
  -webkit-box-shadow: ${(props) => props.theme.elevations.elevation6};
  &:hover {
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.colors.buttonTextSecondary};
    p {
      color: ${(props) => props.theme.colors.buttonTextPrimary};
    }
  }
  &:hover p {
    color: ${(props) => props.theme.colors.buttonTextPrimary};
  }
  .button-text {
    color: ${(props) => props.theme.colors.buttonTextSecondary};
    font-family: ${(props) => props.theme.fonts.primary};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: ${(props) => props.theme.spacing};
    font-size: 1rem;
    line-height: 1;
  }
`;

export default SecondaryButton;
