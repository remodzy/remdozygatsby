const path = require('path')
// const { createFilePath } = require("gatsby-source-filesystem")
const chunk = require('lodash/chunk')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await Promise.all([
    createBlogPages(graphql, createPage, reporter),
    createGenericPages(graphql, createPage, reporter),
    createProductsPages(graphql, createPage, reporter),
    createPrivacyAndTermsPages(graphql, createPage, reporter),
  ])
}

async function createPrivacyAndTermsPages(graphql, createPage, reporter) {
  const result = await graphql(
    `
      {
        info: allContentfulInfoPages {
          edges {
            node {
              id
              title
              body {
                body: raw
              }
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

  const richTextTemplate = path.resolve('./src/templates/RichText/index.tsx')

  const pages = result.data.info.edges

  pages.forEach(({ node: page }) => {
    createPage({
      path: page.title.toLowerCase(),
      component: richTextTemplate,
      context: {
        title: page.title,
        document: JSON.parse(page.body.body),
      },
    })
  })
}

// Create blog-list pages
async function createBlogPages(graphql, createPage, reporter) {
  const result = await graphql(
    `
      {
        articles: allContentfulBlogPost(sort: { createdAt: DESC }) {
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
  const blogListTemplate = path.resolve('./src/templates/BlogList/index.tsx')
  const blogTemplate = path.resolve('./src/templates/Blog/index.tsx')

  const articles = result.data.articles.edges
  const PAGE_SIZE = 9

  const chunks = chunk(articles, PAGE_SIZE)
  const numPages = Math.ceil(articles.length / PAGE_SIZE)

  chunks.forEach((_, index) => {
    createPage({
      path: index === 0 ? `blog` : `blog/${index + 1}`,
      component: blogListTemplate,
      context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        numPages,
        currentPage: index + 1,
        hasNextPage: index != numPages - 1,
        hasPrevPage: index + 1 > 1,
        nextPageLink: index != numPages - 1 ? `/blog/${index + 2}` : null,
        prevPageLink: index + 1 > 1 ? `/blog/${index - 2}` : null,
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

async function createGenericPages(graphql, createPage, reporter) {
  const result = await graphql(
    `
      {
        pages: allContentfulGenericPage {
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
  const genericTemplate = path.resolve('./src/templates/Generic/index.tsx')

  const pages = result.data.pages.edges

  pages.forEach(({ node }) => {
    // loop over split pages
    createPage({
      path: `/pages/${node.slug}`,
      component: genericTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

// Create products pages
async function createProductsPages(graphql, createPage, reporter) {
  const result = await graphql(
    `
      query allContentfulProductsQuery {
        allContentfulProducts(sort: { order: ASC }) {
          edges {
            node {
              id
              name
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

  const template = path.resolve('./src/templates/Product/index.tsx')

  const pages = result.data.allContentfulProducts.edges

  pages.forEach(({ node }) => {
    createPage({
      path: `/${node.name.toLowerCase()}`,
      component: template,
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
  if (stage === 'develop') {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /Conflicting order. Following module has been added/,
      })
    )
  }
  actions.replaceWebpackConfig(config)
}
