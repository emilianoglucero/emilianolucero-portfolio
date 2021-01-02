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
