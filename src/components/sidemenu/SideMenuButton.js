import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import { AiOutlineMenu } from "react-icons/ai";

const SideMenuButton = () => {
  const { toggleSideMenu } = useContext(ThemeContext);
  return (
    <SideButton
      aria-label="open sidemenu"
      type="button"
      onClick={toggleSideMenu}
    >
      <AiOutlineMenu />
    </SideButton>
  );
};
const SideButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  width: 3rem;
  height: 80%;
  align-self: center;
  justify-self: right;
  background: transparent;
  color: ${(props) => props.theme.colors.roundButtonBg};
  border-radius: ${(props) => props.theme.radius};
  display: grid;
  place-items: center;
  transition: ${(props) => props.theme.transition};
  :hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default SideMenuButton;
