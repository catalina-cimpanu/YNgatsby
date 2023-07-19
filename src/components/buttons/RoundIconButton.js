import React from "react";
import styled from "styled-components";
import { BsPeopleFill, BsCalendarFill } from "react-icons/bs";

function RoundButton({ buttonIcon, buttonLink, isOpen }) {
  return (
    <Icon
      href={buttonLink}
      isOpen={isOpen}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonIcon === "community" ? (
        <BsPeopleFill />
      ) : buttonIcon === "calendar" ? (
        <BsCalendarFill />
      ) : (
        buttonIcon
      )}
    </Icon>
  );
}

const Icon = styled.a`
  background-color: ${(props) => props.theme.colors.roundButtonBg};
  color: ${(props) => props.theme.colors.surface1};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  border-radius: ${(props) => props.theme.radiusL};
  height: 5vh;
  width: 5vh;
  @media screen and (min-width: 320px) {
    height: 4vh;
    width: 4vh;
  }
  /* rules for the elements inside it */
  display: grid;
  align-content: center;
  justify-content: center;
  transition: ${(props) => props.theme.transition};
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 900px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
  }
`;

export default RoundButton;
