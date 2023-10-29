import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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
  sub_neuroskills,
}) => {
  return (
    <Aside>
      <h4>{title}</h4>
      {fromLibraryPage ? (
        (pathologies && (
          <LibraryContents links={pathologies} title="Pathologies" />
        )) ||
        (neuroskills && (
          <LibraryContents links={neuroskills} title="Neuroskills" />
        ))
      ) : sub_neuroskills ? (
        sub_neuroskills.map((subNeuroskill) => {
          let name = subNeuroskill.subneuroskill_name;
          let filteredGuidelines = guidelines.filter(
            (guideline) => guideline.sub_neuroskill.subneuroskill_name === name
          );
          let filteredResources = resources.filter(
            (resource) => resource.sub_neuroskill.subneuroskill_name === name
          );
          let filteredLinks = links.filter(
            (link) => link.sub_neuroskill.subneuroskill_name === name
          );
          return (
            <>
              <Link to={`#${name}`}>
                <h4>{name}</h4>
              </Link>
              <LibraryContents
                links={filteredGuidelines}
                locations={locations}
                title="Guidelines"
                subskill={name}
              />
              <LibraryContents
                links={filteredResources}
                title="Resources"
                subskill={name}
              />
              <LibraryContents
                links={filteredLinks}
                locations={locations}
                title="Links"
                pureLinks
                subskill={name}
              />
            </>
          );
        })
      ) : (
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
