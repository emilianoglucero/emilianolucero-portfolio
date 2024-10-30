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
      key="preload-video"
      rel="preload"
      href="/videos/animation.webm"
      as="video"
      type="video/webm"
    />,
    <link
      key="preload-video-2"
      rel="preload"
      href="/videos/animation.mov"
      as="video"
      type="video/quicktime"
    />,
  ])
}
