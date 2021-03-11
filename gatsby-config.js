const path = require(`path`)
const themeOptions = require('gatsby-theme-apollo-docs-remodzy/theme-options')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports.onPostBuild = () => {
  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}

module.exports = {
  pathPrefix: '/roxabo',
  siteMetadata: {
    defaultTitle: 'Roxabo',
    titleTemplate: '%s · The Roxabo',
    defaultDescription: 'Description',
    defaultImage: '',
    siteUrl: 'https://roxabo.com',
    article: '',
    twitterUsername: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_TAG_ID,
          //"GA-TRACKING_ID", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //gtagConfig: {
        //  optimize_id: "OPT_CONTAINER_ID",
        //  anonymize_ip: true,
        //  cookie_expires: 0,
        //},
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-zendesk-chat',
      options: {
        zendeskKey: process.env.ZENDESK_KEY,
        enableDuringDevelop: false, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
        connectOnPageLoad: true,
      },
    },
    {
      resolve: 'gatsby-theme-apollo-docs-remodzy',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Client (React)',
        description: 'A guide to using the Apollo GraphQL Client with React',
        githubRepo: 'remodzy/docs',
        checkLinksOptions: {
          exceptions: ['/api/core/ApolloClient/', '/v2/api/apollo-client/'],
        },
        sidebarCategories: {
          null: [
            'index',
            'why-apollo',
            'get-started',
            '[Changelog](https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md)',
          ],
          'API - Core': ['api/core/ApolloClient', 'api/core/ObservableQuery'],
          'API - Cache': ['api/cache/InMemoryCache'],
          'API - Link': [
            'api/link/apollo-link-batch-http',
            'api/link/apollo-link-context',
            'api/link/apollo-link-error',
            'api/link/apollo-link-rest',
            'api/link/apollo-link-retry',
            'api/link/apollo-link-ws',
            'api/link/persisted-queries',
          ],
        },
      },
    },
  ],
}
