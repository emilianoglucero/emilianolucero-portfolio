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

    if (isSafari) {
      setVideoSrc("/videos/animation-safari-full.mov")
      setVideoType("video/quicktime")
    } else if (isMobile) {
      setVideoSrc("/videos/animation-short.webm")
      setVideoType("video/webm")
    } else {
      setVideoSrc("/videos/animation-full.webm")
      setVideoType("video/webm")
    }

    console.log("videoSrc:", videoSrc)
    console.log("videoType:", videoType)

    // Dynamically preload the video
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "video"
    link.href = videoSrc
    link.type = videoType
    document.head.appendChild(link)
  }, [isMobile, isSafari, videoSrc, videoType])

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
