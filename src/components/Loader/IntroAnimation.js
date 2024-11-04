import React, { useRef, useEffect, useState } from "react"
import { gsap } from "../../lib/gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import "./IntroAnimation.css"

const IntroAnimation = () => {
  const videoRef = useRef(null)
  const [videoSrc, setVideoSrc] = useState("")
  const [videoType, setVideoType] = useState("")
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent)
    const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent)

    setIsMobileDevice(isMobileDevice)

    if (isSafariBrowser) {
      setVideoSrc("/videos/animation-safari-full.mov")
      setVideoType("video/quicktime")
    } else if (isMobileDevice) {
      setVideoSrc("/videos/animation-short.webm")
      setVideoType("video/webm")
    } else {
      setVideoSrc("/videos/animation-full.webm")
      setVideoType("video/webm")
    }

    // Dynamically preload the video
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "video"
    link.href = videoSrc
    link.type = videoType
    document.head.appendChild(link)
  }, [videoSrc, videoType])

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
        loop={isMobileDevice}
      >
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroAnimation
