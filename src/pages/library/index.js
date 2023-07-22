import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TitleH1 from "../../components/titles/TitleH1";
import TitleH2 from "../../components/titles/TitleH2";
import LibraryCards from "../../components/library/LibraryCards";

const LibraryPage = ({ data, location }) => {
  const {
    allStrapiPathology: { nodes: pathologies },
    allStrapiNeuroskill: { nodes: neuroskills },
  } = data;
  return (
    <Layout>
      <TitleH1 title="Library page" />
      <Container>
        <div className="section">
          <h2>How to use the library</h2>
          <p>
            Minim ipsum id fugiat do sint aliqua. Nulla eiusmod duis aliqua sunt
            aliquip dolor. Non eu reprehenderit esse quis Lorem commodo amet
            eiusmod exercitation commodo.
          </p>
          <h2>Choose what to start with</h2>
          <p>
            Minim ipsum id fugiat do sint aliqua. Nulla eiusmod duis aliqua sunt
            aliquip dolor. Non eu reprehenderit esse quis Lorem commodo amet
            eiusmod exercitation commodo. Aliquip magna eiusmod dolore velit.
            Voluptate veniam irure consequat ad qui ullamco dolore magna sunt
            laboris proident dolore.
          </p>
        </div>
        <div className="cards-and-contents-section">
          <aside className="aside">sidebar aside</aside>
          <div className="cards-section">
            <LibraryCards
              cards={pathologies}
              title="Pathologies"
              onLibraryPage
              arePathologies
            />
            <LibraryCards
              cards={neuroskills}
              title="Neuroskills"
              onLibraryPage
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 8% 1fr 8%;
  place-items: center;

  .section {
    grid-column: 2/3;
    text-align: left;
    margin-bottom: 3rem;
  }

  .cards-and-contents-section {
    min-height: 1000px;
    width: 100%;
    grid-column: 2/3;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    @media screen and (min-width: 900px) {
      grid-template-columns: 25% 73%;
      justify-content: space-between;
      /* column-gap: 1rem; */
    }
  }

  .cards-section {
    width: 100%;
    height: 100%;
  }

  .aside {
    background-color: pink;
    height: 100%;
    width: 100%;
    text-align: left;
  }

  h2 {
    margin: 1rem 0;
  }
`;

export const query = graphql`
  query {
    allStrapiPathology(sort: { pathology_name: ASC }) {
      nodes {
        strapi_id
        pathology_name
        pathology_slug
        pathology_summary
        pathology_image {
          alternativeText
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
            extension
          }
        }
        contents_link {
          link_text
          link_url
        }
      }
    }
    allStrapiNeuroskill(sort: { neuroskill_name: ASC }) {
      nodes {
        strapi_id
        neuroskill_name
        neuroskill_slug
        neuroskill_summary
        neuroskill_image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            extension
          }
        }
        contents_link {
          link_text
          link_url
        }
      }
    }
  }
`;

export default LibraryPage;
