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
        <CommunityIcon />
      ) : buttonIcon === "calendar" ? (
        <CalendarIcon />
      ) : (
        buttonIcon
      )}
    </Icon>
  );
}

const Icon = styled.a`
  border-radius: ${(props) => props.theme.radiusL};
  padding: 0.5rem;
  margin-left: 0.5rem;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.theme.colors.roundButtonBg};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  /* rules for the elements inside it */
  display: grid;
  place-items: center;
  transition: ${(props) => props.theme.transition};
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 900px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    margin-left: 0;
  }
`;
const CommunityIcon = styled(BsPeopleFill)`
  color: ${(props) => props.theme.colors.surface1};
  font-size: 1.5rem;
`;
const CalendarIcon = styled(BsCalendarFill)`
  color: ${(props) => props.theme.colors.surface1};
  font-size: 1.2rem;
`;

export default RoundButton;
