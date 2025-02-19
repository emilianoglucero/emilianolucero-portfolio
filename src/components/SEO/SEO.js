// src/components/SEO.js
import React from "react"

export const Seo = ({ title, description, image, url }) => (
  <>
    <title>Emiliano Lucero the Web Dev</title>
    <meta
      name="description"
      content="Web Developer turning ideas into memorable digital experiences"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Emiliano Lucero the Web Dev" />
    <meta
      property="og:description"
      content="Web Developer turning ideas into memorable digital experiences"
    />
    <meta
      property="og:image"
      content="https://storage.googleapis.com/bebeto-pizza-dibuja/og-images/og-image-portfolio.jpg"
    />
    <meta property="og:url" content="https://www.emilianolucero.ar/" />
    <meta property="og:type" content="website" />

    {/* Facebook */}
    <meta property="og:title" content="Emiliano Lucero the Web Dev" />
    <meta
      property="og:description"
      content="Web Developer turning ideas into memorable digital experiences"
    />
    <meta
      property="og:image"
      content="https://storage.googleapis.com/bebeto-pizza-dibuja/og-images/og-image-portfolio.jpg"
    />
    <meta property="og:url" content="https://www.emilianolucero.ar/" />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.emilianolucero.ar/" />
    <meta property="twitter:title" content="Emiliano Lucero the Web Dev" />
    <meta
      property="twitter:description"
      content="Web Developer turning ideas into memorable digital experiences"
    />
    <meta
      property="twitter:image"
      content="https://storage.googleapis.com/bebeto-pizza-dibuja/og-images/og-image-portfolio.jpg"
    />
  </>
)

// Export the Head component for Gatsby
export const Head = () => <Seo />

export default Seo
