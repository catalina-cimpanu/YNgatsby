import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TitleH1 from "../../components/titles/TitleH1";
import LibraryCards from "../../components/library/LibraryCards";
import LibrarySidebar from "../../components/library/LibrarySidebar";
import LibrarySidebarSmall from "../../components/library/LibrarySidebarSmall";
import ContentsButton from "../../components/buttons/ContentsButton";
import SEO from "../../components/SEO";

const LibraryPage = ({ data, location }) => {
  const {
    allStrapiPathology: { nodes: pathologies },
  } = data;
  return (
    <Layout>
      <TitleH1 title="Pathologies" />
      <Container>
        <div className="section">
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
        <div className="cards-and-sidebar-section">
          <LibrarySidebar
            title="Contents"
            pathologies={pathologies}
            fromLibraryPage
          />

          <div className="cards-section">
            <LibraryCards
              cards={pathologies}
              title="Pathologies"
              onLibraryPage
              arePathologies
            />
          </div>
        </div>
        <ContentsButton buttonText="Contents+" />
        <LibrarySidebarSmall
          title="Contents"
          pathologies={pathologies}
          fromLibraryPage
        />
      </Container>
    </Layout>
  );
};

/* i needed an element to contain my stuff and be able to use styled components */
const Container = styled.section`
  .section {
    grid-column: 2/3; /* place itself in regard to mother element = main from layout */
    text-align: left;
    margin-bottom: 4rem;
  }

  .cards-and-sidebar-section {
    width: 100%;
    grid-column: 2/3; /* place itself in regard to mother element = main from layout */
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    @media screen and (min-width: 900px) {
      grid-template-columns: 25% 70%;
      grid-template-areas: "sidebar cards";
      justify-content: space-between;
    }
  }

  .cards-section {
    grid-area: cards;
    width: 100%;
    height: 100%;
  }

  .separator {
    height: 4rem;
  }

  .aside {
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
              gatsbyImageData(layout: FULL_WIDTH)
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

export const Head = () => (
  <SEO
    title="Pathologies"
    description="Guidelines & Resources by Pathology"
    pathname="pathologies"
  />
);
