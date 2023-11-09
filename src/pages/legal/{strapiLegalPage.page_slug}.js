import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../src/components/Layout";
import * as legalStyles from "./legal.module.css";
import Seo from "../../components/SEO";

const LegalPageTemplate = ({ data }) => {
  const {
    strapiLegalPage: {
      page_title,
      updatedAt,
      page_content: {
        data: {
          childMarkdownRemark: { html },
        },
      },
    },
  } = data;
  return (
    <Layout nocontents>
      <div className={legalStyles.container}>
        <h1>{page_title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>This document was last updated on {updatedAt}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($page_slug: String) {
    strapiLegalPage(page_slug: { eq: $page_slug }) {
      page_title
      page_slug
      updatedAt(formatString: "DD MMMM YYYY")
      page_content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default LegalPageTemplate;

export const Head = ({ data }) => {
  const {
    strapiLegalPage: { page_title, page_slug },
  } = data;
  return <Seo title={page_title} pathname={`/legal/${page_slug}`} />;
};
