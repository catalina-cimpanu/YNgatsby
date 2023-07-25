import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import styled from "styled-components";
import SideMenu from "./sidemenu/SideMenu";

const Layout = ({ children, homepage }) => {
  return (
    <LayoutDiv>
      <Navbar />
      <SideMenu />
      <Main homepage={homepage}>
        {/* <MyCookieConsentBanner /> */}
        <Container homepage={homepage}>{children}</Container>
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
`;
const Main = styled.main`
  /* display: ${(props) => (props.homepage ? "block" : "grid")};
  grid-template-columns: ${(props) => !props.homepage && "8% 1fr 8%"}; */
  display: grid;
  grid-template-columns: 8% 1fr 8%;
  padding-top: -5rem;
  margin-top: 5rem;
  margin-left: 0;
`;

const Container = styled.div`
  grid-column: ${(props) => (props.homepage ? "1/4" : "2/3")};
  /* so that content is full width on homepage, otherwise in the middle */
`;
