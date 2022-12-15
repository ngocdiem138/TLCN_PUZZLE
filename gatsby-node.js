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

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  ...process.env.NODE_ENV !== 'development' && {
    plugins: babelrc.plugins.concat(['transform-regenerator', 'transform-runtime']),
  },
});

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config._config.entry.app = ['babel-polyfill', config._config.entry.app];
  }
  return config;
};
