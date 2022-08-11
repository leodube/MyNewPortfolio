import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["article", "company", "author"],
  singleTypes: [],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Leo Dube",
    description: "Personal portfolio",
    author: "@leodube",
    siteUrl: `https://www.leodube.ca`,
  },
  
  proxy: {
    prefix: "/admin",
    url: process.env.ADMIN_API_URL || "http://localhost:1337",
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
