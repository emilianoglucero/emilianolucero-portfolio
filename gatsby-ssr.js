// gatsby-ssr.js

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="ft88"
      rel="preload"
      href="src/fonts/FT88-School.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="nb_international_pro"
      rel="preload"
      href="src/fonts/nb_international_pro_regular-webfont.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ])
}
