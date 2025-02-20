/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// Gatsby settings for the environment variables
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Emiliano Lucero Web Dev Portfolio",
    description:
      "Web Developer turning ideas into memorable digital experiences",
    author: "@emilianolucero",
    siteUrl: "https://www.emilianolucero.info",
  },
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
        background_color: "rgb(240, 240, 240)",
        theme_color: "rgb(253, 200, 246)",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.emilianolucero.info",
        sitemap: "https://www.emilianolucero.info/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg$/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
  ],
}
