const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createArticlePages(graphql, createPage)
  await createApiDocPages(graphql, createPage)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    if (fileNode.internal.type === `File`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      console.log('@@@@@@@@@@')
      console.log(`\n`, slug)
      console.log('@@@@@@@@@@')
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
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

async function createArticlePages(graphql, createPage) {
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

  const numPages = Math.ceil(articles.length / PAGE_SIZE)

  Array(numPages)
    .fill(0)
    .forEach((_, index) => {
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

async function createApiDocPages(graphql, createPage) {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const ApiTemplate = path.resolve('./src/templates/ApiDocumentation/index.tsx')
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.fields) {
      return
    }
    createPage({
      path: node.fields.slug,
      component: ApiTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
