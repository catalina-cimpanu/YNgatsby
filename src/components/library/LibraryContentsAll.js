import React from "react";
import { navigate } from "gatsby";
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
}) => {
  const { closePageContents } = React.useContext(ThemeContext);
  return (
    <div>
      {/* this is again difficult to read cuz of the conditionals; basically i check if both, then if each */}
      {fromLibraryPage ? (
        (pathologies && neuroskills && (
          <>
            <LibraryContents links={pathologies} title="Pathologies" />
            <LibraryContents links={neuroskills} title="Neuroskills" />
          </>
        )) ||
        (pathologies && (
          <LibraryContents links={pathologies} title="Pathologies" />
        )) ||
        (neuroskills && (
          <LibraryContents links={neuroskills} title="Neuroskills" />
        ))
      ) : sub_neuroskills ? (
        sub_neuroskills.map((subNeuroskill) => {
          let subskillname = subNeuroskill.subneuroskill_name;
          let subskillhash = `#${subNeuroskill.subneuroskill_slug}`;

          let filteredGuidelines = guidelines.filter(
            (guideline) =>
              guideline.sub_neuroskill.subneuroskill_slug ===
              subNeuroskill.subneuroskill_slug
          );
          let filteredResources = resources.filter(
            (resource) =>
              resource.sub_neuroskill.subneuroskill_slug ===
              subNeuroskill.subneuroskill_slug
          );
          let filteredLinks = links.filter(
            (link) =>
              link.sub_neuroskill.subneuroskill_slug ===
              subNeuroskill.subneuroskill_slug
          );
          return (
            <>
              <h4
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  // e.preventDefault();
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
              />
              <LibraryContents
                links={filteredResources}
                title="Resources"
                subskill={subskillname}
              />
              <LibraryContents
                links={filteredLinks}
                locations={locations}
                title="Links"
                pureLinks
                subskill={subskillname}
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
    </div>
  );
};

export default LibraryContentsAll;
