import React from "react";
import styled from "styled-components";
import TitleH2 from "../titles/TitleH2";
import MiniFeatureCard from "./MiniFeatureCard";

const MiniFeatures = ({ features, title, blue }) => {
  return (
    <MiniFeaturesSection blue={blue}>
      <TitleH2 title={title} />
      <div className="minifeatures-row ">
        {features.map((feature) => {
          console.log(feature);
          return <MiniFeatureCard key={feature.id} feature={feature} />;
        })}
      </div>
    </MiniFeaturesSection>
  );
};
const MiniFeaturesSection = styled.section`
  background-color: ${(props) => props.blue && props.theme.colors.sectionBg};
  width: 100vw;
  padding: 1px 8% 4rem;

  .minifeatures-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    justify-content: space-evenly;
    justify-content: center;
    justify-items: center;
    /* display: flex;
    flex-wrap: wrap;
    flex-shrink: 3;
    margin: 1.5rem;
    justify-content: center;
    justify-items: space-evenly; */
  }

  h2 {
    text-align: center;
    margin: 4rem auto;
  }
`;

export default MiniFeatures;
