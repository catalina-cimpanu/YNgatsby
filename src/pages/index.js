import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroNew from "../components/hero/HeroNew";
import Description from "../components/Description";
import Features from "../components/features/Features";
import MiniFeatures from "../components/features/MiniFeatures";
import ContactSection from "../components/contact/ContactSection";
import BlogCards from "../components/blog/BlogCards";
import GoToGuideSection from "../components/guide/GoToGuideSection";
import Seo from "../components/SEO";

const HomePage = ({ data }) => {
  const articles = data.allStrapiBlogArticle.nodes;

  return (
    <Layout homepage>
      <HeroNew />
      <Description />
      <Features />
      <MiniFeatures />
      <ContactSection />
      <BlogCards title="Latest blog posts" articles={articles} showLink />
      <GoToGuideSection />
    </Layout>
  );
};

// const Separator = styled.div`
//   z-index: 1;
//   height: 80vh;
//   background-color: ${(props) => props.theme.colors.sectionBg};
// `;

export const query = graphql`
  query {
    allStrapiBlogArticle(limit: 5, sort: { updatedAt: DESC }) {
      nodes {
        id
        blogpost_slug
        blogpost_title
        blogpost_summary
        blog_categories {
          id
          blog_category_slug
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
          alternativeText
        }
      }
    }
  }
`;

export default HomePage;

export const Head = () => <Seo />;
