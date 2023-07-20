import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroNew from "../components/hero/HeroNew";
import Description from "../components/Description";
import Features from "../components/features/Features";
// import FeaturesExperiment from "../components/features/FeaturesExperiment";
import MiniFeatures from "../components/features/MiniFeatures";
import advantages from "../constants/advantages";
import actions from "../constants/actions";
import ContactSection from "../components/contact/ContactSection";
import BlogCards from "../components/blog/BlogCards";

const HomePage = ({ data }) => {
  const articles = data.allStrapiBlogArticle.nodes;
  return (
    <Layout>
      <HeroNew />
      <Description />
      <Features />
      <MiniFeatures features={advantages} title="Our philosophy" blue />
      <MiniFeatures features={actions} title="Support our work" />
      <ContactSection />
      <BlogCards title="Latest blog posts" articles={articles} showLink />
      {/* <FeaturesExperiment /> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    allStrapiBlogArticle(limit: 5, sort: { updatedAt: DESC }) {
      nodes {
        id
        blopost_slug
        blogpost_title
        blogpost_summary
        blog_categories {
          id
          blog_category_slug
          blog_category_name
        }
        blogpost_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default HomePage;

export const Head = () => <title>Home | Young Neuros</title>;
