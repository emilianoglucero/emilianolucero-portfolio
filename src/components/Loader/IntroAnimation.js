import React, { useRef, useEffect, useState } from "react"
import { gsap } from "../../lib/gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import { isSafari, isMobile, browserName } from "react-device-detect"
import "./IntroAnimation.css"

const IntroAnimation = () => {
  const videoRef = useRef(null)
  const [videoSrc, setVideoSrc] = useState("/videos/animation-full.webm")
  const [videoType, setVideoType] = useState("video/webm")

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isSafariDetected = /^((?!chrome|android).)*safari/i.test(userAgent)
      const isMobileDetected = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      )

      console.log("User Agent:", userAgent)
      console.log("isSafari (react-device-detect):", isSafari)
      console.log("isSafari (detected):", isSafariDetected)
      console.log("isMobile (react-device-detect):", isMobile)
      console.log("isMobile (detected):", isMobileDetected)
      console.log("Browser Name:", browserName)

      if (isSafariDetected) {
        setVideoSrc("/videos/animation-safari-full.mov")
        setVideoType("video/quicktime")
      } else if (isMobileDetected) {
        setVideoSrc("/videos/animation-short.webm")
        setVideoType("video/webm")
      } else {
        setVideoSrc("/videos/animation-full.webm")
        setVideoType("video/webm")
      }
    }

    detectBrowser()
  }, [])

  useEffect(() => {
    console.log("videoSrc:", videoSrc)
    console.log("videoType:", videoType)

    // Dynamically preload the video
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "video"
    link.href = videoSrc
    link.type = videoType
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [videoSrc, videoType])

  useIsomorphicLayoutEffect(() => {
    const animateIn = () => {
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 1,
        delay: 2.2,
        onStart: () => {
          videoRef.current
            .play()
            .catch(error => console.error("Video playback failed:", error))
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

  const handleVideoError = e => {
    console.error("Video error:", e)
    // Fallback to WebM if MOV fails
    if (videoSrc.endsWith(".mov")) {
      setVideoSrc("/videos/animation-full.webm")
      setVideoType("video/webm")
    }
  }

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        className="animation-container w-[480px] h-[270px] sm:w-[960px] md:w-[720px] md:h-auto object-cover"
        alt="Intro animation of Emi name moving"
        muted
        playsInline
        loop={isMobile}
        onError={handleVideoError}
      >
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroAnimation
