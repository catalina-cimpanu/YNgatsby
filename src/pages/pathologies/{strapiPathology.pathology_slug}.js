import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LibrarySidebar from "../../components/library/LibrarySidebar";
import Infos from "../../components/library/Infos";
import LibrarySidebarSmall from "../../components/library/LibrarySidebarSmall";
import ContentsButton from "../../components/buttons/ContentsButton";
import Seo from "../../components/SEO";

const PathologyPageTemplate = ({ data }) => {
  const {
    pathology: {
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
          <h1 className="hero-title">{pathology_name}</h1>
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="body">
          <LibrarySidebar
            title="Contents"
            guidelines={guidelines}
            resources={resources}
            links={links}
            locations={locations}
          />

          <div className="infos">
            <Infos
              guidelines={guidelines}
              resources={resources}
              links={links}
              locations={locations}
            />
          </div>
        </div>
        <ContentsButton buttonText="Contents+" />
        <LibrarySidebarSmall
          title="Contents"
          guidelines={guidelines}
          resources={resources}
          links={links}
          locations={locations}
        />
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
    pathology: strapiPathology(pathology_slug: { eq: $pathology_slug }) {
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
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    guidelines: allStrapiGuideline(
      filter: { pathology: { pathology_slug: { eq: $pathology_slug } } }
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
        contents_link {
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
      filter: { pathology: { pathology_slug: { eq: $pathology_slug } } }
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
        contents_link {
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
      filter: { pathology: { pathology_slug: { eq: $pathology_slug } } }
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

export default PathologyPageTemplate;

export const Head = ({ data }) => {
  const {
    pathology: {
      pathology_name,
      pathology_slug,
      pathology_image: {
        alternativeText,
        localFile: { publicURL },
      },
    },
  } = data;
  return (
    <Seo
      title={pathology_name}
      description={`Library - ${pathology_name}`}
      pathname={`/pathologies/${pathology_slug}`}
      image={publicURL}
      alt={alternativeText}
    />
  );
};
