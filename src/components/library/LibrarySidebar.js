import React from "react";
import styled from "styled-components";
import LibraryContents from "./LibraryContents";

const LibrarySidebar = ({
  title,
  pathologies,
  neuroskills,
  fromLibraryPage,
}) => {
  return (
    <Aside>
      <h4>{title}</h4>
      {fromLibraryPage && (
        <LibraryContents
          links={pathologies}
          title="Pathologies"
          arePathologies
        />
      )}
      {fromLibraryPage && (
        <LibraryContents links={neuroskills} title="Neuroskills" />
      )}
    </Aside>
  );
};

const Aside = styled.aside`
  grid-area: sidebar;
  display: none;
  height: 100%;
  width: 100%;
  max-height: calc(100vh - 5.5rem);
  overflow-x: visible;
  overflow-y: auto;
  /* text-align: center; */

  @media screen and (min-width: 900px) {
    position: sticky;
    position: -webkit-sticky;
    top: 5.5rem; /* needed for sticky to work */
    text-align: left;
    height: max-content;
    justify-self: left;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default LibrarySidebar;
