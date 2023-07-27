import React from "react";
import styled from "styled-components";
import AccordionsList from "./InfosList";
import { FilterLocationsWithInfos } from "./libraryFunctions";

/*basically based on AccordionsList, but with a filter for locations */
const AccordionsListByLocation = ({ infos, type, locations }) => {
  /* filter locations that have infos (for now guidelines or resources) */
  const locationsWithInfos =
    locations && FilterLocationsWithInfos(infos, locations);

  return (
    <List>
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
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default AccordionsListByLocation;
