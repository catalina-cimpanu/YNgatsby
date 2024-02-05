import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { RiPriceTag3Fill, RiUserFill, RiCalendarFill } from "react-icons/ri";
import RichText from "../../components/RichText";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import BlogSidebar from "../../components/blog/BlogSidebar";
import ContentsButton from "../../components/buttons/ContentsButton";
import BlogSidebarSmall from "../../components/blog/BlogSidebarSmall";
import ShareButtons from "../../components/buttons/ShareButtons";
import PreviousNextButtons from "../../components/blog/PreviousNextButtons";
import Seo from "../../components/SEO";

const BlogpostPageTemplate = ({ data }) => {
  const {
    strapiBlogArticle: {
      blogpost_title,
      blogpost_slug,
      blogpost_summary,
      updatedAt,
      author,
      language,
      blog_categories,
      blogpost_image: {
        0: {
          localFile: { extension, publicURL, childImageSharp },
          alternativeText,
        },
      },
      blogpost_body: {
        data: { blogpost_body },
      },
    },
    allStrapiBlogArticle: { edges },
    allStrapiBlogCategory: { nodes: categories },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const activeArticle = edges.filter(
    (art) => art.node.blogpost_slug === blogpost_slug
  )[0]; /* because filter returns a list, but in this case it will always 
  return a list with one element, so you take this first element */

  return (
    <Layout>
      <Container>
        <div className="button-div">
          <SecondaryButton buttonText="❮ back to blog" buttonLink="/blog" />
        </div>

        <div className="blogpost-head">
          <h1 className="blog-title">{blogpost_title}</h1>
          <ul className="list">
            <RiUserFill className="icon" />
            <h4>by {author ? author.username : "Catalina"} </h4>
          </ul>
          <ul className="list">
            <RiCalendarFill className="icon" />
            <h4> Last updated {updatedAt}</h4>
          </ul>
          <ul className="list">
            <RiPriceTag3Fill className="icon" />
            {blog_categories.length > 0 ? (
              blog_categories.map((category, index) => (
                <li className="tag" key={index}>
                  {category.blog_category_name}
                </li>
              ))
            ) : (
              <li className="tag">uncategorized</li>
            )}
          </ul>
        </div>

        <article className="blogpost-body">
          {!childImageSharp && extension === "svg" ? (
            <img className="img svg" src={publicURL} alt={alternativeText} />
          ) : (
            <GatsbyImage
              className="img"
              image={childImageSharp.gatsbyImageData}
              alt={alternativeText}
            />
          )}

          <RichText content={blogpost_body} />
        </article>

        <div className="blogpost-footer">
          <div className="share-div">
            <h4>
              If you found value in this article, share it !
              <span role="img" aria-label="eyeglasses and speak bubble">
                🤓💬
              </span>
            </h4>
            <ShareButtons
              url={`${siteUrl}/blog/${blogpost_slug}`}
              title={blogpost_title}
              description={blogpost_summary}
            />
          </div>

          <PreviousNextButtons activeArticle={activeArticle} />
        </div>

        <div className="sidebar">
          <BlogSidebar categories={categories} />
        </div>
        <ContentsButton buttonText="Categories" />
        <BlogSidebarSmall categories={categories} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "button-back"
    "post-head"
    "post-body"
    "post-footer";
  grid-row-gap: 1.5rem;
  @media screen and (min-width: 900px) {
    grid-template-columns: 75% 20%;
    grid-template-areas:
      "button-back ."
      "post-head ."
      "post-body sidebar"
      "post-footer sidebar";
    justify-content: space-between;
  }

  .button-div {
    grid-area: button-back;
    position: sticky;
    top: 5.5rem; /* for the sticky positioning */
    margin: 3rem 0 1.5rem 0;
    z-index: 5;
  }

  .blogpost-head {
    grid-area: post-head;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-content: space-around;
    justify-items: left;

    .list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
    }

    .tag {
      background-color: ${(props) => props.theme.colors.tag};
      border-radius: ${(props) => props.theme.radiusL};
      padding: 0.1rem 1rem 0 1rem;
      word-break: break-all;
    }

    .icon {
      align-self: center;
      justify-self: left;
      height: 100%;
    }
  }

  .blogpost-body {
    grid-area: post-body;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .img {
      border-radius: ${(props) => props.theme.radiusL};
      max-height: 50vh;
      width: 100%;
    }

    .svg {
      background-color: ${(props) => props.theme.colors.sectionBg2};
      padding: 2rem;
    }
  }

  .blogpost-footer {
    grid-area: post-footer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .share-div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      place-items: center;
      text-align: center;
    }
  }

  .sidebar {
    grid-area: sidebar;
  }
`;

export const query = graphql`
  query ($blogpost_slug: String) {
    strapiBlogArticle(blogpost_slug: { eq: $blogpost_slug }) {
      blogpost_title
      blogpost_slug
      updatedAt(formatString: "DD MMMM YYYY")

      language {
        language_name
      }
      blog_categories {
        blog_category_name
        blog_category_slug
      }
      blogpost_image {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          publicURL
          extension
        }
        formats {
          small {
            url
          }
        }
      }
      blogpost_summary
      blogpost_body {
        data {
          blogpost_body
        }
      }
    }
    allStrapiBlogArticle(sort: { updatedAt: DESC }) {
      edges {
        node {
          blogpost_slug
        }
        next {
          blogpost_slug
          blogpost_title
        }
        previous {
          blogpost_slug
          blogpost_title
        }
      }
    }
    allStrapiBlogCategory(sort: { blog_category_name: ASC }) {
      nodes {
        blog_category_name
        blog_category_slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default BlogpostPageTemplate;

export const Head = ({ data }) => {
  const {
    strapiBlogArticle: {
      blogpost_title,
      blogpost_slug,
      blogpost_summary,
      author,
      blogpost_image: {
        alternativeText,
        localFile: { publicURL },
      },
    },
  } = data;
  return (
    <Seo
      title={blogpost_title}
      description={blogpost_summary}
      pathname={`/blog/${blogpost_slug}`}
      image={publicURL}
      alt={alternativeText}
    />
  );
};
