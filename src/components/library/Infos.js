import React from "react";
import InfosSection from "./InfosSection";

const Infos = ({ guidelines, resources, links, locations, subskill }) => {
  return (
    <>
      <InfosSection
        title="Guidelines"
        infos={guidelines}
        type="guidelines"
        locations={locations}
        subskill={subskill}
      />
      <InfosSection
        title="Resources"
        infos={resources}
        type="resources"
        subskill={subskill}
      />
      <InfosSection
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
