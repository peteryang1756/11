const packageJson = require('./package.json');

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Flarum Docs`,
    description: packageJson.description,
    author: `@flarum`,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flarum Docs`,
        short_name: `Flarum Docs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/branding/icon.svg`,
      },
    },
  ],
};
