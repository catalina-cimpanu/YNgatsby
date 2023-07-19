import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ToggleThemeButton = () => {
  const { toggleDarkMode, darkMode } = useContext(ThemeContext);
  return (
    <ToggleButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
      <SunIcon aria-label="light mode" isDark={darkMode} />
      <MoonIcon aria-label="dark mode" isDark={darkMode} />
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: calc(0.55 * 5rem);
  border-radius: 50px;
  background: ${(props) => props.theme.colors.surface6};
  box-shadow: inset 0px 0 4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: inset 0px 0 4px rgba(0, 0, 0, 0.25);
  padding: 0.2rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:focus {
    outline: none;
    appearance: none;
    border: none;
  }
`;
const SunIcon = styled(RiSunFill)`
  border-radius: ${(props) => props.theme.radiusL};
  color: ${(props) => props.theme.colors.roundButtonBg};
  opacity: ${(props) => (props.isDark ? "0" : "1")};
`;

const MoonIcon = styled(RiMoonFill)`
  border-radius: ${(props) => props.theme.radiusL};
  color: ${(props) => props.theme.colors.roundButtonBg};
  opacity: ${(props) => (props.isDark ? "1" : "0")};
`;

export default ToggleThemeButton;
