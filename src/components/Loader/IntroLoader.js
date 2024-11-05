import React from "react"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import "./IntroLoader.css"
import { useDeviceDetect } from "../../hooks/use-device-detect"
import IntroVideo from "./IntroVideo"

const Marquee = React.memo(() => (
  <div className="relative flex gap-3 text-sm marquee md:gap-20">
    {[...Array(18)].map((_, j) => (
      <span key={j}>~~-</span>
    ))}
  </div>
))

const Bar = React.memo(({ index }) => (
  <div
    className={`bar flex-1 w-full py-6 -mt-px ${
      index === 4 ? "flex flex-col justify-end" : ""
    }`}
  >
    {(index === 0 || index === 4) && <Marquee />}
  </div>
))

const IntroLoader = () => {
  const { isMobile, isSafari } = useDeviceDetect()

  useIsomorphicLayoutEffect(() => {
    if (isMobile === undefined || isSafari === undefined) {
      return // Exit early if isMobile or isSafari is undefined
    }

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
        delay: 6.8,
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
        delay: 6.2,
        onComplete: () => {
          gsap.to(".marquee", {
            opacity: 1,
          })
        },
      })

      gsap.to(".marquee", {
        delay: 5.6,
        left: "-100vw",
        duration: 4,
        ease: "power4.inOut",
      })
    }

    animateBars()
    animateMarquee()
  }, [isMobile, isSafari])

  // Guard to prevent rendering until isMobile and isSafari are determined
  if (isMobile === undefined || isSafari === undefined) {
    return null // Render nothing or a loading spinner
  }

  let videoSrc = ""
  let videoType = ""
  let loop = false

  if (isSafari) {
    videoSrc = "/videos/animation-safari-full.mov"
    videoType = "video/quicktime"
  } else if (isMobile) {
    videoSrc = "/videos/animation-short.webm"
    videoType = "video/webm"
    loop = true
  } else {
    videoSrc = "/videos/animation-full.webm"
    videoType = "video/webm"
  }

  return (
    <>
      <div className="intro-animation-container">
        <IntroVideo videoSrc={videoSrc} videoType={videoType} loop={loop} />
      </div>
      <div className="intro-loader-container">
        {[...Array(5)].map((_, i) => (
          <Bar key={i} index={i} />
        ))}
      </div>
    </>
  )
}

export default React.memo(IntroLoader)
