/**
/ * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Young Neuros`,
    siteUrl: `http://localhost:8000/`,
    // siteUrl: "https://youngneuros.netlify.app/",
    description: "Stay smart. Stay in touch.",
    twitterUsername: `@Young_Neuros`,
    image: "hero_image.png",
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
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
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        queryLimit: 10000,
        collectionTypes: [
          "blog-article",
          "blog-category",
          "pathology",
          "neuroskill",
          "sub-neuroskill",
          "guideline",
          "resource",
          "resource-type",
          "pricing",
          "link",
          "location",
          "language",
          "feature",
          "minifeature",
          "legal-page",
          "menu-link",
        ],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
};
