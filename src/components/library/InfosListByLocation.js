import React from "react";
import styled from "styled-components";
import InfosList from "./InfosList";
import { FilterLocationsWithInfos } from "./libraryFunctions";

/* basically based on AccordionsList, but with a filter for locations */
const AccordionsListByLocation = ({ infos, type, locations }) => {
  const locationsWithInfos =
    locations && FilterLocationsWithInfos(infos, locations);
  return (
    <List>
      {locationsWithInfos.map((location, index) => {
        return (
          <div key={index}>
            <h3>{location.location_name}</h3>
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
