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

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig();

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
  } else {
    config.resolve = {
      alias: { '@': path.resolve(__dirname, 'src') },
    };
  }
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@rehooks\/local-storage/,
            use: loaders.null(),
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ],
      },
    })
  }
}
