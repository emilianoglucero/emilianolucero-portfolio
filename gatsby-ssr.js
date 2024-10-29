// gatsby-ssr.js

import React from "react"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link
      key="ft88"
      rel="preload"
      href="/fonts/FT88-School.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="nb_international_pro"
      rel="preload"
      href="/fonts/nb_international_pro_regular-webfont.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-animation"
      rel="preload"
      href="/images/animation.webp"
      as="image"
      type="image/webp"
    />,
  ])
}
