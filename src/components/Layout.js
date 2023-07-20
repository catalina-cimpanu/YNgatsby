import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import styled from "styled-components";
import SideMenu from "./sidemenu/SideMenu";

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      <Navbar />
      <SideMenu />
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
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.bg};
  scroll-snap-type: y proximity;
  /* scroll-padding: 5.5rem 0 0 0; */
`;
const Main = styled.main`
  display: block;
  padding-top: -5rem;
  margin-top: 5rem;
  margin-left: 0;
`;
