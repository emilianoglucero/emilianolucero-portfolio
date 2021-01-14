/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 //Gatsby settings for the environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV || "development"}`,
// });

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
        // this option places the tracking script into the head of the DOM
        head: true,
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
    // 'gatsby-plugin-optimize-svgs',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images/`,
        },
      },
  ],
}
