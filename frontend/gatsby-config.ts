import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Keystone",
        fieldName: "keystone",
        url: process.env.ADMIN_API_URL,
      },
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
