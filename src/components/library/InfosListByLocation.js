import React from "react";
import styled from "styled-components";
import InfosList from "./InfosList";
import { FilterLocationsWithInfos } from "./libraryFunctions";

/* basically based on AccordionsList, but with a filter for locations */
const AccordionsListByLocation = ({ infos, type, locations, subskill }) => {
  const locationsWithInfos =
    locations && FilterLocationsWithInfos(infos, locations);
  return (
    <List>
      {locationsWithInfos.map((location, index) => {
        return (
          <div key={index}>
            <h3
              // unfortunately it doesn't let me keep the () when I save and the following if is a bit difficult to understand
              // 1. check if links, 2. check if subskill
              id={
                type === "links"
                  ? `${location.location_name}_links`
                  : subskill
                  ? location.location_name + subskill
                  : location.location_name
              }
            >
              {location.location_name}
            </h3>
            <InfosList infos={location.infos} type={type} />
          </div>
        );
      })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

export default AccordionsListByLocation;
