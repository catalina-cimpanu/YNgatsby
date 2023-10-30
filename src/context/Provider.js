import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import GlobalStyles from "../themes/GlobalStyles";

// Our global theme context with default values
export const ThemeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {},
  isOpen: false,
  setIsOpen: () => {},
  showPageContents: false,
  setShowPageContents: () => {},
  activeLink: "",
  setActiveLink: () => {},
});

// Theme provider component with state
const MyThemeProvider = (props) => {
  //dark mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("DarkMode");
    if (data) {
      setDarkMode(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(darkMode));
  });

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  //side menu
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSideMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const closeSideMenu = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  // contents on lib page for small screens (for pages: pathology template, neuroskill template, pathologies, library. blog)
  const [showPageContents, setShowPageContents] = React.useState(true);
  const togglePageContents = (e) => {
    e.preventDefault();
    setShowPageContents(!showPageContents);
  };
  const closePageContents = (e) => {
    e.preventDefault();
    setShowPageContents(false);
  };

  // active Link for inpage navigation
  const [activeLink, setActiveLink] = React.useState("");

  // show buttons (totop and contents)
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (document.body.scrollTop > 350) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  const value = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
    isOpen,
    setIsOpen,
    toggleSideMenu,
    closeSideMenu,
    showPageContents,
    setShowPageContents,
    togglePageContents,
    closePageContents,
    activeLink,
    setActiveLink,
    showButton,
    setShowButton,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Exports a ThemeProvider wrapper
export default ({ element }) => <MyThemeProvider>{element}</MyThemeProvider>;
