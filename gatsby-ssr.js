// gatsby-ssr.js

import React from "react"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link
      key="ft88"
      rel="preload"
      href="/fonts/FT88-School.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="nb_international_pro"
      rel="preload"
      href="/fonts/nb_international_pro_regular-webfont.woff2"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ])
}
