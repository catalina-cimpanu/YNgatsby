import React from "react";
import styled from "styled-components";
import LibraryCard from "./LibraryCard";

function LibraryCards({ cards, title, onLibraryPage, arePathologies }) {
  return (
    <>
      {onLibraryPage && <H3>{title}</H3>}
      <ItemsSection>
        {arePathologies
          ? cards.map((card) => {
              const {
                strapi_id,
                pathology_name,
                pathology_slug,
                pathology_summary,
                pathology_image,
                contents_link,
              } = card;
              return (
                <LibraryCard
                  key={strapi_id}
                  cardTitle={pathology_name}
                  cardSummary={pathology_summary}
                  cardSlug={pathology_slug}
                  cardImg={pathology_image}
                  contentsLink={contents_link}
                  onLibraryPage={onLibraryPage}
                  isPathology
                />
              );
            })
          : cards.map((card) => {
              const {
                strapi_id,
                neuroskill_name,
                neuroskill_slug,
                neuroskill_summary,
                neuroskill_image,
                contents_link,
              } = card;
              return (
                <LibraryCard
                  key={strapi_id}
                  cardTitle={neuroskill_name}
                  cardSummary={neuroskill_summary}
                  cardSlug={neuroskill_slug}
                  cardImg={neuroskill_image}
                  contentsLink={contents_link}
                  onLibraryPage={onLibraryPage}
                />
              );
            })}
      </ItemsSection>
    </>
  );
}
const ItemsSection = styled.section`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
const H3 = styled.h3`
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  border-top: 3px solid ${(props) => props.theme.colors.primary};
  margin: 0 0 3rem 0;
  padding: 1rem 0;
`;

export default LibraryCards;
