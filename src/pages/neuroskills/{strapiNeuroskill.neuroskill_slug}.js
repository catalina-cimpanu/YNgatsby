import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LibrarySidebar from "../../components/library/LibrarySidebar";
import Infos from "../../components/library/Infos";
import LibrarySidebarSmall from "../../components/library/LibrarySidebarSmall";
import ContentsButton from "../../components/buttons/ContentsButton";
import SEO from "../../components/SEO";

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
      sub_neuroskills,
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
          <LibrarySidebar
            title={sub_neuroskills.length > 0 ? "" : "Contents"}
            guidelines={guidelines}
            resources={resources}
            links={links}
            locations={locations}
            sub_neuroskills={
              sub_neuroskills.length > 0 ? sub_neuroskills : null
            }
          />

          <div className="infos">
            {sub_neuroskills.length > 0 ? (
              sub_neuroskills.map((subNeuroskill) => {
                let name = subNeuroskill.subneuroskill_name;
                let filteredGuidelines = guidelines.filter(
                  (guideline) =>
                    guideline.sub_neuroskill.subneuroskill_name === name
                );
                let filteredResources = resources.filter(
                  (resource) =>
                    resource.sub_neuroskill.subneuroskill_name === name
                );
                let filteredLinks = links.filter(
                  (link) => link.sub_neuroskill.subneuroskill_name === name
                );
                return (
                  <>
                    <h2 id={name} className="titleH2">
                      {name}
                    </h2>
                    <Infos
                      guidelines={filteredGuidelines}
                      resources={filteredResources}
                      links={filteredLinks}
                      locations={locations}
                      subskill={name}
                    />
                  </>
                );
              })
            ) : (
              <Infos
                guidelines={guidelines}
                resources={resources}
                links={links}
                locations={locations}
              />
            )}
          </div>
        </div>
        <ContentsButton buttonText="Contents+" />
        <LibrarySidebarSmall
          title={sub_neuroskills.length > 0 ? "" : "Contents"}
          guidelines={guidelines}
          resources={resources}
          links={links}
          locations={locations}
          sub_neuroskills={sub_neuroskills.length > 0 ? sub_neuroskills : null}
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

      .titleH2 {
        text-align: left;
        font-size: clamp(1rem, 7vw, 3rem);
        color: ${(props) => props.theme.colors.H3toH6};
        border-bottom: 3px solid ${(props) => props.theme.colors.H1H2};
        border-top: 3px solid ${(props) => props.theme.colors.H1H2};
        padding: 1rem 0;
      }
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
      sub_neuroskills {
        subneuroskill_name
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
        sub_neuroskill {
          subneuroskill_name
        }
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
        sub_neuroskill {
          subneuroskill_name
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
      filter: { neuroskill: { neuroskill_slug: { eq: $neuroskill_slug } } }
      sort: { link_text: ASC }
    ) {
      nodes {
        link_text
        link_url
        sub_neuroskill {
          subneuroskill_name
        }
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

export const Head = ({ data }) => {
  const {
    neuroskill: {
      neuroskill_name,
      neuroskill_slug,
      neuroskill_image: {
        alternativeText,
        localFile: { publicURL },
      },
    },
  } = data;
  return (
    <SEO
      title={neuroskill_name}
      description={`Library - ${neuroskill_name}`}
      pathname={`/neuroskills/${neuroskill_slug}`}
      image={publicURL}
      alt={alternativeText}
    />
  );
};
