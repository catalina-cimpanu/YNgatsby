import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import HeroNew from "../components/hero/HeroNew";
import Description from "../components/Description";
import Features from "../components/features/Features";
import FeaturesOld from "../components/features/FeaturesOld";
import MiniFeatures from "../components/features/MiniFeatures";
import advantages from "../constants/advantages";
import actions from "../constants/actions";
import ContactSection from "../components/contact/ContactSection";
import BlogCards from "../components/blog/BlogCards";
import GoToGuideSection from "../components/guide/GoToGuideSection";

const HomePage = ({ data }) => {
  const articles = data.allStrapiBlogArticle.nodes;
  return (
    <Layout homepage>
      <HeroNew />
      <Description />
      {/* <Features /> */}
      {/* <Separator /> */}
      <FeaturesOld />
      <MiniFeatures features={advantages} title="Our philosophy" blue />
      <MiniFeatures features={actions} title="Support our work" />
      <ContactSection />
      <BlogCards title="Latest blog posts" articles={articles} showLink />
      <GoToGuideSection />
    </Layout>
  );
};

const Separator = styled.div`
  z-index: 1;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.sectionBg};
`;

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

export const Head = () => <title>Home | Young Neuros</title>;
