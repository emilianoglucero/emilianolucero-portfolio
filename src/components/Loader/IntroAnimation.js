import React, { useRef, useEffect, useState } from "react"
import { gsap } from "../../lib/gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import { useDeviceDetect } from "../../hooks/use-device-detect"
import "./IntroAnimation.css"

const IntroAnimation = () => {
  const videoRef = useRef(null)
  const { isMobile, isSafari } = useDeviceDetect()
  const [videoSrc, setVideoSrc] = useState("")
  const [videoType, setVideoType] = useState("")

  useEffect(() => {
    console.log("isMobile:", isMobile)
    console.log("isSafari:", isSafari)

    let src = ""
    let type = ""

    if (isSafari) {
      src = "/videos/animation-safari-full.mov"
      type = "video/quicktime"
    } else if (isMobile) {
      src = "/videos/animation-short.webm"
      type = "video/webm"
    } else {
      src = "/videos/animation-full.webm"
      type = "video/webm"
    }

    setVideoSrc(src)
    setVideoType(type)

    console.log("videoSrc:", src)
    console.log("videoType:", type)
  }, [isMobile, isSafari])

  useIsomorphicLayoutEffect(() => {
    const animateIn = () => {
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 1,
        delay: 2.2,
        onStart: () => {
          videoRef.current.play()
        },
      })
    }

    const animateOut = () => {
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
        delay: 6.4,
        onComplete: () => {
          videoRef.current.pause()
          videoRef.current.currentTime = 0 // Reset video to the beginning
        },
      })
    }

    animateIn()
    animateOut()
  }, [])

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        className="animation-container w-[480px] h-[270px] sm:w-[960px] md:w-[720px] md:h-auto object-cover"
        alt="Intro animation of Emi name moving"
        muted
        playsInline
        loop={isMobile}
      >
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroAnimation
