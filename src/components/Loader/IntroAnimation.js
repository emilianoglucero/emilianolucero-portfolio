import React, { useRef } from "react"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import animation from "../../animations/animation.webp"
import "./IntroAnimation.css"

const IntroAnimation = () => {
  const videoRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const animateIn = () => {
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 2,
      })
    }

    const animateOut = () => {
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
        delay: 6.5,
      })
    }

    animateIn()
    animateOut()
  }, [])

  return (
    <div className="intro-animation-wrapper">
      <img
        ref={videoRef}
        src={animation}
        className="animation-container"
        alt="Intro animation of Emi name moving"
      />
    </div>
  )
}

export default IntroAnimation
