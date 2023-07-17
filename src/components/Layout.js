import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import styled from "styled-components";
import SideMenu from "./sidemenu/SideMenu";

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      {/* somehow anyway my grid doesn't work if i don't put the navbar in a div, but it is better for both menus anyway */}
      <div id="top">
        <Navbar />
        <SideMenu />
      </div>
      <Main>
        {/* <MyCookieConsentBanner /> */}
        {children}
      </Main>
      <Footer />
    </LayoutDiv>
  );
};

export default Layout;

const LayoutDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.bg};
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  ${"" /* scroll-padding: 5.5rem 0 0 0; */}
`;
const Main = styled.main`
  display: block;
  padding-top: -5rem;
  margin-top: 5rem;
  margin-left: 0;
  padding: 3rem;
  width: 100vw;
  scroll-behavior: smooth;
`;
