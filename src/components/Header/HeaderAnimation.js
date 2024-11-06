import React from "react"
import Animated from "../../images/emi.svg"
import { StaticImage } from "gatsby-plugin-image"

function HeaderAnimation() {
  return (
    <div className="flex justify-center ">
      <StaticImage
        src="../../images/hero/hero-2.jpg"
        alt="A romantic web dev with flowers"
        placeholder="blurred"
        layout="constrained"
        className="w-1/2 rounded lg:w-1/3 sm:w-1/2"
        // width={600}
        // height={900}
      />
    </div>
  )
}

export default HeaderAnimation
