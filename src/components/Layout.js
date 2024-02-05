import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import styled from "styled-components";
import GlobalStyles from "../themes/GlobalStyles";
import SideMenu from "./sidemenu/SideMenu";
import ToTopButton from "./buttons/ToTopButton";
import { Script } from "gatsby";

const Layout = ({ children, homepage, nocontents }) => {
  // so that new page always go up - doesn't work in build
  // const goToTop = () => {
  //   document.body.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // goToTop();

  return (
    <LayoutDiv>
      <GlobalStyles />
      <Navbar />
      <SideMenu />
      <Main homepage={homepage}>
        <Container homepage={homepage}>{children}</Container>
      </Main>
      <Footer />
      <ToTopButton showBelow={350} keepdown={homepage || nocontents} />
      <Script
        data-goatcounter="https://youngneuros.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
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
