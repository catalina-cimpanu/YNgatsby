import React from "react";
import { Link, navigate } from "gatsby";
import LibraryContents from "./LibraryContents";
import { ThemeContext } from "../../context/Provider";

const LibraryContentsAll = ({
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
  const { closePageContents } = React.useContext(ThemeContext);
  console.log("pathname from libraryContentsAll", pathname);
  return (
    <div>
      {/* this is again difficult to read cuz of the conditionals; basically i check if both, then if each */}
      {fromLibraryPage ? (
        (pathologies && neuroskills && (
          <>
            <LibraryContents
              links={pathologies}
              title="Pathologies"
              pathname={pathname}
            />
            <LibraryContents
              links={neuroskills}
              title="Neuroskills"
              pathname={pathname}
            />
          </>
        )) ||
        (pathologies && (
          <LibraryContents
            links={pathologies}
            title="Pathologies"
            pathname={pathname}
          />
        )) ||
        (neuroskills && (
          <LibraryContents
            links={neuroskills}
            title="Neuroskills"
            pathname={pathname}
          />
        ))
      ) : sub_neuroskills ? (
        sub_neuroskills.map((subNeuroskill) => {
          let subskillname = subNeuroskill.subneuroskill_name;
          let subskillhash = `#${subNeuroskill.subneuroskill_slug}`;

          console.log("subskillhash ", subskillhash);
          let filteredGuidelines = guidelines.filter(
            (guideline) =>
              guideline.sub_neuroskill.subneuroskill_name === subskillname
          );
          let filteredResources = resources.filter(
            (resource) =>
              resource.sub_neuroskill.subneuroskill_name === subskillname
          );
          let filteredLinks = links.filter(
            (link) => link.sub_neuroskill.subneuroskill_name === subskillname
          );
          return (
            <>
              <h4
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  closePageContents(e);
                  navigate(subskillhash);
                }}
              >
                {subskillname}
              </h4>

              <LibraryContents
                links={filteredGuidelines}
                locations={locations}
                title="Guidelines"
                subskill={subskillname}
                pathname={pathname}
              />
              <LibraryContents
                links={filteredResources}
                title="Resources"
                subskill={subskillname}
                pathname={pathname}
              />
              <LibraryContents
                links={filteredLinks}
                locations={locations}
                title="Links"
                pureLinks
                subskill={subskillname}
                pathname={pathname}
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
            pathname={pathname}
          />
          <LibraryContents
            links={resources}
            title="Resources"
            pathname={pathname}
          />
          <LibraryContents
            links={links}
            locations={locations}
            title="Links"
            pureLinks
            pathname={pathname}
          />
        </>
      )}
    </div>
  );
};

export default LibraryContentsAll;
