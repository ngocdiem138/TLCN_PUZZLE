const { languages, defaultLanguage } = require('./src/languages');
const webpack = require('webpack');
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: [`/assets/`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': 'roboto-regular, Arial',
            'primary-color': '#2f5785',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-pnpm'
  ],
};

