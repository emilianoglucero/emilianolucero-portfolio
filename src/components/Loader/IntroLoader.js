import React from "react"
import IntroAnimation from "./IntroAnimation"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import "./IntroLoader.css"

const Marquee = () => (
  <div className="relative flex gap-3 text-sm marquee md:gap-20">
    {[...Array(20)].map((_, j) => (
      <p key={j}>~~-</p>
    ))}
  </div>
)

const Bar = ({ index }) => (
  <div
    className={`bar flex-1 w-full py-6 -mt-px ${
      index === 4 ? "flex flex-col justify-end" : ""
    }`}
  >
    {(index === 0 || index === 4) && <Marquee />}
  </div>
)

const IntroLoader = () => {
  useIsomorphicLayoutEffect(() => {
    const animateBars = () => {
      gsap.to(".bar", {
        delay: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      })

      gsap.to(".bar", {
        delay: 7.5,
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      })
    }

    const animateMarquee = () => {
      gsap.to(".marquee", {
        delay: 0,
        left: "0vw",
        duration: 4,
        ease: "power4.inOut",
      })

      gsap.to(".marquee", {
        opacity: 0,
        repeat: 4,
        yoyo: true,
        duration: 0.1,
        delay: 6.8,
        onComplete: () => {
          gsap.to(".marquee", {
            opacity: 1,
          })
        },
      })

      gsap.to(".marquee", {
        delay: 6.5,
        left: "-100vw",
        duration: 4,
        ease: "power4.inOut",
      })
    }

    animateBars()
    animateMarquee()
  }, [])

  return (
    <>
      <div className="intro-animation-container">
        <IntroAnimation />
      </div>
      <div className="intro-loader-container">
        {[...Array(5)].map((_, i) => (
          <Bar key={i} index={i} />
        ))}
      </div>
    </>
  )
}

export default IntroLoader
