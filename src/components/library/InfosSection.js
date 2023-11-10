import React from "react";
import styled from "styled-components";
import InfosList from "./InfosList";
import InfosListByLocation from "./InfosListByLocation";

const InfosSection = ({ title, infos, type, locations, subskill }) => {
  return (
    <Section>
      <h2 id={subskill ? `${title + subskill}` : `${title}`}>{title}</h2>
      {infos.length > 0 ? (
        locations ? (
          <InfosListByLocation
            infos={infos}
            type={type}
            locations={locations}
            subskill={subskill}
          />
        ) : (
          <InfosList infos={infos} type={type} />
        )
      ) : (
        <p>
          Sorry, nothing here... yet!
          <span role="img" aria-label="nerdy smile">
            🤓
          </span>
        </p>
      )}
    </Section>
  );
};

const Section = styled.section`
  h2 {
    font-size: clamp(1rem, 7vw, 3rem);
    margin-bottom: 2rem;
    width: max-content;
  }
`;

export default InfosSection;
