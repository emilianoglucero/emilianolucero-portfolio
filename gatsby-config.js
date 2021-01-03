/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
    resolve: `gatsby-plugin-postcss`,
    options: {
        postCssPlugins: [require("tailwindcss")],
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Emiliano Lucero Portfolio',
        short_name: 'Emiliano Lucero',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images/`,
        },
      },
  ],
}
