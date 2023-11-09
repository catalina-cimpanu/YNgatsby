import React from "react";
import styled from "styled-components";
import LibraryContentsAll from "./LibraryContentsAll";

const LibrarySidebar = ({
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
  return (
    <Aside>
      <h4>{title}</h4>
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
