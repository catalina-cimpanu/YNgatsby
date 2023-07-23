import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { RiPriceTag3Fill, RiUserFill, RiCalendarFill } from "react-icons/ri";
import RichText from "../../components/RichText";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const BlogpostPageTemplate = ({ data }) => {
  const {
    strapiBlogArticle: {
      blogpost_title,
      updatedAt,
      author,
      language,
      blog_categories,
      blogpost_image: {
        alternativeText,
        localFile: { extension, publicURL, childImageSharp },
      },
      blogpost_body: {
        data: { blogpost_body },
      },
    },
  } = data;

  return (
    <Layout>
      {/* <ButtonDiv>
        <SecondaryButton buttonText="❮ back to blog" buttonLink="blog" />
      </ButtonDiv> */}
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

        <aside className="aside">
          <h4>Categories:</h4>aside with tags
        </aside>
      </Container>
    </Layout>
  );
};

const ButtonDiv = styled.div`
  grid-column: 1 / 3;
  position: sticky;
  top: 5.5rem; /* for the sticky positioning */
  /* padding: 0 0 3rem 8%; */
  z-index: 3;
`;

const Container = styled.div`
  padding: 0 8%;
  width: 100%;
  display: grid;
  /* grid-row-gap: 1rem; */
  @media screen and (min-width: 900px) {
    grid-template-columns: 75% 20%;
    justify-content: space-between;
  }

  .button-div {
    position: sticky;
    top: 5.5rem; /* for the sticky positioning */
    margin: 3rem 0;
    z-index: 5;
  }

  .blogpost-head {
    grid-column: 1/2;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
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
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .img {
      max-height: 50vh;
      border-radius: ${(props) => props.theme.radiusL};
    }

    .svg {
      background-color: ${(props) => props.theme.colors.sectionBg2};
      padding: 2rem;
    }
  }

  .aside {
    text-align: right;
  }
`;

export const query = graphql`
  query ($blogpost_slug: String) {
    strapiBlogArticle(blogpost_slug: { eq: $blogpost_slug }) {
      blogpost_title
      updatedAt(formatString: "DD MMMM YYYY")
      author {
        username
      }
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
      }
      blogpost_body {
        data {
          blogpost_body
        }
      }
    }
  }
`;

export default BlogpostPageTemplate;
