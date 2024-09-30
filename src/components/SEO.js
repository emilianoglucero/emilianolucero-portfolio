// src/components/SEO.js
import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => (
  <Helmet>
    <title>Emiliano Lucero the Web Dev</title>
    <meta property="og:title" content="Emiliano Lucero the Web Dev" />
    <meta
      property="og:description"
      content="A skilled full-stack developer with 7+ years of experience in the software industry"
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
      content="A skilled full-stack developer with 7+ years of experience in the software industry"
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
      content="A skilled full-stack developer with 7+ years of experience in the software industry"
    />
    <meta
      property="twitter:image"
      content="https://storage.googleapis.com/bebeto-pizza-dibuja/og-images/og-image-portfolio.jpg"
    />
  </Helmet>
)

export default SEO
