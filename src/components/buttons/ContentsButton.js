import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";

const ContentsButton = ({ buttonText }) => {
  const { togglePageContents } = React.useContext(ThemeContext);
  return (
    <Button aria-label={buttonText} type="button" onClick={togglePageContents}>
      {buttonText ? buttonText : "contents"}
    </Button>
  );
};

const Button = styled.button`
  z-index: 2;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 2.5rem;
  min-width: max-content;
  padding: 0.3rem 0.7rem;
  text-align: center;
  border-radius: ${(props) => props.theme.radiusL};
  background-color: ${(props) => props.theme.colors.surface1};
  border: solid 2px ${(props) => props.theme.colors.buttonTextSecondary};
  box-shadow: ${(props) => props.theme.shadows.shadowTab};
  -webkit-box-shadow: ${(props) => props.theme.shadows.shadowTab};
  p {
    color: ${(props) => props.theme.colors.buttonTextSecondary};
    font-family: ${(props) => props.theme.fonts.primary};
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: ${(props) => props.theme.spacing};
    font-size: 1rem;
    line-height: 1;
  }
  &:hover {
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.colors.buttonTextSecondary};
  }
  &:hover p {
    color: ${(props) => props.theme.colors.buttonTextPrimary};
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default ContentsButton;
