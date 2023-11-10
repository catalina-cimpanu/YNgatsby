import React from "react";
import InfosSection from "./InfosSection";

const Infos = ({
  guidelines,
  resources,
  links,
  locations,
  subskill,
  pagename,
}) => {
  return (
    <>
      <InfosSection
        pagename={pagename}
        title="Guidelines"
        infos={guidelines}
        type="guidelines"
        locations={locations}
        subskill={subskill}
      />
      <InfosSection
        pagename={pagename}
        title="Resources"
        infos={resources}
        type="resources"
        subskill={subskill}
      />
      <InfosSection
        pagename={pagename}
        title="Links"
        infos={links}
        type="links"
        locations={locations}
        subskill={subskill}
      />
    </>
  );
};

export default Infos;
