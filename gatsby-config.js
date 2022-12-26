const { languages, defaultLanguage } = require('./src/languages');
module.exports = {
  pathPrefix: "/TLCN_PUZZLE",
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Justcamp Gatsby`,
  },
  plugins: [
    // 'gatsby-plugin-postcss',
    // `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `transform-runtime`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    
  ],
};

