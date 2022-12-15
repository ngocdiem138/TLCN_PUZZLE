const path = require('path');
// const locales = require('./src/utils/constants/locales')
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/404/)) {
    page.context.layout = "bare";
    createPage(page);
  }

  if (page.path.match(/dashboard/)) {
    page.context.layout = "dashboard";
    createPage(page);
  }

  if (page.path.match(/^\/groups/)) {
    createPage({
      path: '/groups',
      matchPath: '/groups/*',
      component: path.resolve(`src/pages/groups.js`),
    })
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@rehooks\/local-storage/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreateBabelConfig = ({ actions }) => {
  if (process.env.NODE_ENV !== 'development') {
    actions.setBabelPlugin({
      name: '@babel/plugin-transform-regenerator',
      options: {},
    });
    actions.setBabelPlugin({
      name: '@babel/plugin-transform-runtime',
      options: {},
    });
  }
};
