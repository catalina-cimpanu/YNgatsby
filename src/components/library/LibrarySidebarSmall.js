import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";
import { FaTimes } from "react-icons/fa";
import LibraryContentsAll from "./LibraryContentsAll";

const LibraryContentsSmall = ({
  title,
  pathologies,
  neuroskills,
  fromLibraryPage,
  guidelines,
  resources,
  links,
  locations,
  sub_neuroskills,
  pathname,
}) => {
  const { showPageContents, togglePageContents } =
    React.useContext(ThemeContext);

  return (
    <HiddenContents showPageContents={showPageContents}>
      <button
        className="close-button"
        aria-label="close page contents"
        onClick={togglePageContents}
      >
        <FaTimes />
      </button>
      <div className="contents">
        <h2>Contents</h2>
        <LibraryContentsAll
          title={title}
          pathologies={pathologies}
          neuroskills={neuroskills}
          fromLibraryPage={fromLibraryPage}
          guidelines={guidelines}
          resources={resources}
          links={links}
          locations={locations}
          sub_neuroskills={sub_neuroskills}
          pathname={pathname}
        />
      </div>
    </HiddenContents>
  );
};

const HiddenContents = styled.div`
  background: ${(props) => props.theme.colors.surface1};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10%;
  padding-left: 15%;
  z-index: 999;
  opacity: 1;
  transform: ${(props) =>
    props.showPageContents ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.3s; /* i've tested! 0.3 or 0.4 are good!! */
  @media screen and (min-width: 900px) {
    transform: translateX(-100%);
  }

  .close-button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.colors.H1H2};
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transform: scale(1.1);
    }
  }

  .contents {
    margin-top: 1rem;
    height: 95%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
  }
`;

export default LibraryContentsSmall;
