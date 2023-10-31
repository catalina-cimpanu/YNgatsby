import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import TitleH1 from "../../components/titles/TitleH1";
import TitleH2 from "../../components/titles/TitleH2";
import LoadBlogposts from "../../components/blog/LoadBlogposts";
import BlogSidebar from "../../components/blog/BlogSidebar";
import BlogSidebarSmall from "../../components/blog/BlogSidebarSmall";
import ContentsButton from "../../components/buttons/ContentsButton";
import SEO from "../../components/SEO";

const BlogPage = ({
  data: {
    allStrapiBlogArticle: { nodes: articles },
    allStrapiBlogCategory: { nodes: categories },
  },
}) => {
  console.log("from blogpage:", categories);
  return (
    <Layout>
      <TitleH1 title="Blog" />
      <BlogPageContainer>
        <TitleH2 title="Latest Posts" />
        <LoadBlogposts articles={articles} title="Latest Posts" />
        <BlogSidebar categories={categories} />
        <ContentsButton buttonText="Categories" />
        <BlogSidebarSmall categories={categories} />
      </BlogPageContainer>
    </Layout>
  );
};

const BlogPageContainer = styled.div`
  display: grid;

  @media screen and (min-width: 900px) {
    grid-template-columns: 75% 20%;
    justify-content: space-between;
  }
`;

export const query = graphql`
  query {
    allStrapiBlogArticle(sort: { updatedAt: DESC }) {
      nodes {
        post_id: id
        updatedAt(formatString: "DD MMMM YYYY")
        author {
          username
        }
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
        blog_categories {
          blog_category_name
        }
      }
    }
    allStrapiBlogCategory(sort: { blog_category_name: ASC }) {
      nodes {
        blog_category_name
        blog_category_slug
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <SEO title="Young Neuros Blog" pathname="blog" />;
