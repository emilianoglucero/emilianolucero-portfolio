import React from "react"
import { loadableP5 as P5Wrapper } from "./loadable"
import Sketch from "./sketch"
import "./p5.css"

import gsap from "gsap"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"

const P5 = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.to(".p5-background", {
      opacity: 1,
      delay: 7.5,
      duration: 1,
      ease: "power2.inOut",
    })
  })

  return (
    <div className="opacity-0 p5-background">
      <P5Wrapper sketch={Sketch} />
    </div>
  )
}

export default P5
