import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin:0;
    padding:0;
    scroll-behavior: smooth; 
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0;
}

html, body {
    font-family: ${(props) => props.theme.fonts.secondary};
    word-break: break-word;
    background-color: ${(props) => props.theme.colors.bg};
    scroll-behavior: smooth; 
    scroll-margin-top: 5.3rem;
    scroll-padding-top: 5.3rem;
    height: 100%;
    overflow-x: hidden; /* hides horizontal scrolling */
}

/* scrollbar */
/* Hide scrollbar for Chrome, Safari and Opera */
 *::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
* {
  scrollbar-width: none; 
} 
div {
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
ul {
  list-style: none;
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: ${(props) => props.theme.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  ${"" /* margin-bottom: 0.75rem; */}
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
}
*::selection {
  background-color: ${(props) => props.theme.colors.selectionBg};
  color: ${(props) => props.theme.colors.selectionText};
}
h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  color: ${(props) => props.theme.colors.H1H2};
}
h2 {
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  color: ${(props) => props.theme.colors.H1H2};
}
h3 {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  color: ${(props) => props.theme.colors.H3toH6};
}
h4 {
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  color: ${(props) => props.theme.colors.H3toH6};
}
h5,h6 {
  font-size: clamp(1.2rem, 1.2vw, 1.5rem);
  color: ${(props) => props.theme.colors.H3toH6};
}
@media screen and (min-width: 600px) {
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
body, p {
  font-size: clamp(1.2rem, 1vw, 1.5rem);
  color: ${(props) => props.theme.colors.p};
  font-family: ${(props) => props.theme.fonts.secondary};
  -webkit-font-smoothing: antialiased;
}
p a {
  display: inline;
  position: relative;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  padding: 0 0.4rem;
  color: ${(props) => props.theme.colors.aText};
  box-shadow: ${(props) => props.theme.shadows.linkShadow};
}
p:last-of-type {
  margin-bottom: 0;
}
a:focus-visible {
  outline: none;
  }

a,
a:hover,
a:visited,
a:active,
a:link {
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  ${"" /* color: ${props => props.theme.colors.navLinkText}; */}
}
p a:hover {
  background: ${(props) => props.theme.colors.aHoverBg};
      box-shadow: ${(props) => props.theme.elevations.elevation5};
      color: ${(props) => props.theme.colors.selectionText};
}
p a:active {
  position: relative;
  background: ${(props) => props.theme.colors.aHoverBg};
  box-shadow: ${(props) => props.theme.elevations.elevation5};
  color: ${(props) => props.theme.colors.selectionText};
}
p a:hover::after {
  opacity: 0.2;
}
section {
  display: block;
  position: relative;
  box-sizing: border-box;
}
`;
export default GlobalStyles;
