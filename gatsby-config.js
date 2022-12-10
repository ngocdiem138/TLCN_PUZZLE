const { languages, defaultLanguage } = require('./src/languages');
module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Justcamp Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     name: `locale`
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-react-i18next",
    //   options: {
    //     langKeyDefault: "en",
    //     localeJsonSourceName: "locale",
    //     languages: ["en", "es", "de"],
    //     useLangKeyLayout: false,
    //     prefixDefault: true,
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false,
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?/*",
    //         getLanguageFromPath: true,
    //       },
    //     ],
    //   },
    // },
  ],
};

