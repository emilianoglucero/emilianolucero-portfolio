/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// Gatsby settings for the environment variables
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Uses the environment variable
        ],
        pluginConfig: {
          head: true, // Ensure the script is in the head
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Emiliano Lucero Web Dev Portfolio",
        short_name: "Emiliano Lucero",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#60D800",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    // 'gatsby-plugin-optimize-svgs',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
