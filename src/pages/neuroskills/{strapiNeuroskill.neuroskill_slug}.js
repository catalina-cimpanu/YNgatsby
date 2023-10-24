import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LibrarySidebar from "../../components/library/LibrarySidebar";
import InfosSection from "../../components/library/InfosSection";

const NeuroskillPageTemplate = ({ data }) => {
  const {
    neuroskill: {
      neuroskill_name,
      neuroskill_description: {
        data: {
          childMarkdownRemark: { html },
        },
      },
      neuroskill_image: {
        alternativeText,
        localFile: { extension, publicURL, childImageSharp },
      },
    },
    guidelines: { nodes: guidelines },
    resources: { nodes: resources },
    links: { nodes: links },
    locations: { nodes: locations },
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
          <h1 className="hero-title">{neuroskill_name}</h1>
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="body">
          <LibrarySidebar title="Contents" />

          <div className="infos">
            <InfosSection
              title="Guidelines"
              infos={guidelines}
              type="guidelines"
              locations={locations}
            />

            <InfosSection
              title="Resources"
              infos={resources}
              type="resources"
            />

            <InfosSection
              title="Links"
              infos={links}
              type="links"
              locations={locations}
            />

            {/* <LinksSection title="Links" links={links} locations={locations} /> */}
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
  flex-wrap: nowrap;
  gap: 2rem;

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
      -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
      );
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
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
  query ($neuroskill_slug: String) {
    neuroskill: strapiNeuroskill(neuroskill_slug: { eq: $neuroskill_slug }) {
      neuroskill_name
      neuroskill_slug
      neuroskill_description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      neuroskill_image {
        alternativeText
        localFile {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    guidelines: allStrapiGuideline(
      filter: { neuroskill: { neuroskill_slug: { eq: $neuroskill_slug } } }
      sort: { guideline_title: ASC }
    ) {
      nodes {
        guideline_title
        guideline_slug
        guideline_source
        locations {
          location_name
        }
        language {
          language_name
          language_emoji
          language_flag {
            localFile {
              flag_extension: extension
              flag_publicURL: publicURL
              flag_childImageSharp: childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
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
        guideline_body {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        guideline_external_link {
          link_text
          link_url
        }
        guideline_internal_link {
          link_text
          link_url
        }
        guideline_note {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      totalCount
    }
    resources: allStrapiResource(
      filter: { neuroskill: { neuroskill_slug: { eq: $neuroskill_slug } } }
      sort: { resource_title: ASC }
    ) {
      nodes {
        resource_type {
          resource_type_name
        }
        resource_title
        resource_slug
        resource_source
        resource_note {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        resource_body {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        pricing {
          pricing_type
          pricing_description
        }
        language {
          language_name
          language_emoji
          language_flag {
            localFile {
              flag_extension: extension
              flag_publicURL: publicURL
              flag_childImageSharp: childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
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
        resource_internal_link {
          link_text
          link_url
        }
        resource_external_link {
          link_text
          link_url
        }
      }
      totalCount
    }
    links: allStrapiLink(
      filter: { neuroskill: { neuroskill_slug: { eq: $neuroskill_slug } } }
      sort: { link_text: ASC }
    ) {
      nodes {
        link_text
        link_url
        locations {
          location_name
        }
      }
    }
    locations: allStrapiLocation(sort: { location_name: ASC }) {
      nodes {
        location_name
      }
    }
  }
`;

export default NeuroskillPageTemplate;
