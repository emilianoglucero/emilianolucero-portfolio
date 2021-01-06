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
    // 'gatsby-plugin-optimize-svgs',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images/`,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-TR6VY7K2Y3",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Enables Google Optimize using your container Id
          //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          //cookieDomain: "example.com",
        }, 
      }
  ],
}
