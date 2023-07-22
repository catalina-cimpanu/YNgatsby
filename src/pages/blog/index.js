import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import TitleH1 from "../../components/titles/TitleH1";
import TitleH2 from "../../components/titles/TitleH2";
import LoadBlogposts from "../../components/blog/LoadBlogposts";

const BlogPage = ({
  data: {
    allStrapiBlogArticle: { nodes: articles },
  },
}) => {
  return (
    <Layout>
      <TitleH1 title="Blog" />
      <BlogPageContainer>
        <TitleH2 title="Latest Posts" />
        <LoadBlogposts articles={articles} title="Latest Posts" />
        <aside className="aside">aside here </aside>
      </BlogPageContainer>
    </Layout>
  );
};

const BlogPageContainer = styled.div`
  margin: 0 8%;
  display: grid;

  @media screen and (min-width: 900px) {
    /* grid-template-columns: 65% 10% 25%; */
    /* grid-column-gap: 10%; */
    grid-template-columns: 70% 25%;
    justify-content: space-between;
  }

  .aside {
    /* grid-column: 3/4; */
    /* margin-top: 11rem; */
  }
`;

export const query = graphql`
  query {
    allStrapiBlogArticle(sort: { updatedAt: DESC }) {
      nodes {
        post_id: id
        updatedAt(formatString: "DD MMMM YYYY")
        blogpost_title
        blogpost_slug
        blogpost_summary
        blogpost_image {
          localFile {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
        blogpost_body {
          data {
            blogpost_body
          }
        }
        blog_categories {
          blog_category_id: id
          blog_category_name
          blog_category_slug
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <title>Blog | Young Neuros</title>;
