import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import TitleH1 from "../../components/titles/TitleH1";
import TitleH2 from "../../components/titles/TitleH2";
import LoadBlogposts from "../../components/blog/LoadBlogposts";
import BlogSidebar from "../../components/blog/BlogSidebar";
import ContentsButton from "../../components/buttons/ContentsButton";
import BlogSidebarSmall from "../../components/blog/BlogSidebarSmall";
import SEO from "../../components/SEO";

const BlogCategoryPageTemplate = ({ data }) => {
  const {
    strapiBlogCategory: { category_name, blog_category_slug, blog_posts },
    allStrapiBlogCategory: { nodes: categories },
  } = data;
  return (
    <Layout>
      <TitleH1 title="Blog" />
      <BlogPageContainer>
        <TitleH2 title={category_name} />
        <LoadBlogposts articles={blog_posts} title="Latest Posts" />
        <BlogSidebar categories={categories} />
        <ContentsButton buttonText="Categories" />
        <BlogSidebarSmall categories={categories} />
      </BlogPageContainer>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($blog_category_slug: String) {
    strapiBlogCategory(blog_category_slug: { eq: $blog_category_slug }) {
      category_name: blog_category_name
      blog_category_slug
      blog_posts {
        blogpost_title
        blogpost_slug
        blogpost_summary
        updatedAt(formatString: "DD MMMM YYYYY")
        author {
          username
        }
        blog_categories {
          blog_category_name
        }
        blogpost_image {
          localFile {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
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

const BlogPageContainer = styled.div`
  display: grid;

  @media screen and (min-width: 900px) {
    grid-template-columns: 75% 20%;
    justify-content: space-between;
  }
`;

export default BlogCategoryPageTemplate;

export const Head = ({ data }) => {
  const {
    strapiBlogCategory: { category_name, blog_category_slug },
  } = data;
  return (
    <SEO
      title={category_name}
      description={`Young Neuros Blog`}
      pathname={`/blog/${blog_category_slug}`}
    />
  );
};
