/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Urutau',
        short_name: 'Urutau',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/icon.png', // 512 x 512
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.example.com',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}\\src\\pages`,
        ignore: ['**/styles.js'],
        nocase: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
