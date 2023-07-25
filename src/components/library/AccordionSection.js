import React from "react";
import styled from "styled-components";
import AccordionsList from "./AccordionsList";

const AccordionSection = ({ title, infos, areGuidelines, areResources }) => {
  return (
    <Section>
      <h2> {title}</h2>
      {infos.length > 0 ? (
        <AccordionsList infos={infos} areGuidelines areResources />
      ) : (
        <p>
          Sorry, nothing here... yet!{" "}
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

export default AccordionSection;
