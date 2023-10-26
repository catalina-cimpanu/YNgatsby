import React from "react";
import InfosSection from "./InfosSection";

const Infos = ({ guidelines, resources, links, locations }) => {
  return (
    <>
      <InfosSection
        title="Guidelines"
        infos={guidelines}
        type="guidelines"
        locations={locations}
      />
      <InfosSection title="Resources" infos={resources} type="resources" />
      <InfosSection
        title="Links"
        infos={links}
        type="links"
        locations={locations}
      />
    </>
  );
};

export default Infos;
