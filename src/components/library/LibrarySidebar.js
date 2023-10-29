import React from "react";
import styled from "styled-components";
import LibraryContents from "./LibraryContents";

const LibrarySidebar = ({
  title,
  pathologies,
  neuroskills,
  fromLibraryPage,
  guidelines,
  resources,
  links,
  locations,
}) => {
  return (
    <Aside>
      <h4>{title}</h4>
      {fromLibraryPage && pathologies && (
        <LibraryContents links={pathologies} title="Pathologies" />
      )}
      {fromLibraryPage && neuroskills && (
        <LibraryContents links={neuroskills} title="Neuroskills" />
      )}
      {!fromLibraryPage && (
        <>
          <LibraryContents
            links={guidelines}
            locations={locations}
            title="Guidelines"
          />
          <LibraryContents links={resources} title="Resources" />
          <LibraryContents
            links={links}
            locations={locations}
            title="Links"
            pureLinks
          />
        </>
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
  overflow-x: scroll;
  overflow-y: auto;
  /* text-align: center; */

  @media screen and (min-width: 900px) {
    position: sticky;
    position: -webkit-sticky;
    top: 5.5rem; /* needed for sticky to work */
    text-align: left;
    justify-self: left;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default LibrarySidebar;
