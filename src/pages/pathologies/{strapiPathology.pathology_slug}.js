import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/layout";
import LibrarySidebar from "../../components/library/LibrarySidebar";
import AccordionSection from "../../components/library/AccordionSection";

const PathologyPageTemplate = ({ data }) => {
  const {
    strapiPathology: {
      pathology_name,
      pathology_description: {
        data: {
          childMarkdownRemark: { html },
        },
      },
      pathology_image: {
        alternativeText,
        localFile: { extension, publicURL, childImageSharp },
      },
      guidelines,
      resources,
      links,
    },
  } = data;

  return (
    <Layout>
      <Container>
        <div className="hero">
          {!childImageSharp && extension === "svg" ? (
            <img
              className="hero-img svg"
              src={publicURL}
              alt={alternativeText}
            />
          ) : (
            <GatsbyImage
              className="hero-img"
              image={childImageSharp.gatsbyImageData}
              alt={alternativeText}
            />
          )}
          <h1 className="hero-title">{pathology_name}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="body">
          <LibrarySidebar title="Contents" />
          <div className="infos">
            <AccordionSection
              title="Guidelines"
              infos={guidelines}
              areGuidelines
            />
            <AccordionSection
              title="Resources"
              infos={resources}
              areResources
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  wrap: nowrap;
  gap: 1rem;

  .hero {
    display: grid;
    grid-template-areas: "hero";
    align-items: center;
    justify-items: center;
    height: 25vh;
    @media screen and (min-width: 900px) {
      height: 40vh;
    }

    .hero-img {
      grid-area: hero;
      overflow: hidden;
      width: 100%;
      max-height: 150%;
      opacity: 0.35;
    }

    .hero-title {
      grid-area: hero;
      text-align: center;
      z-index: 2;
      font-size: clamp(1rem, 9vw, 4rem);
      padding: clamp(1rem, 4vw, 2rem);
      background-color: ${(props) => props.theme.colors.bg};
      border-radius: ${(props) => props.theme.radiusL};
      box-shadow: ${(props) => props.theme.shadows.shadowTab};
    }
  }

  .body {
    width: 100%;
    margin-bottom: 4rem;
    display: grid;
    grid-template-areas: "infos";
    @media screen and (min-width: 900px) {
      grid-template-columns: 25% 70%;
      grid-template-areas: "sidebar infos";
      justify-content: space-between;
    }

    .infos {
      grid-area: infos;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
  }
`;

export const query = graphql`
  query ($pathology_slug: String) {
    strapiPathology(pathology_slug: { eq: $pathology_slug }) {
      pathology_name
      pathology_slug
      pathology_description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      pathology_image {
        alternativeText
        localFile {
          extension
          publicURL
        }
      }
      guidelines {
        guideline_title
        guideline_slug
        guideline_source
        guideline_body {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        guideline_image {
          alternativeText
          localFile {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        guideline_note {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        locations {
          location_name
        }
        guideline_internal_link {
          link_text
          link_url
        }
        guideline_external_link {
          link_text
          link_url
        }
        language {
          language_name
        }
      }
      resources {
        resource_title
        resource_slug
        resource_source
        resource_body {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        resource_image {
          alternativeText
          localFile {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        resource_note {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        resource_internal_link {
          link_text
          link_url
        }
        resource_external_link {
          link_text
          link_url
        }
        pricing {
          pricing_type
          pricing_slug
          pricing_description
        }
        language {
          language_name
        }
      }
      links {
        link_text
        link_url
      }
    }
  }
`;

export default PathologyPageTemplate;
