import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title, description, type, image, alt, pathname, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          twitterUsername
          image
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        siteUrl,
        description: defaultDescription,
        twitterUsername,
        image: defaultImage,
      },
    },
  } = data;
  const seo = {
    title: `${title || defaultTitle}`,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    alt: alt || "an image",
    url: `${siteUrl}${pathname || ""}`,
    twitterUsername,
    type: `${type || "website"}`,
  };
  console.log("data from SEO, title:", defaultTitle);
  console.log("seo image from SEO: ", seo.image);
  return (
    <>
      <title>{seo.title}</title>
      <meta name="title" property="og:title" content={seo.title} />
      <meta
        name="description"
        property="og:description"
        content={seo.description}
      />
      <meta name="image" property="og:image" content={seo.image} />
      <meta property="og:site_name" content="Young Neuros" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:image:alt" content={seo.alt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {children}
    </>
  );
};

export default SEO;
