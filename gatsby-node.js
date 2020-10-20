const path = require('path')
// const { createFilePath } = require("gatsby-source-filesystem")
const { exit } = require('process')
const chunk = require('lodash/chunk')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        articles: allContentfulBlogPost(
          sort: { order: DESC, fields: [createdAt] }
        ) {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages
  const blogListTemplate = path.resolve('./src/templates/BlogList/index.tsx')
  const blogTemplate = path.resolve('./src/templates/Blog/index.tsx')

  const articles = result.data.articles.edges
  const PAGE_SIZE = 9

  const chunks = chunk(articles, PAGE_SIZE)

  chunks.forEach((_, index) => {
    createPage({
      path: index === 0 ? `blog` : `blog/${index + 1}`,
      component: blogListTemplate,
      context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: index + 1,
        hasNextPage: index != chunks.length - 1,
        nextPageLink: `/blog/${index + 2}`,
      },
    })
  })

  articles.forEach(({ node }) => {
    // loop over split pages
    createPage({
      path: `/blog/${node.slug}`,
      component: blogTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig()
  config.resolve.alias = {
    ...config.resolve.alias,
    '~root': path.resolve(__dirname, 'src'),
    '~components': path.resolve(__dirname, 'src', 'components'),
    '~utils': path.resolve(__dirname, 'src', 'utils'),
    '~templates': path.resolve(__dirname, 'src', 'templates'),
  }

  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  actions.replaceWebpackConfig(config)
}
