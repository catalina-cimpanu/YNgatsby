import React from "react";
import AccordionsList from "./AccordionsList";
import { FilterLocationsWithInfos } from "./libraryFunctions";

/*basically based on AccordionsList, but with a filter for locations */
const AccordionsListByLocation = ({ infos, type, locations }) => {
  /* filter locations that have infos (for now guidelines or resources) */
  const locationsWithInfos =
    locations && FilterLocationsWithInfos(infos, locations);

  return (
    <div>
      {locationsWithInfos.map((location, index) => {
        /* only return locations with at least one info in them */
        return (
          location && (
            <div key={index}>
              <h3>{location.location_name}</h3>
              <AccordionsList infos={location.infos} type={type} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default AccordionsListByLocation;
