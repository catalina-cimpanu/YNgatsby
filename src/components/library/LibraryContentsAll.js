import React from "react";
import { Link } from "gatsby";
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
              <div onClick={closePageContents}>
                <Link to={`#${name}`}>
                  <h4>{name}</h4>
                </Link>
              </div>
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
    </div>
  );
};

export default LibraryContentsAll;
