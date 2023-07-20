/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_TOKEN,
  queryParams: {
    publicationState:
      process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
    populate: {
      cover: "*",
      blocks: {
        populate: "*",
      },
    },
  },
  collectionTypes: ["blog-article"],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    // Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  siteMetadata: {
    title: `Young Neuros`,
    siteUrl: `https://youngneuros.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-svgr-svgo",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo_icon.png",
        name: `Young Neuros`,
        short_name: `Young Neuros`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#28C1EA`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/", "/about/"],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
